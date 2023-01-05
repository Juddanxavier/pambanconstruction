import React from 'react'
import { Modernbuilding } from '../../images/index'
import { motion as m } from 'framer-motion'
import { fadeIn, staggerContainer} from '@/FramerMotion/Variants'

function Hero() {
  return (
    <m.main variants={staggerContainer} initial="hidden" animate="show" >
    <div className="flex flex-wrap h-auto">
      <div className="md:w-1/2 h-auto">
        <div className="mx-16 md:mx-32 mt-16 md:mt-48">
        <m.h1 variants={fadeIn("down")}className="mx-auto text-4xl md:text-6xl font-black text-slate-800 uppercase">Transforming spaces, shaping communities</m.h1>
        <div className="flex my-24 font-light text-gray-500">
            <div className="pr-4">
              <m.span variants={fadeIn("down")} className="uppercase">Apartments</m.span>
              <m.p variants={fadeIn("down")} className="text-1xl text-gray-900 font-bold pt-2">Residential homes</m.p>
            </div>
            <div className="pr-4">
              <m.span variants={fadeIn("down")} className="uppercase">Office</m.span>
              <m.p variants={fadeIn("down")} className="text-1xl text-gray-900 font-bold pt-2">Joint Venture</m.p>
            </div>
            <div className="pr-4">
              <m.span variants={fadeIn("down")} className="uppercase">Renovation</m.span>
              <m.p variants={fadeIn("down")} className="text-1xl text-gray-900 font-bold pt-2">Commerical Building</m.p>
            </div>
          </div>
        {/* <div
            className="description w-full my-16 text-gray-500 text-sm"
          >
            The best construction company in Chennai for all residential and commercial buildings. We are one of the most distinguished Construction companies in Chennai, founded by a strong team of experts, and we stand firm to uphold our practice of providing the finest spaces to our customers. Pamban construction than decade constructed and delivered 40+ projects across Chennai.
          </div> */}
        </div>
      </div>
      <div className="flex md:w-1/2 items-end -pb-15">
          <img
          src={Modernbuilding}
          className="h-70 w-full"
          alt="modern building"
        />
      </div>
    </div>

    <div className="text-white py-10 bg-slate-900 w-full px-10 md:px-32">
        <div className="container">
        <div className="md:w-1/3">
        <m.p variants={fadeIn("down")} initial="hidden" whileInView="show" viewport={{ once: true, amount:0.25}} className="text-2xl font-semibold">
            We offer an incredible array of new houses any customized floor plan or home remodeling anything you can imagine.
        </m.p>
        </div>
        </div>
    </div>
    </m.main>

  )
}

export default Hero