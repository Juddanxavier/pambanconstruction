<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    public function contactPost(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'comment' => 'required'
        ]);
        Mail::send('email', [
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'comment' => $request->get('comment')
        ], function($message) {
            $message->from('sales@pambanconstructions.com');
            $message->to('juddan2008@gmail.com', 'Contact Form')
                    ->subject('Contact Form from Pambanconstructions.com');
    });
    return back()->with('success', 'Thanks for contacting us, We will get back to you soon!');
}
}