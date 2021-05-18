<?php

namespace App\Admin\Controllers;

use App\Models\Sku;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SkuController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Sku';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Sku());

        $grid->column('id', __('Id'));
        $grid->column('product_id', __('Product id'));
        $grid->column('title', __('Title'));
        $grid->column('price', __('Price'));
        $grid->column('image')->display(function ($pictures) {
            return $pictures;
        })->image('', 100, 100);
        
        $grid->column('pcs_in_carton', __('Pcs in carton'));
        $grid->column('length', __('Length'));
        $grid->column('width', __('Width'));
        $grid->column('height', __('Height'));
        $grid->column('net_weight', __('Net weight'));
        $grid->column('gross_weight', __('Gross weight'));

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
        $show = new Show(Sku::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('product_id', __('Product id'));
        $show->field('title', __('Title'));
        $show->field('price', __('Price'));
        $show->field('image', __('Image'));
        $show->field('pcs_in_carton', __('Pcs in carton'));
        $show->field('length', __('Length'));
        $show->field('width', __('Width'));
        $show->field('height', __('Height'));
        $show->field('net_weight', __('Net weight'));
        $show->field('gross_weight', __('Gross weight'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Sku());

        $form->number('product_id', __('Product id'));
        $form->text('title', __('Title'));
        $form->number('price', __('Price'));
        $form->multipleImage('image')->removable();
        $form->number('pcs_in_carton', __('Pcs in carton'));
        $form->number('length', __('Length'));
        $form->number('width', __('Width'));
        $form->number('height', __('Height'));
        $form->number('net_weight', __('Net weight'));
        $form->number('gross_weight', __('Gross weight'));

        return $form;
    }
}
