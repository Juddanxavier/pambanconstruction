import Frontendlayout from '@/Layouts/Frontend';
import { Head } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion as m } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/FramerMotion/Variants'

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState({
        page: 1,
  });
      const [lastPage, setLastPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
      const pathUrl = 'https://pambanconstructions.com/'

useEffect(() => {
        (async () => {
            const arr = [];
            if (filter.page) {
                arr.push(`page=${filter.page}`);
            }
            const xhr = await new XMLHttpRequest()
            xhr.open('GET', `api/testimonialAPI?${arr.join("&")}`)
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
    xhr.onload = () => {
      setTestimonials(
                        filter.page === 1
                            ? xhr.response.data
                            : [...[...testimonials, ...xhr.response.data]]
                    );
                    setLastPage(xhr.response.last_page);
                    setIsLoading(false);
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
        <m.div variants={staggerContainer} className="grid my-10">
              <m.div variants={fadeUp} initial="hidden" whileInView="animate" viewport={{ once: true }} className="grid gap-5 mx-auto mt-10 md:mt-20">
                  <div className="justify-left">
                      <p className="capitalize font-bold text-slate-800">testimonials</p>
                      <h1 className="md:text-4xl text-3xl text-indigo-900 font-bold">What Our Customers Say About Us</h1>
                  </div>
              </m.div>   
              <m.div variants={fadeUp} initial="hidden" whileInView="animate" viewport={{ once: true }} className="mx-10 md:mx-20 my-10">
                      <p className="capitalize text-md text-slate-600">
                          we are committed to providing the highest quality products and services to our customers. We take pride in the feedback we receive from our satisfied customers, and we would like to share their experiences with you. Here's what some of our customers have to say about us. We would like to thank our customers for their continued support and for taking the time to share their experiences with us. We are proud to serve such a wonderful community, and we will continue to work hard to provide the best products and services possible.
                      </p>
              </m.div>
              <div className="grid grid-cols gap-5 mx-10 md:mx-20">
                      {testimonials.map((item, index) => (
                          <m.div variants={fadeUp} initial="hidden" whileInView="animate" viewport={{ once: true }} div key={index} className="grid grid-cols-2 gap-5 border-2 p-5 rounded-lg hover:shadow-lg hover:bg-white cursor-pointer">
                              
                              <div className="flex">
                                  <LazyLoadImage src={pathUrl + `storage/${item.photo}`} alt={item.name} width="705" height="423" className="place-self-center  transition duration-500 rounded-md object-cover" />
                              </div>
                              <div className="place-self-center ml-10">
                                  <blockquote className="text-md italic">
    <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <span className="text-gray-600 place-self-center">{HtmlParser(item.content)}</span>
</blockquote>
                                  
                                  <p className="place-self-center mx-5 font-bold text-xl leading-loose antialiased md:subpixel-antialiased">~ { item.name}</p>
                              </div>
                          </m.div>
                      ))}
              </div>
              <div className="flex">
                <div className="my-5 md:my-10 mx-auto">{button}</div>
      </div>
        </m.div>
      </Frontendlayout>
  )
}

export default Testimonial