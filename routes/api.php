<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Project;
use App\Http\Resources\ProjectResource;
use App\Models\Testimonial;
use App\Http\Resources\TestimonialResource;
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

Route::get('/projects', function() {
    $projects = Project::orderBy('title')->get();

    return ProjectResource::collection($projects);
});

Route::get('/testimonial', function() {
    $testimonial = Testimonial::orderBy('name')->get();

    return TestimonialResource::collection($testimonial);
});