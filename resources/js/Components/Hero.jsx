import React, { useEffect, useState } from 'react'
import { Modernbuilding, Pinkbuilding } from '../../images/index'
import { motion as m } from 'framer-motion'
import { fadeUpProject, homeImg, letter, staggerContainer } from '@/FramerMotion/Variants'
import ReactTyped from 'react-typed';
import { Link } from '@inertiajs/inertia-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

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
    }
    xhr.send()
    }
    useEffect(() => {
        getData();
    }, []);
   const settings = {
      dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1
    };
  
  return (
    <m.main variants={staggerContainer} initial="hidden" animate="animate">
    <m.div variants={letter} className="flex flex-wrap h-auto">
      <div className="md:w-1/2  h-auto justify-center relative">
        <div className="mx-20 mt-16 md:mt-48">
        <m.h1 variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{ once: true }} className="mx-auto text-3xl md:text-5xl font-bold text-slate-800 sm:justify-center capitalize cursor-pointer tracking-wide
">Transforming spaces, shaping  <span className="text-indigo-900"><ReactTyped
                strings={[
                    'Communities.',
                    'Homes.',
                    'Apartments.']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop ></ReactTyped></span></m.h1>
              <div className="grid my-10">
                <m.p variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{ once: true }} >Expert Builders Creating Exceptional Spaces that Enhance Your Life - Trust Us to Bring Your Vision to Life with Quality Construction Services. From Planning to Completion, We Deliver the Highest Standards of Quality and Attention to Detail. Whether You're Building a New Home or Renovating an Existing Space, Our Team is Committed to Exceeding Your Expectations.</m.p>
            </div>
            <Link href={"/contact"}>
                      <m.button type="button" variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{ once: true }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">Get Started</m.button></Link>

        </div>
      </div>
      <m.div variants={homeImg} className="flex flex-col md:w-1/2 h-screen overflow-hidden">
          <Slider {...settings}>
            {projects.map((item, index) => (
              <div className="grid content-center md:mx-20">
                <Link key={index} href={`project/${item.slug}`}>
                      <m.div variants={homeImg} className="rounded-sm md:w-[600px]  md:h-[600px]">
            <LazyLoadImage src={pathUrl + `${item.image}`} effect="blur" alt={item.title} className="w-full h-full object-cover rounded-xl " />
              <h2 className="text-slate-900 text-md font-bold capitalize p-2">{item.title}</h2>
                    </m.div>
                            </Link>
                </div>
            ))}
          </Slider>


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