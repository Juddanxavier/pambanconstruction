<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Project;
use App\Http\Resources\ProjectResource;
use App\Models\Testimonial;
use App\Http\Resources\TestimonialResource;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TestimonialController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/projectsAPI', [ProjectController::class, 'ProjectsAPI']);
Route::get('/teamAPI', [TeamController::class, 'index']);
Route::get('/projectsHero', [ProjectController::class, 'hero']);
Route::get('/projectfeatured', [ProjectController::class, 'index']);
Route::get('blogwidget', [BlogController::class, 'widgetGet']);
Route::get('/blogAll', [BlogController::class, 'Bloglist']);
Route::get('/testimonialAPI', [TestimonialController::class, 'index']);

