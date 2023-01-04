import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

export default function RecentPost(projects) {
    const pathUrl = import.meta.env.VITE_STORAGE_IMG;
    var projects = usePage().props.recentProjects;

    return (
                <div className="grid grid-cols-1 md:grid-cols-3 md:pb-8 pb-2 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {projects.map((item, index) => (
                        <Link key={index} href={item.slug}>
                            <div className="rounded-sm shadow-md">
                                <img
                                    className="rounded-t-sm  w-full h-64 object-cover"
                                    src={pathUrl + item.gallery[0]}
                                    alt={item.gallery[0]}
                                />
                                <div className="flex flex-col p-7">
                                    <div className="flex flex-row">
                                        <div className=" text-xs uppercase font-bold bg-indigo-100 p-1 px-2 text-slate-500 rounded-md text-xs uppercase font-bold bg-indigo-100 p-1 px-2 text-slate-500 rounded-md">
                                            {item.status}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold truncate mt-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-base text-gray-600 mt-1">
                                        {item.description.substring(0, 150) +
                                            "..."}
                                    </p>
                                    {/* <div className="flex flex-row mt-5 items-center justify-start">
            <img className="rounded-2xl mr-2">
            <p className="font-bold text-sm mr-2">{{data.authorName}}</p>
            <p className="text-gray-400 text-sm">On {{data.postDate}}</p>
        </div> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
       
    )
}
