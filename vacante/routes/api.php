<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
	$api->get('users/{id}', 'App\Http\Controllers\Api\UserController@show');
	$api->get('users/create', 'App\Http\Controllers\Api\UserController@create');
	$api->get('users/{id}/update', 'App\Http\Controllers\Api\UserController@update');
	$api->get('users/{id}/delete', 'App\Http\Controllers\Api\UserController@delete');
});