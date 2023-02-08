import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion as m } from "framer-motion"
import { fadeUp } from "@/FramerMotion/Variants";
import { LazyLoadImage } from 'react-lazy-load-image-component'

const variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * Math.floor(index / 3),
            duration: 0.7,
        }
    })
}
const ProjectWidget = () => {
    const [projects, setProjects] = useState([]);
    const pathUrl = 'https://pambanconstructions.com/storage/'
     const getData = async () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'api/projectfeatured')
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
    return (
        <m.div initial="hidden" animate="animate">
                <m.div variants={fadeUp} initial="hidden" whileInView="animate" className="flex p-10 md:m-10 text-slate-800 justify-between">
                    <h1 className="text-left font-bold text-2xl">Featured Projects</h1>
                <Link className="flex flex-row text-left text-lg text-blue-500 hover:text-blue-800" href="/projects">View All Projects <ArrowLongRightIcon className="w-6 pl-2"/></Link>
                </m.div>
                <div className="grid grid-col justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 md:mx-20 md:mb-10">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            className="mt-3 block "
                            href={`project/${project.slug}`}
                        >
                            <m.div variants={variants} initial="hidden" whileInView="visible" viewport={{once:true}} custom={index} 
                                className="hover:bg-gray-100 dark:border-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 bg-white border rounded-md shadow-sm  max-w-xs md:max-w-none overflow-hidden">
                               <div className="flex flex-wrap max-w-1/3 max-h-64">
                                <LazyLoadImage effect="blur"
                                    key={project.id}
                                    src={ pathUrl + project.gallery[0]}
                                    alt={project.title}
                                    className="h-64 w-auto object-cover rounded-t-sm"
                                /></div>
                                <div className="p-4">
                                    
                                    <h3 className="font-bold text-lg leading-6 text-slate-700 my-2 uppercase">
                                        {project.title}
                                    </h3>
                                    <h1 className="font-semi-bold text-gray-400">{ project.address}</h1>
                                    
                                </div>
                            </m.div>
                        </Link>
                    ))}
                </div>
            </m.div>
    );
};

export default ProjectWidget;
