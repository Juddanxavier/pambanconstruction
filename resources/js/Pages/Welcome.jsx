import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Hero from "@/Components/Hero";
import ProjectWidget from "@/Components/Projectwidget";
import Hometile from "@/Components/Hometile";
import Frontendlayout from "../Layouts/Frontend";
import Team from "@/Components/Team";
import Blogwidget from "@/Components/Blogwidget";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function Welcome() {
    return (
        <Frontendlayout>
            <Head title="Home - Pamban Contructions" />
            <Hero />
            <ProjectWidget />
            <Hometile />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10 md:my-20 lg:grid-cols-4 md:px-20 px-10 text-center">
                <div className="text-slate-900 text-2xl font-bold">
                    Achievements
                </div>
                <div>
                    <p className="font-bold mb-5">Our Satified Customer.</p>
                    <p className="font-bold text-8xl text-slate-900">100+</p>
                </div>
                <div>
                    <p className="font-bold mb-5">Buildings Built.</p>
                    <p className="font-bold text-8xl text-slate-900">50+</p>
                </div>
                <div>
                    <p className="font-bold mb-5">Years of Operation.</p>
                    <p className="font-bold text-8xl text-slate-900">20+</p>
                </div>
            </div>
            <Blogwidget />
            <div className="flex flex-col mx-10 md:mx-20 my-20">
                <span className="md:text-9xl text-7xl font-black text-slate-900 uppercase leading-normal justify-center">
                    We'd love to hear from you!
                </span>
                <div className="flex justify-end ">
                    <button type="button" className="flex flex-row justify-center text-gray-900 hover:text-white border border-gray-800 max-w-sm hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-5 py-5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white font-black dark:hover:bg-gray-600 dark:focus:ring-gray-800">Let's Talk <ArrowTrendingUpIcon className="w-12 ml-2" /></button>
                </div>

            </div>
            {/* <Team /> */}
        </Frontendlayout>
    );
}
