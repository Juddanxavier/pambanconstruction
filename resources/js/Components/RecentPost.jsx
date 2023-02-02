import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function RecentPost(projects) {
    const pathUrl = 'http://pambanconstructions.com/'
    var projects = usePage().props.recentProjects;

    return (
                <div className="grid grid-cols-1 md:grid-cols-3 md:pb-8 pb-2 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {projects.map((item, index) => (
                        <Link key={index} href={item.slug}>
                            <div className="rounded-sm shadow-md">
                                <LazyLoadImage effect="blur"
                                    className="rounded-t-sm  w-full h-64 object-cover"
                                    src={pathUrl + `storage/${item.gallery[0]}` }
                                    alt={item.gallery[0]}
                                />
                                <div className="flex flex-col p-7">
                                    <div className="flex flex-row">
                                        <div className=" text-xs uppercase font-bold bg-blue-100 p-1 px-2 text-slate-500 rounded-md text-xs uppercase font-bold bg-blue-100 p-1 px-2 text-slate-500 rounded-md">
                                            {item.status}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold truncate mt-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-base text-gray-600 mt-1">
                                        {item.description.substring(0, 50) +
                                            "..."}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
       
    )
}
