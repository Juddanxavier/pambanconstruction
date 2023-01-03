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

// Route::get('/', [ProjectController::class, 'index']);

Route::get('project/{slug}', [ProjectController::class, 'detail']);

Route::get('/about', function() {
    return Inertia::render('About');
})->name('pages.about');
Route::get('/', function() {
    return Inertia::render('Welcome');
})->name('pages.home');
Route::get('projects', function() {
  return Inertia::render('Projects');
});
// Route::resource('/', ProjectController::class);
// Route::resource('/{slug}', function(){
//   return Inertia::render('Projectsdetail');
// });
require __DIR__.'/auth.php';

// routes/web.php

Route::get('/storage/{filename}', function ($filename) {
  // Retrieve the file from storage
  $path = Storage::disk('local')->path('storage/' . $filename);
  // Check if the file exists
  if (file_exists($path)) {
    // Send the file data back to the frontend
    return response()->download($path);
  }
  // Return a 404 error if the file does not exist
  return response()->json(['error' => 'File not found'], 404);
});
