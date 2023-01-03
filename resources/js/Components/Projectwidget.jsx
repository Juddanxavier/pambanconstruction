import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "@inertiajs/inertia-react";
import Axios from "@/Services";
// import { Link } from '@inertiajs/inertia'

const ProjectWidget = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProjects] = useState([]);
        const pathUrl = import.meta.env.VITE_STORAGE_IMG;

    const getProjects = async () => {
        await Axios.get("/projectfeatured")
            .then((res) => {
                setProjects(res.data);
                console.log(projects);
            })
            .catch((err) => console.error(err));
    };
    useEffect(() => {
        getProjects();
    }, []);
    return (
        <div>
                <div className="flex p-10 md:mx-10 justify-between">
                    <h1 className="text-left font-bold text-2xl">Featured Projects</h1>
                <a className="text-left text-lg hover:text-indigo-600	" href="/projects">View All Projects</a>
                </div>
                <div className="grid grid-col justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 md:mx-20 md:mb-10">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            className="mt-3 block"
                            href={`project/${project.slug}`}
                        >
                            <div className="bg-transparent rounded-sm  max-w-xs md:max-w-none overflow-hidden">
                                <img
                                    key={project.id}
                                    src={ pathUrl + project.gallery[0]}
                                    alt={project.title}
                                    className="h-56 lg:h-60 w-full object-cover rounded-md"
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
