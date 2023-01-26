import React, { useContext } from 'react'
import { Modernbuilding } from '../../images/index'
import { motion as m } from 'framer-motion'
import { fadeIn, homeImg, letter, staggerContainer } from '@/FramerMotion/Variants'
import { CursorContext } from './CursorContext'

function Hero() {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <m.main variants={staggerContainer} initial="hidden" animate="animate">
    <m.div variants={letter} className="flex flex-wrap h-auto">
      <div className="md:w-1/2 h-auto justify-center">
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}  className="mx-16 md:mx-32 mt-16 md:mt-48">
        <h1 className="mx-auto text-3xl md:text-6xl font-bold text-slate-800 sm:justify-center uppercase cursor-pointer">Transforming spaces, shaping communities</h1>
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
        </div>
      </div>
      <m.div variants={homeImg} className="flex md:w-1/2 items-end -pb-15">
          <img
          src={Modernbuilding}
          className="h-70 w-full"
          alt="modern building"
        />
      </m.div>
    </m.div>

    <div className="text-white py-10 bg-indigo-900 w-full px-10 md:px-32">
        <div className="container">
        <div className="md:w-3/5">
        <m.p initial={{
        opacity: 0,
        y: 60
    }} whileInView={{
      opacity: 1,
      y: 0,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }} viewport={{once: true}} className="text-3xl font-lg">
            We offer an incredible array of new houses any customized floor plan or home remodeling anything you can imagine.
        </m.p>
        </div>
        </div>
    </div>
    </m.main>

  )
}

export default Hero