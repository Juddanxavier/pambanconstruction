<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [ProjectController::class, 'index'])->name('project.index');

Route::get('project/{slug}', [ProjectController::class, 'detail'])->name('project.detail');

Route::get('about', function() {
    return Inertia::render('About');
});

Route::resource('/', ProjectController::class);
// Route::resource('/{slug}', ProjectController::class);
require __DIR__.'/auth.php';
