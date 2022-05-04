<?php

use Illuminate\Http\Request;

Route::namespace('Api')->group(function() {
    Route::get('/users', 'UserController@index');
    Route::get('/products', 'ProductController@index');
    Route::get('/products/{product}', 'ProductController@show');
    Route::get('/categories', 'CategoryController@index');
    Route::get('/categories/{category}', 'CategoryController@show');

    Route::post('/paypal', 'UserController@paypal');
    Route::post('/stripe', 'UserController@stripe');
    //用户创建订单
    Route::post('/user/{user}/bank', 'UserController@bank');
    // invoiceAddress 
    Route::post('/user/{user}/invoiceaddress/create', 'InvoiceAddController@create');
    Route::get('/user/{user}/invoiceaddress/{address}/show', 'InvoicAaddController@show');
    Route::put('/user/{user}/invoiceaddress/{address}/update', 'InvoiceAddController@update');
    Route::delete('/user/{user}/invoiceaddress/{address}/delete', 'InvoiceAddController@destroy');
    // consignedAddress
    Route::post('/user/{user}/consigneeaddress/create', 'ConsigneeaddController@create');
    Route::get('/user/{user}/consigneeaddress/{address}/show', 'ConsigneeaddController@show')->middleware('auth:api');
    Route::put('/user/{user}/consigneeaddress/{address}/update', 'ConsigneeaddController@update');
    Route::delete('/user/{user}/consigneeaddress/{address}/delete', 'ConsigneeaddController@destroy');
});

Route::group([
    'namespace' => 'Api\Auth',
], function() {
    // 登陆
    Route::post('/login', 'LoginController@login');
    Route::post('/logout', 'LoginController@logout');
    // 注册
    Route::post('/register', 'RegisterController@register');
    // 忘记密码
    Route::post('/password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::get('/password/reset/token', 'ResetPasswordController@showResetForm');
    Route::post('/password/reset', 'ResetPasswordController@reset');
    // 修改密码
    Route::post('/password/confirm', 'ConfirmPasswordController@confirm');
});