<?php

namespace App\Admin\Controllers;

use App\Models\Product;
use App\Models\Category;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Illuminate\Support\Facades\Auth;

class ProductController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Product';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Product());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('slug', __('Slug'));
        $grid->column('price', __('Price'));
        $grid->column('hs_code', __('HS Code'));
        $grid->column('updated_at', __('Updated at'));

        if (!Auth::guard('admin')->user()->can('products.management')) {
            $grid->tools(function (Grid\Tools $tools) {
                $tools->batch(function (Grid\Tools\BatchActions $actions) {
                    $actions->disableDelete();
                });
            });
            $grid->actions(function (Grid\Displayers\Actions $actions) {
                $actions->disableDelete();
            });
        }
       

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
        $show = new Show(Product::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('slug', __('Slug'));
        $show->field('description', __('Description'));
        $show->field('price', __('Price'));
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
        $form = new Form(new Product());

        $form->text('name', __('Name'));
        $form->text('hs_code', 'HS Code');
        $form->multipleSelect('categories', 'Category')->options(Category::all()->pluck('name', 'id'));
        $form->text('slug', __('Slug'));
        $form->ckeditor('description', __('Description'));
        $form->multipleImage('images')->removable();
        $form->number('price', __('Price'));
        $form->hasMany('skus', function (Form\NestedForm $form) {
            $form->text('title', __('Title'));
            $form->number('price', __('Price'));
            $form->multipleImage('image', __('Image'))->removable();
            $form->number('pcs_in_carton', __('PCS per Carton'));
            $form->number('length', __('Length'));
            $form->number('width', __('Width'));
            $form->number('height', __('Height'));
            $form->number('net_weight', __('Net weight'));
            $form->number('gross_weight', __('Gross weight'));
        });

        return $form;
    }
}
