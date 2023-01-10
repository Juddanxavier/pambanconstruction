import Frontendlayout from '@/Layouts/Frontend';
import { Head, Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';

export default function Blogdetail() {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState({
        page: 1,
  });
      const [lastPage, setLastPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
      const pathUrl = 'https://pambanconstructions.com/'

useEffect(() => {
        (async () => {
            const arr = [];
            if (filter.page) {
                arr.push(`page=${filter.page}`);
            }
            const xhr = await new XMLHttpRequest()
            xhr.open('GET', `api/blogAll?${arr.join("&")}`)
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
    xhr.onload = () => {
      setBlogs(
                        filter.page === 1
                            ? xhr.response.data
                            : [...[...blogs, ...xhr.response.data]]
                    );
                    setLastPage(xhr.response.last_page);
                    setIsLoading(true);
    }
    xhr.send()
        })();
}, [filter]);
   const load = () => {
        setFilter({
            ...filter,
            ...isLoading,
            page: filter.page + 1,
        });
    };
  let button;
    if (filter.page !== lastPage) {
        button = (
            <button
                disabled={isLoading}
                type="button"
                className="py-2.5 px-5 mr-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                onClick={load}
            >
                {!isLoading ? (
                    "Load More"
                ) : (
                    <>
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#1C64F2"
                            />
                        </svg>
                        Loading...
                    </>
                )}
            </button>
        );
    } else {
        button = <span>Nothing more to display...</span>;
    }
  return (
    <Frontendlayout>
      <Head title="Blogs & News" />
      <div className="interior grid grid-cols-1 justify-center item-center h-96 mt-5 py-10 md:px-20">
                {/* <img src={Pinkbuilding} alt="pink Building"  /> */}
                <div className="flex flex-col md:items-center items-center justify-center col-span-1">
                    <div>
                        <h1 className="text-white text-6xl text-shadow capitalize font-black">
                            Blogs and News
                        </h1>
                    </div>
                </div>
            </div>
     <div>
      {/* <div className="flex px-10 md:mx-10 text-slate-800 justify-center">
                    <h1 className="text-left font-bold text-2xl"></h1>
                </div> */}
      <div className="grid gap-12 lg:grid-cols-2 m-20">          
          {blogs.map((item) => (
              <div key={item.id } className="rounded-sm group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md">
          <img src={pathUrl + `storage/${item.image}`} alt={item.image} loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-sm transition duration-500 group-hover:rounded-sm" />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900 capitalize">{item.title}</h4>
                              <span className="text-gray-600">{HtmlParser(item.content.substring(0, 200)) }</span>
              </div>
              <Link href={ `blog/${item.slug}`} className="block w-max text-blue-600">Read more</Link>
            </div>
          </div>
        </div>
          ))}
    </div>
            <div className="flex">
                <div className="my-5 md:my-10 mx-auto">{button}</div>
      </div>
      </div>
      </Frontendlayout>
  )
}
