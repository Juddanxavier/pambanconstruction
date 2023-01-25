<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Packages;
use Inertia\Inertia;

class PackagesController extends Controller
{
    public function index() {
        $packages = Packages::all();
        return Inertia::render('Packages', [
            'packages' => $packages
        ]);
    }
}
