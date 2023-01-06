import ProjectGrid from "@/Components/ProjectGrid";
import Frontendlayout from "@/Layouts/Frontend";
import Axios from "@/Services";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function () {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState({
        s: "",
        sort: "",
        page: 1,
    });
    const [lastPage, setLastPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            const arr = [];
            if (filter.s) {
                arr.push(`s=${filter.s}`);
            }
            if (filter.sort) {
                arr.push(`sort=${filter.sort}`);
            }
            if (filter.page) {
                arr.push(`page=${filter.page}`);
            }
    const xhr = await new XMLHttpRequest()
    xhr.open('GET', `api/projectsAPI?${arr.join("&")}`)
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
            xhr.onload = () => {
                setProjects(
                    filter.page === 1
                        ? xhr.response.data
                        : [...[...projects, ...xhr.response.data]]
                );
                setLastPage(xhr.response.last_page);
                setIsLoading(true);
                // setBlog(xhr.response)
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000)
            }
    xhr.send()
    
        })();
    }, [filter]);
    return (
        <Frontendlayout>
            <Head title="Project" />
            <div className="pinkbulding grid grid-cols-1 justify-center item-center h-96 mt-5 py-10 md:px-20">
                {/* <img src={Pinkbuilding} alt="pink Building"  /> */}
                <div className="flex flex-col md:items-center items-center justify-center col-span-1">
                    <div>
                        <h1 className="text-white text-6xl text-shadow capitalize font-black">
                            Projects
                        </h1>
                    </div>
                </div>
            </div>
            <ProjectGrid
                projects={projects}
                filter={filter}
                setFilter={setFilter}
                lastPage={lastPage}
                isLoading={isLoading}
            />
        </Frontendlayout>
    );
}
