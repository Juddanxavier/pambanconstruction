import Frontendlayout from '@/Layouts/Frontend'
import { ClockIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Head, usePage } from '@inertiajs/inertia-react'
import format from 'date-fns/format';
import React, { useState } from 'react'
import HtmlParser from 'react-html-parser';

export default function Blog() {
    const pathUrl = 'https://pambanconstructions.com/'
    const data = usePage().props
    const date = format(new Date(data.blog.created_at), "EEEE, MMMM d, yyyy")
    console.log(data)
  return (
    <Frontendlayout>
          <Head title={`${data.blog.title} - Pamban Construction`} />
          <div className="flex flex-col justify-center text-3xl my-10">
              <h1 className="mx-auto capitalize mx-10 md:mx-20  font-bold text-slate-900">{data.blog.title}</h1>
              <div className="flex justify-center text-sm font-bold text-gray-500 mt-5">
                  {/* <UserCircleIcon className="w-6 mx-2" /> | */}
                  <ClockIcon className="w-6 mx-2" />{date}
              </div>
          </div>
          <div className="md:mx-20 h-96">
              <img className="object-cover w-full h-full md:rounded-lg" src={pathUrl + `storage/${data.blog.image}`} alt={data.blog.image} />
          </div>
          <div className="flex grid m-10 md:m-20 justify-center">
              <div className="max-w-5xl text-xl antialiased tracking-wide text-justify">{HtmlParser(data.blog.content)}</div>
          </div>
          </Frontendlayout>
  )
}
