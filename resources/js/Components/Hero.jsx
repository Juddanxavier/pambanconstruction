import React, { useEffect, useState } from 'react'
import { Modernbuilding } from '../../images/index'
import { motion as m } from 'framer-motion'
import { homeImg, letter, staggerContainer } from '@/FramerMotion/Variants'
import ReactTyped from 'react-typed';
import { Link } from '@inertiajs/inertia-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Hero() {
  const [projects, setProjects] = useState([]);
    const pathUrl = 'https://pambanconstructions.com/storage/'
     const getData = async () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'api/projectsHero')
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
    xhr.onload = () => {
      setProjects(xhr.response)
      console.log(xhr.response)
    }
    xhr.send()
    }
    useEffect(() => {
        getData();
    }, []);
  
  
  return (
    <m.main variants={staggerContainer} initial="hidden" animate="animate">
    <m.div variants={letter} className="flex flex-wrap h-auto">
      <div className="md:w-3/5  h-auto justify-center relative">
        <div className="mx-20 mt-16 md:mt-48">
        <h1 className="mx-auto text-3xl md:text-6xl font-bold text-slate-800 sm:justify-center capitalize cursor-pointer tracking-wide
">Transforming spaces, shaping  <span className="text-indigo-900"><ReactTyped
                strings={[
                    'Communities.',
                    'Homes.',
                    'Apartments.']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop ></ReactTyped></span></h1>
              <div className="grid grid-col-1 md:grid-cols-3 md:mt-20">
                {projects.map((item, index) => (
                  <Link key={index} href={`project/${item.slug}`} className="item-center md:w-48 w-80 my-5 p-1">
                    <m.div variants={homeImg} className="flex flex-col">
                      <div className="bg-white rounded-sm shadow-md">
            <LazyLoadImage src={ pathUrl + item.gallery[0]} effect="blur" alt={item.title} className="w-full h-full object-cover  rounded-t-sm" />
              <h2 className="text-slate-900 text-xs capitalize p-2">{item.title}</h2>
          </div>
                    </m.div>
                            </Link>
                ))}
              </div>
        </div>
      </div>
      <m.div variants={homeImg} className="flex md:w-2/5 h-screen items-center pt-5">
          <LazyLoadImage
          effect="blur"
          src={Modernbuilding}
          className="object-cover h-5/6 md:w-11/12 z-9 my-10 md:rounded-3xl"
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
            delay: 0.5
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