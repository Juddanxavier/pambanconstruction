<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request) {
    Mail::to('juddan2008@gmail.com')->send(new ContactForm(
        $request->name,
        $request->phone,
        $request->email,
        $request->messages
    ));
// return to_route('pages.contact');
    return redirect()->back()->with('message', 'We have received your message and would like to thank you for writing to us.');
}


}