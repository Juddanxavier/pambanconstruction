import Frontendlayout from '@/Layouts/Frontend'
import { Head, useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function Contact() {
  const form = useForm({
    name: "",
    email: "",
    comment: ""
  })
  const submit = () => {
     form.post(route("pages.contact"))
  }
  return (
      <Frontendlayout>
            <Head title="Contact Us" />
          <div className="mx-10 md:mx-20 my-10">
          <form onSubmit={submit}>
              <div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
  <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
</div>
<div>
  <label className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
</div>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea name="comment" id="comment" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

          </form>
    </div>
      </Frontendlayout>
  )
}
