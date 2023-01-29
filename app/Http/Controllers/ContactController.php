<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    public function index(ContactRequest $request) {
    Mail::to("juddan2008@gmail.com")->send(new ContactForm(
        $request->name,
        $request->phone,
        $request->email,
        $request->messages
    ));

    return redirect()->back()->with('success', 'We have received your message and would like to thank you for writing to us.');
}
//     public function contactPost(Request $request) {
//         $this->validate($request, [
//             'name' => 'required',
//             'email' => 'required|email',
//             'message' => 'required'
//         ]);
//         Mail::send('email', [
//             'name' => $request->get('name'),
//             'email' => $request->get('email'),
//             'message' => $request->get('comment')
//         ], function($message) {
//             $message->from('sales@pambanconstructions.com');
//             $message->to('juddan2008@gmail.com', 'Contact Form')
//                     ->subject('Contact Form from Pambanconstructions.com');
//     });
//     return back()->with('success', 'Thanks for contacting us, We will get back to you soon!');
// }
// public function index() {
//     Mail::to('juddan2008@gmail.com')->send(new ContactForm($request->name,
//         $request->email,
//         $request->message
// ));
// return redirect()->back();
// }
// public function index() {
//     $mailData = [
//         "name" => "demo"
//     ];
//     Mail::to("juddan2008@gmail.com")->send(new ContactForm($mailData));

//     dd("mail sent successfully");
// }

}