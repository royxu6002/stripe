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
    // protected function detail($id)
    // {
    //     $show = new Show(Order::findOrFail($id));
        
    //     $show->field('id', __('Purchase Order Id'));
    //     $show->field('user.email');
    //     $show->field('invoice_address_id', 'Bill To');
    //     $show->field('transaction_id', __('Transaction id'));
    //     $show->field('total', __('Total'));
    //     $show->field('consignee_address_id', 'Ship To');
    //     $show->skus('skus', function ($skus) {
    //         $skus->resource('/admin/sku');
    //         $skus->product()->name();
    //         $skus->title();
    //         $skus->pivot('Quantity* Price')->display(function($pivot) {
    //             return $pivot['quantity'].'* '.$pivot['price'];
    //         });
    //     });
    
    //     $show->field('created_at', __('Created at'));
    //     $show->field('updated_at', __('Updated at'));

    //     return $show;
    // }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Order());

        // $form->number('user_id', __('User id'));
        $form->number('invoice_no', __('Invoice number'));
        $form->text('transaction_id', __('Transaction id'));
        $form->text('status', __('Order Status'));
        $form->text('payment_term', __('Payment term, T/T %'));
        $form->text('price_term', __('Price term, FOB, EXW'));
        $form->text('from', __('From, Sea Port'));
        $form->text('to', __('TO, Sea port'));
        // $form->number('total', __('Total'));
        $form->table('plus_charges', __('Plus Charges'), function ($form) {
                $form->text('name');
                $form->text('value');
        });
        $form->date('delivery_date');
        $form->date('due_date');

        return $form;
    }

    // 重新写了订单页面展示页面
    public function show($id, Content $content)
    {
        $order = Order::with('user:email,id')->find($id);
        $goods = $order->skus()->with('product:name,id,hs_code')->get();
        $cbm = 0;
        $weight = 0;
        $value = 0;
        $quantity = 0;
        $grand_total = $order->total/100;

        foreach($order->plus_charges as $charge) {
            $grand_total += $charge['value']/100;
        }
      
        foreach($order->skus()->get() as $sku) {
            $cbm += ($sku->pivot->quantity/$sku->pcs_in_carton)*($sku->length *$sku->width *$sku->height)/1000000000;
            $weight += $sku->gross_weight/100*($sku->pivot->quantity/$sku->pcs_in_carton);
            $value += $sku->pivot->price* $sku->pivot->quantity/100;
            $quantity += $sku->pivot->quantity;
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
                'quantity' => $quantity,
                'grand_total' => $grand_total,
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
                'quantity' => $quantity,
                'grand_total' => $grand_total,
            ];
        }

        return $content->title('Order Details')
                    ->description('Order')
                    ->view('order.show', $address);
    }
}
