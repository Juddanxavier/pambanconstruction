<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index() {
        $data = Project::all();

        return Inertia::render(
            'Welcome',
            [
                'projects' => $data,
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION
            ]
            );
    }
    public function detail($slug) {
        $projectDetail = Project::where('slug', $slug)->first();
        $recentProjects = Project::latest('updated_at')->limit(5)->select(
                    'id',
                    'title',
                    'slug', 
                    'gallery',
                    'description'
                )->get();
        return Inertia::render(
            'Projectdetail',[
                'projectDetail' => $projectDetail,
                'recentProjects' => $recentProjects
            ]
            // compact('projectDetail', 'recentProjects')
            // ['projectDetail' => $projectDetail]
        );
    }
}
