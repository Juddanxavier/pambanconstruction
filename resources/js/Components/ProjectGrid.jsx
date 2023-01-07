import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function ProjectGrid(props) {
    const pathUrl = import.meta.env.VITE_STORAGE_IMG;
    const search = (s) => {
        props.setFilter({
            ...props.filter,
            s,
        });
    };
    const sort = (sort) => {
        props.setFilter({
            ...props.filter,
            sort,
        });
    };
    const load = () => {
        props.setFilter({
            ...props.filter,
            ...props.isLoading,
            page: props.filter.page + 1,
        });
    };
    let button;
    if (props.filter.page !== props.lastPage) {
        button = (
            <button
                disabled={props.isLoading}
                type="button"
                className="py-2.5 px-5 mr-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                onClick={load}
            >
                {!props.isLoading ? (
                    "Load More"
                ) : (
                    <>
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#1C64F2"
                            />
                        </svg>
                        Loading...
                    </>
                )}
            </button>
        );
    } else {
        button = <span>Nothing more to display...</span>;
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 mx-10 md:mx-20 gap-8 my-10">
                <div className="col-span-1 md:col-span-3">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => search(e.target.value)}
                            placeholder="Search Projects..."
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <select
                        id="large"
                        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => sort(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Upcoming">Upcoming</option>
                    </select>
                </div>
            </div>
            <div className="mx-10 md:mx-20">
                <div className="grid grid-cols-1 md:grid-cols-3 md:p-8 p-2 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {props.projects.map((item, index) => (
                        <Link key={index} href={`project/${item.slug}`}>
                            <div className="rounded-sm shadow-md">
                                <img
                                    className="rounded-t-sm  w-full h-64 object-cover"
                                    src={`storage/${item.gallery[0]}`}
                                    alt={item.gallery[0]}
                                />
                                <div className="flex flex-col p-7">
                                    <div className="flex flex-row">
                                        <div className=" text-xs uppercase p-1 px-2 text-white rounded-md text-xs uppercase font-bold bg-indigo-100 p-1 px-2 text-slate-500 rounded-md">
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
            </div>
            <div className="flex">
                <div className="my-5 md:my-10 mx-auto">{button}</div>
            </div>
        </div>
    );
}
