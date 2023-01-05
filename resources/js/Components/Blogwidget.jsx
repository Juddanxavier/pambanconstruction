import Axios from '@/Services'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';

export default function Blogwidget() {
        const pathUrl = import.meta.env.VITE_STORAGE_IMG;

    const [blog, setBlog] = useState([])
    const getData = async () => {
        await Axios.get('/blogwidget')
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
        <main>
      <div className="flex px-10 md:mx-10 text-slate-800 justify-center">
                    <h1 className="text-left font-bold text-2xl">Blogs and News</h1>
                </div>
          <div className="my-20 flex flex-col gap-[30px]"> 
          {blog.map((item) => (
            
              <div key={item.id} className="flex justify-center md:flex-row flex-col gap-1">
          <Link href={`blog/${item.slug}`}>
              <div className="m-4 md:w-full md:flex md:items-center">
                
                <img src={pathUrl + item.image} alt={item.image}  className="md:w-[270px] w-full h-[250px] rounded-sm object-cover" />
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[500px]">
                <h4 className="text-2xl font-semibold text-cyan-900 capitalize">{item.title}</h4>
                  <span className="text-gray-600 text-justify mr-4">{HtmlParser(item.content.substring(0, 200))}</span>
                  
              </div>
                  <span className="block lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-slate-800"><ArrowUpRightIcon className="w-16" /></span>
                  
          </div></Link>
        </div>
          ))}
        </div>
    </main>
  )
}
