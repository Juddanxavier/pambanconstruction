import React from 'react';
import { format } from 'date-fns';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
// import { Link } from '@inertiajs/inertia'

const ProjectWidget = (projects) => {
    const localPath = '/storage/'
    var projects = usePage().props.projects;
    return (
        <div>
        <div className="p-8">
          <h1 className="text-left font-bold text-2xl">Projects</h1>
          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 md:my-10">
            {projects.map((project, index) => (
              <Link className="mt-3 block" href={`project/${project.slug}`}>
                        <div key={index} className="bg-white rounded-lg border max-w-xs md:max-w-none overflow-hidden">
                        <img key={project.id} src={`storage/${project.gallery[0]}`} alt={project.title} className="h-56 lg:h-60 w-full object-cover" />
                        <div className="m-2">
                        <span className="text-sm text-gray-400">{format(new Date(project.created_at), 'LLLL-yyyy')}</span>
                        <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">{project.title}
                </h3>
                <p className="paragraph-normal text-gray-600">
                  {project.description}
                </p>
                        </div>
                        </div>
                        </Link>
))}
          </div>
        </div>
        </div>
    )
}

export default ProjectWidget
