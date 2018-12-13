<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

if(config('app.env') === 'production'){
    URL::forceScheme('https');
}

Route::get('/', function () {
    return view('welcome');
});

Route::get('/picture/new', 'PictureNewController@getAction');
Route::post('/picture/new', 'PictureNewController@postAction');
