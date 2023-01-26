import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Frontendlayout from '../Layouts/Frontend'
import Team from '@/Components/Team'
import Prefooter from '@/Components/Prefooter'

function About() {
  return (
    <Frontendlayout>
      <Head title="About" />
      <div className="m-10 md:m-20">
        <div className="flex flex-col">
        <h1 className="font-bold text-slate-800">About us</h1>
          <div className="grid lg:grid-cols-5 grid-cols-1 my-5">
            <div className="col-span-3 md:text-6xl text-3xl text-indigo-900 font-bold">Exceeding Expectations with Every Project</div>
            <div className="capitialize mt-3 text-slate-800 col-span-2 text-xl sm:text-center">Learn more about the company, the team behind and how we do things right.</div>
        </div>
        </div>
        <div className="grid grid-cols-1 my-10 md:my-20 lg:grid-cols-3 md:px-20 px-10 text-center">
                <div>
            <p className="font-bold text-8xl text-slate-900">100+</p>
                                <p className="font-bold mt-5 text-blue-800">Our Satified Customer.</p>

            <p className="mx-3 text-slate-600">we are proud of the work we do and the relationships we have built with our clients. </p>
                </div>
          <div>
            <p className="font-bold text-8xl text-slate-900">50+</p>
                    <p className="font-bold mt-5 text-blue-800">Buildings Built.</p>
                    <p className="mx-3 text-slate-600">we are proud of the work we do and the relationships we have built with our clients. </p>
                </div>
          <div>
                                <p className="font-bold text-8xl text-slate-900">20+</p>
            <p className="font-bold mt-5 text-blue-800">Years of Operation.</p>
            <p className="mx-3 text-slate-600">we are proud of the work we do and the relationships we have built with our clients. </p>
                </div>
            </div>
      </div>
      <div className="about grid grid-cols-1 justify-center item-center h-96 md:mx-20 mx-10 mt-5 py-10 md:px-20">
                <div className="flex flex-col md:items-center items-center justify-center col-span-1">
                </div>
            </div>
      <div></div>
      <div className="flex md:mx-20 m-10 bg-blue-50 rounded-lg p-10">
        <p className="md:text-3xl text-2xl font-black antialiased text-blue-800 md:mx-20 text-center leading-normal	capitialize">
          We are commited to construct and deliver affordable housing to all, with best-in-class quality and safety standards.
        </p>
      </div>
      <div className="grid grid-col mx-10 md:mx-20 my-10">
        <p className="text-xl my-5 tracking-wide md:mx-20">
          We are one of the <strong class="font-semibold text-gray-900 dark:text-white">best construction company </strong> in Chennai for all residential and commercial buildings. We are one of the most distinguished Construction companies in Chennai, founded by a strong team of experts, and we stand firm to uphold our practice of providing the finest spaces to our customers. Pamban construction than decade constructed and delivered <strong class="font-semibold text-gray-900 dark:text-white">40+ projects </strong>across Chennai. More than <strong class="font-semibold text-gray-900 dark:text-white">100+ happy customers.</strong> Leading by the person who has more than <strong class="font-semibold text-gray-900 dark:text-white">35 years of experience in construction industry.</strong> Supported by young experts collaborating technology with experience and deliver the best quality homes to the customers.
        </p>
        <p className="text-xl my-5 tracking-wide md:mx-20">In addition to our residential construction services, we also specialize in commercial building projects. Whether you are looking to build a new office space or renovate an existing retail location, our team of experts has the skills and experience to bring your vision to life.

At Pamban Constructions, we are always looking for new opportunities to grow and expand our business. That's why we are open to joint ventures with other companies or individuals who share our commitment to excellence.

If you are in need of a <strong class="font-semibold text-gray-900 dark:text-white">reliable, experienced construction company </strong>to help you build your dream home or commercial building, look no further than pamban Constructions. Contact us today to schedule a consultation and learn more about how we can turn your construction goals into a reality.</p>
      </div>
      <Team />
      <Prefooter />
    </Frontendlayout>
    
  )
}

export default About