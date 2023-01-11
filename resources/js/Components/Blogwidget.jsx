import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';

export default function Blogwidget() {
        const pathUrl = 'https://pambanconstructions.com/storage/'

    const [blog, setBlog] = useState([])
  const getData = async () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'api/blogwidget')
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
    xhr.onload = () => {
      setBlog(xhr.response)
    }
    xhr.send()

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
                
                <img src={pathUrl + `${item.image}`} alt={item.image}  className="md:w-[270px] w-full h-[250px] rounded-sm object-cover" />
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[500px]">
                <h4 className="text-2xl font-semibold text-cyan-900 capitalize">{item.title}</h4>
                  <span className="text-gray-600 text-justify mr-4">{HtmlParser(item.content.substring(0, 200))}</span>
                  
              </div>
                  <span className="block lg:flex hidden items-center justify-center w-[84px] h-[84px] rounded-full bg-transparent hover:bg-blue-600 border-[2px] border-blue-600"><ArrowUpRightIcon className="w-12 text-blue-800 hover:text-white" /></span>
                  
              </div>
            </Link>
        </div>
          ))}
        </div>
    </main>
  )
}
