import { getProject } from '../Services/index'
import React from 'react';

const ProjectWidget = () => {
    const localPath = '/storage/'
  const projects = getProject()
    return (
        <div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-5xl font-bold my-6 text-neutral-700">Recent Projects</h2>
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {projects.slice(0,8).map(project => (
                <div className="group relative" key={project.id}>
        <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img key={project.id} src={`storage/${project.gallery}`} alt={project.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {project.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{project.address}</p>
          </div>
          
        </div>
            </div>

    ))}

    </div>

        </div>
        </div>
    )
}

export default ProjectWidget
