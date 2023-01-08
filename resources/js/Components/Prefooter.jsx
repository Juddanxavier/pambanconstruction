import React from 'react'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'

export default function Prefooter() {
  return (
    <div className="flex flex-col mx-10 md:mx-20 my-10">
                <span className="md:text-9xl text-7xl font-bold text-slate-900 uppercase md:leading-normal mb-5 justify-center">
                    We'd love to hear from you!
                </span>
                <div className="flex justify-end ">
                    <button type="button" className="flex flex-row justify-center text-gray-900 hover:text-white border border-gray-800 max-w-sm hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-5 py-5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white font-black dark:hover:bg-gray-600 dark:focus:ring-gray-800">Let's Talk <ArrowTrendingUpIcon className="w-12 ml-2" /></button>
                </div>

            </div>
  )
}
