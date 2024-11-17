<?php

namespace App\Admin\Controllers;

use App\Models\Shipment;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ShipmentController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Shipment';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Shipment());

        $grid->column('id', __('Id'));
        $grid->column('shipping_mark', __('Shipping mark'));
        $grid->column('order_id', __('Order id'));
        $grid->column('delivery_term', __('Delivery term'));
        $grid->column('express_tracking_no_if', __('Express tracking no if'));
        $grid->column('vessel_if', __('Vessel if'));
        $grid->column('container_no', __('Container no'));
        $grid->column('seal_no', __('Seal no'));
        $grid->column('etd', __('Etd'));
        $grid->column('eta', __('Eta'));
        $grid->column('status', __('Status'));
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
        $show = new Show(Shipment::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('shipping_mark', __('Shipping mark'));
        $show->field('order_id', __('Order id'));
        $show->field('delivery_term', __('Delivery term'));
        $show->field('express_tracking_no_if', __('Express tracking no if'));
        $show->field('vessel_if', __('Vessel if'));
        $show->field('container_no', __('Container no'));
        $show->field('seal_no', __('Seal no'));
        $show->field('etd', __('Etd'));
        $show->field('eta', __('Eta'));
        $show->field('status', __('Status'));
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
        $form = new Form(new Shipment());

        $form->text('shipping_mark', __('Shipping mark'));
        $form->number('order_id', __('Order id'));
        $form->text('delivery_term', __('Delivery term'));
        $form->text('express_tracking_no_if', __('Express tracking no if'));
        $form->text('vessel_if', __('Vessel if'));
        $form->text('container_no', __('Container no'));
        $form->text('seal_no', __('Seal no'));
        $form->date('etd', __('Etd'))->default(date('Y-m-d'));
        $form->date('eta', __('Eta'))->default(date('Y-m-d'));
        // enum status 字段
        $form->select('status', 'Goods Status')->options([
            1 => 'goods not ready',
            2 => 'not shipped',
            3 => 'to be shipped',
            4 => 'en route',
            5 => 'custom clearance',
            6 => 'received',
        ]);

        return $form;
    }
}
