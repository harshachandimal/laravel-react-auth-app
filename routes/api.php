<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminUserMiddleware;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', [UserController::class, 'userSignIn']);

Route::middleware(['auth:sanctum', AdminUserMiddleware::class])->group(function () {
    Route::get('/get-product-details', [ProductController::class, 'getProductDetails']);
});
