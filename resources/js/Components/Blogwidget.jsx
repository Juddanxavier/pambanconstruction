import Axios from '@/Services'
import { Link } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';

export default function Blogwidget() {
        const pathUrl = import.meta.env.VITE_STORAGE_IMG;

    const [blog, setBlog] = useState([])
    const getData = async () => {
        await Axios.get('/blogAll')
            .then(res => {
                setBlog(res.data)
            }).catch(err => {
                console.error(err)
            })
    }
    useEffect(() => {
      getData()
    }, [])
    
    return (
        <div>
      <div className="flex px-10 md:mx-10 text-slate-800 justify-center">
                    <h1 className="text-left font-bold text-2xl">Blogs and News</h1>
                </div>
      <div className="grid gap-12 lg:grid-cols-2 m-20">          
          {blog.map((item) => (
              <div key={item.id } className="rounded-sm group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md">
          <img src={pathUrl + item.image} alt={item.image} loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-sm transition duration-500 group-hover:rounded-sm" />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900 capitalize">{item.title}</h4>
                              <span className="text-gray-600">{HtmlParser(item.content.substring(0, 200)) }</span>
              </div>
              <Link href={`blog/${item.slug}`} className="block w-max text-indigo-600">Read more</Link>
            </div>
          </div>
        </div>
          ))}
    </div></div>
  )
}
