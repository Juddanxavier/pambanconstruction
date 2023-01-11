import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Hero from "@/Components/Hero";
import ProjectWidget from "@/Components/Projectwidget";
import Hometile from "@/Components/Hometile";
import Frontendlayout from "../Layouts/Frontend";
import Team from "@/Components/Team";
import Blogwidget from "@/Components/Blogwidget";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Prefooter from "@/Components/Prefooter";
import Keypoints from "@/Components/Keypoints";

export default function Welcome() {
    const data = usePage().props
    console.log(data)
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
                    <p className="font-bold mb-5 ">Our Satified Customer.</p>
                    <p className="font-bold text-8xl text-blue-800">100+</p>
                </div>
                <div>
                    <p className="font-bold mb-5">Buildings Built.</p>
                    <p className="font-bold text-8xl text-blue-800">50+</p>
                </div>
                <div>
                    <p className="font-bold mb-5">Years of Operation.</p>
                    <p className="font-bold text-8xl text-blue-800">20+</p>
                </div>
            </div>
                        <Keypoints />
            <Blogwidget />
            <Prefooter />
            {/* <Team /> */}
        </Frontendlayout>
    );
}
