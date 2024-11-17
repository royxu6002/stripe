<?php

namespace App\Admin\Controllers;

use App\Models\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class UserController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'User';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('phone', __('Phone'));
        $grid->column('email', __('Email'));
        $grid->column('password', __('Password'));
        $grid->column('address', __('Address'));
        $grid->column('city', __('City'));
        $grid->column('country', __('Country'));
        $grid->column('state', __('State'));
        $grid->column('zip_code', __('Zip code'));
        $grid->column('remember_token', __('Remember token'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('stripe_id', __('Stripe id'));
        $grid->column('card_brand', __('Card brand'));
        $grid->column('card_last_four', __('Card last four'));
        $grid->column('trial_ends_at', __('Trial ends at'));

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
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('phone', __('Phone'));
        $show->field('email', __('Email'));
        $show->field('password', __('Password'));
        $show->field('address', __('Address'));
        $show->field('city', __('City'));
        $show->field('country', __('Country'));
        $show->field('state', __('State'));
        $show->field('zip_code', __('Zip code'));
        $show->field('remember_token', __('Remember token'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('stripe_id', __('Stripe id'));
        $show->field('card_brand', __('Card brand'));
        $show->field('card_last_four', __('Card last four'));
        $show->field('trial_ends_at', __('Trial ends at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new User());

        $form->text('name', __('Name'));
        $form->mobile('phone', __('Phone'));
        $form->email('email', __('Email'));
        $form->password('password', __('Password'));
        $form->text('address', __('Address'));
        $form->text('city', __('City'));
        $form->text('country', __('Country'));
        $form->text('state', __('State'));
        $form->text('zip_code', __('Zip code'));
        $form->text('remember_token', __('Remember token'));
        $form->text('stripe_id', __('Stripe id'));
        $form->text('card_brand', __('Card brand'));
        $form->text('card_last_four', __('Card last four'));
        $form->datetime('trial_ends_at', __('Trial ends at'))->default(date('Y-m-d H:i:s'));

        return $form;
    }
}
