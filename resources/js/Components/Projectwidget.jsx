import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ProjectWidget = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProjects] = useState([]);
        const pathUrl = import.meta.env.VITE_STORAGE_IMG;
console.log(pathUrl)
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
        <div>
                <div className="flex p-10 md:m-10 text-slate-800 justify-between">
                    <h1 className="text-left font-bold text-2xl">Featured Projects</h1>
                <Link className="flex flex-row text-left text-lg text-indigo-500 hover:text-indigo-800" href="/projects">View All Projects <ArrowLongRightIcon className="w-6 pl-2"/></Link>
                </div>
                <div className="grid grid-col justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 md:mx-20 md:mb-10">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            className="mt-3 block "
                            href={`project/${project.slug}`}
                        >
                            <div className="hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 bg-white border rounded-sm shadow-md  max-w-xs md:max-w-none overflow-hidden">
                                <img
                                    key={project.id}
                                    src={ pathUrl + project.gallery[0]}
                                    alt={project.title}
                                    className="h-56 lg:h-60 w-full object-cover rounded-t-sm"
                                />
                                <div className="p-4">
                                    {/* <span className="text-sm text-gray-400">
                                        {format(
                                            new Date(project.created_at),
                                            "LLLL-yyyy"
                                        )}
                                    </span> */}
                                    <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                        {project.title}
                                    </h3>
                                    <h1 className="font-semi-bold">{ project.address}</h1>
                                    {/* <p className="paragraph-normal text-gray-600">
                                        {project.description.substring(0, 150) +
                                            "..."}
                                    </p> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default ProjectWidget;
