<?php

Route::get('/', function () {
    return view('app');
});

Route::any('/{any}', function(){
    return view('app');
})->where('any', '.*');

Route::get('/bootstrap', function() {
    return view('bootstrap');
});
// Route::get('/echart', function() {
//     return view('echart');
// });