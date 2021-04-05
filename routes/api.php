<?php

use Illuminate\Http\Request;

Route::get('/products', 'Api\ProductController@index');
Route::get('/products/{product}', 'Api\ProductController@show');

Route::get('/categories', 'Api\CategoryController@index');
Route::get('/categories/{category}', 'Api\CategoryController@show');

Route::post('/paypal', 'Api\PaypalController@create');