<?php

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function () {
    return request()->user();
});

Route::get('/customers', function () {
    return response()->json(Customer::all());
});
Route::get('/employees', function () {
    return response()->json(["msg" => "na"]);
});
Route::get('/products', function () {
    return response()->json(["msg" => "na"]);
});
Route::get('/products/1', function () {
    return response()->json(
        [
            "id" => 1,
            "price" => 50
        ]
        );
});
