<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index() {
        return Project::select('id',
            'title',
            'slug', 
            'gallery',
            'description',
            'is_featured',
            'location',
            'address',
            'status',)->limit(6)->get();
    }
    public function ProjectsAPI(Request $request) {
        $query = Project::query()->select(
            'id',
            'title',
            'slug', 
            'gallery',
            'description',
            'status',
            'location',
        );

        if($s = $request->input('s')) {
            // $query->where('title', 'LIKE', '%' . $s . '%')->get();
            $query->whereRaw("title LIKE '%" . $s . "%'");
        }
        if($sort = $request->input('sort')) {
            $query->whereRaw("status LIKE '%" . $sort . "%'");
        }
        $perPage = 6;
        $page = $request->input('page', 1);
        $total = $query->count();

        $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
        return [
            'data' => $result,
            'total' => $total,
            'page' => $page,
            'last_page' => ceil($total / $perPage)
        ];
    }

    public function detail($slug) {
        $projectDetail = Project::where('slug', $slug)->first();
        $recentProjects = Project::latest('created_at')->limit(4)->select(
                    'id',
                    'title',
                    'slug', 
                    'gallery',
                    'status',
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
