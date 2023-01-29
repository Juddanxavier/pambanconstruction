import Frontendlayout from '@/Layouts/Frontend'
import { ArrowTrendingUpIcon, MapPinIcon, DevicePhoneMobileIcon, AtSymbolIcon } from '@heroicons/react/24/solid'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { People } from '../../images/index'

export default function Contact() {
  const prop = usePage().props
  console.log(prop)
  const { data, setData, post, errors} = useForm({
    name: "",
    phone: "",
    email: "",
    messages: ""
  })
  console.log(errors)

  const submit = (event) => {
    event.preventDefault()
    console.log(data)
    Inertia.post(route('pages.sendmail'), {
      preserveScroll: true,
    }, data)

  }
  return (
      <Frontendlayout>
      <Head title="Contact Us" />
      <div className="grid md:grid-cols-2 gap-5 mt-5 p-10 md:p-20">
        <div className="">
          <p className="capitalize font-black md:text-7xl text-4xl text-slate-800">talk to our experts</p>
          <p className="text-md text-gray-500 my-5 font-medium">Have questions about pricing, plans or just talk to us? Fill out the form and out experts will be in touch directly.</p>
          <div>
            <img className="rounded-md w-full h-64 object-cover" src={People} alt="People" />
          </div>
          <div>
            <p className="my-5 text-lg font-bold text-slate-800">Our Office</p>
            <p className="text-md text-gray-500 my-5 font-medium">Get in Touch with Our Expert Team at Our Convenient Office. Our knowledgeable staff is available to help with any questions or needs. Visit us during business hours for exceptional customer service. We're here to assist you</p>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <p className="flex font-bold text-md text-indigo-600"><MapPinIcon className="w-6 mr-2" /> Address</p>
              <p className="my-5 text-md text-gray-500 my-5 font-medium">102/104, Othavadai Street (adjustant to Subburayan Main Street)
                Nammalwarpet, Chennai - 600 012.
              </p>
            </div>
             <div>
              <p className="flex font-bold text-md text-indigo-600"><DevicePhoneMobileIcon className="w-6 mr-2" /> Phone Number</p>
              <p className="my-2 text-md text-gray-500 my-5 font-medium">97907 30505 / 86808 89161 / 99624 16685</p>

              <p className="flex font-bold text-md text-indigo-600"><AtSymbolIcon className="w-6 mr-2" /> Email</p>
<p className="my-2 text-md text-gray-500 my-5 font-medium">sales@pambanconstructions.com</p>
            </div>
          </div>
        </div>
        <div className="p-10 md:rounded-md md:shadow-xl bg-white">
          <p className="my-5 text-lg font-bold text-slate-800">Connect with Our Team Effortlessly</p>
          <p className="text-md text-gray-500 my-5 font-medium">Fill Out Our Contact Form for Quick Assistance. Simply provide your information and message, and one of our representatives will get back to you promptly. We're here to help!</p>
          <form>
              <div className="mb-6">
  <label className="block mb-2 text-md font-bold text-gray-800">Your name</label>
              <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name " value={data.name} onChange={(e) => setData('name', e.target.value)} />
              {errors.name && <div className="text-red-600">{errors.name}</div>}
  {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-bold text-gray-900">Your Phone number</label>
              <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone Number" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
              {errors.phone && <div className="text-red-600">{errors.phone}</div>}
        </div>
<div className="mb-6">
  <label className="block mb-2 text-md font-bold text-gray-900">Your Email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
              {errors.email && <div className="text-red-600">{errors.email}</div>}
  {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
</div>
            <div className="mb-6">
              <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white">Your message</label>
              <textarea name="messages" id="comment" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment" value={data.messages} onChange={(e) => setData('messages', e.target.value)}></textarea>
              {errors.messages && <div className="text-red-600">{errors.messages}</div>}
</div>
<button onClick={submit} className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Let's Talk <ArrowTrendingUpIcon className="w-6 ml-2" /></button>

          </form>
    </div>
          </div>
      </Frontendlayout>
  )
}
