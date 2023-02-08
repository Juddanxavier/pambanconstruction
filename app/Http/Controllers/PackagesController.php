<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Packages;
use Inertia\Inertia;
use App\Http\Requests\PackageRequest;
use App\Mail\PackageForm;
use Illuminate\Support\Facades\Mail;

class PackagesController extends Controller
{
     public function mail(PackageRequest $request) {
    Mail::to('juddan2008@gmail.com')->send(new PackageForm(
        $request->name,
        $request->phone,
        $request->email,
        $request->package
    ));
    return back()->with('message', 'We have received your message and would like to thank you for writing to us, We will get back to you shortly.');
}
    public function index() {
        $packages = Packages::all();
        return Inertia::render('Packages', [
            'packages' => $packages
        ]);
    }
}
