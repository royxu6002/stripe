<?php

use Illuminate\Http\Request;

Route::namespace('Api')->group(function() {
    Route::get('/users', 'UserController@index');
});

Route::get('/products', 'Api\ProductController@index');
Route::get('/products/{product}', 'Api\ProductController@show');
Route::get('/categories', 'Api\CategoryController@index');
Route::get('/categories/{category}', 'Api\CategoryController@show');

Route::post('/paypal', 'Api\PaypalController@create');
Route::post('/stripe', 'Api\UserController@purchase');



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