<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function widgetGet()
    {
        return Blog::latest()->limit(4)->get();
    }
    public function detail($slug) {
        $blogDetail = Blog::where('slug', $slug)->first();
        return Inertia::render(
            'Blog',[
                'blog' => $blogDetail,
            ]
        );
    }
    public function Bloglist(Request $request) {
        $query = Blog::query();
        $perPage = 9;
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
}
