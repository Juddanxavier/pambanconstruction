import React, { useContext } from 'react'
import { Modernbuilding } from '../../images/index'
import { motion as m } from 'framer-motion'
import { fadeLeft, fadeRight, header, stagger } from '@/FramerMotion/Variants'
import { CursorContext } from './CursorContext'

function Hero() {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <m.main variants={stagger} initial="initial" animate="animate">
    <div className="flex flex-wrap h-auto">
      <div className="md:w-1/2 h-auto">
        <m.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} variants={fadeLeft} className="mx-16 md:mx-32 mt-16 md:mt-48">
        <h1 className="mx-auto text-3xl md:text-6xl font-bold text-slate-800 uppercase cursor-pointer">Transforming spaces, shaping communities</h1>
        <div className="flex my-24 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Apartments</span>
              <p className="text-1xl text-blue-800 font-bold pt-2">Residential homes</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Office</span>
              <p className="text-1xl text-blue-800 font-bold pt-2">Joint Venture</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Renovation</span>
              <p className="text-1xl text-blue-800 font-bold pt-2">Commerical Building</p>
            </div>
          </div>
        </m.div>
      </div>
      <m.div variants={fadeRight} className="flex md:w-1/2 items-end -pb-15">
          <img
          src={Modernbuilding}
          className="h-70 w-full"
          alt="modern building"
        />
      </m.div>
    </div>

    <div className="text-white py-10 bg-slate-900 w-full px-10 md:px-32">
        <div className="container">
        <div className="md:w-3/5">
        <m.p variants={header} initial="initial" whileInView="animate" viewport={{once: true, amount:0.25}} className="text-3xl font-lg">
            We offer an incredible array of new houses any customized floor plan or home remodeling anything you can imagine.
        </m.p>
        </div>
        </div>
    </div>
    </m.main>

  )
}

export default Hero