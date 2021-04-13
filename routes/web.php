<?php

Route::get('/', function () {
    return view('app');
});

Route::any('/{any}', function(){
    return view('app');
})->where('any', '.*');

// 加这个路由是为了发送重置密码邮件, 重置密码逻辑中有需要 route('password.reset'), 否则会报错, 这个需要改进;
// Auth::routes();