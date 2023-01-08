import { fadeIn, staggerContainer } from "@/FramerMotion/Variants.jsx";
import { motion as m } from "framer-motion";
import React from "react";
import { Clock, Rupee, Safety, Medal } from "../../images/index.js";

function Hometile() {
    return (
        <m.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount:0.25}} className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:p-20 mx-auto">
            <m.div variants={fadeIn("down")} className="relative overflow-hidden h-96 rounded-3xl bg-red-100 flex flex-col justify-center px-10 cursor-pointer ">
                <img
                    className="absolute -bottom-36 -right-36 hover:-translate-y-4 hover:-translate-x-4 duration-700 opacity-50"
                    src={Rupee}
                    alt="Rupee"
                />
                <div className="absolute">
                    <span className="text-3xl antialiased font-semibold">
                        Offordable
                    </span>
                    <p className="text-lg">
                        We are specialize in making the gorgeous buildings at an
                        affordable price.
                    </p>
                </div>
            </m.div>
            <m.div variants={fadeIn("down")} className="relative overflow-hidden h-96 rounded-3xl bg-green-100 lg:col-span-2 flex flex-col justify-center px-10 cursor-pointer ">
                <img
                    className="h-96 w-96 absolute -right-36 hover:-translate-x-4 duration-700 opacity-20"
                    src={Safety}
                    alt="Safety"
                />
                <div className="w-80 absolute">
                    <span className="text-3xl antialiased font-semibold">
                        Safety Standards
                    </span>
                    <p className="text-lg">
                        Our number one priority is safety of our client and
                        employees and we take that very serious.
                    </p>
                </div>
            </m.div>
            <m.div variants={fadeIn("down")} className="relative overflow-hidden h-96 rounded-3xl bg-indigo-100 lg:col-span-2 flex flex-col justify-center px-10 cursor-pointer ">
                <img
                    className="h-96 w-96 absolute -right-36 hover:-translate-x-4 duration-700 opacity-20"
                    src={Medal}
                    alt="Medal"
                />
                <div className="w-80 absolute">
                    <span className="text-3xl antialiased font-semibold">
                        Best In Class
                    </span>
                    <p className="text-lg">
                        We are best construction company offering a full
                        spectrum of services on projects small and large.
                    </p>
                </div>
            </m.div>
            <m.div variants={fadeIn("down")} className="relative overflow-hidden h-96 rounded-3xl bg-fuchsia-100 flex flex-col  justify-center px-10 cursor-pointer ">
                <img
                    className="absolute -bottom-36 -right-36 hover:-translate-y-4 hover:-translate-x-4 duration-700 opacity-20"
                    src={Clock}
                    alt="clock"
                />
                <div className="absolute">
                    <span className="text-3xl antialiased font-semibold">
                        On Time Every Time
                    </span>
                    <p className="text-lg">
                        We strive to complete the project on time and we are
                        known for that.
                    </p>
                </div>
            </m.div>
        </m.div>
    );
}

export default Hometile;
