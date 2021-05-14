<?php

namespace App\Admin\Controllers;

use App\Models\ConsigneeAddress;
use App\Models\Order;
use App\Models\InvoiceAddress;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Encore\Admin\Layout\Content;

class OrderController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Order';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Order());

        $grid->column('id', __('Id'));
        $grid->column('user.email', __('User Email'));
        $grid->column('transaction_id', __('Transaction id'));
        $grid->column('status', __('Status'));
        $grid->column('total', __('Total'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Order::findOrFail($id));
        
        $show->field('id', __('Purchase Order Id'));
        $show->field('user.email');
        $show->field('invoice_address_id', 'Bill To');
        $show->field('transaction_id', __('Transaction id'));
        $show->field('total', __('Total'));
        $show->field('consignee_address_id', 'Ship To');
        $show->skus('skus', function ($skus) {
            $skus->resource('/admin/sku');
            $skus->product()->name();
            $skus->title();
            $skus->pivot('Quantity* Price')->display(function($pivot) {
                return $pivot['quantity'].'* '.$pivot['price'];
            });
        });
    
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Order());

        $form->number('user_id', __('User id'));
        $form->text('transaction_id', __('Transaction id'));
        $form->text('status', __('Order Status'));
        $form->number('total', __('Total'));

        return $form;
    }

    // 重新写了订单页面展示页面
    public function show($id, Content $content)
    {
        $order = Order::with('user:email,id')->find($id);
        $goods = $order->skus()->with('product:name,id')->get();
        $cbm = 0;
        $weight = 0;
        $value = 0;
        foreach($order->skus()->get() as $sku) {
            $cbm += ($sku->pivot->quantity/$sku->pcs_in_carton)*($sku->length *$sku->width *$sku->height)/1000000000;
            $weight += $sku->gross_weight/100*($sku->pivot->quantity/$sku->pcs_in_carton);
            $value += $sku->pivot->price* $sku->pivot->quantity/100;
        }

        if($order->consignee_address_id) {
            $address = [
                'consignee' => ConsigneeAddress::find($order->consignee_address_id), 
                'billto' => InvoiceAddress::find($order->invoice_address_id),
                'order' => $order,
                'goods' => $goods,
                'cbm' => $cbm,
                'weight' => $weight,
                'value' => $value,
            ];
        } else {
            $address = [
                'billto' => InvoiceAddress::find($order->invoice_address_id),
                'consignee' => null,
                'order' => $order,
                'goods' => $goods,
                'cbm' => $cbm,
                'weight' => $weight,
                'value' => $value,
            ];
        }

        return $content->title('Order Dertails')
                    ->description('Order')
                    ->view('order.show', $address);
    }
}
