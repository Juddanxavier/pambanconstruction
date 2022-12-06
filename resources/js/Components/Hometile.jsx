import React from 'react'
import {Clock, Rupee, Safety, Medal} from '../../images/index.js'

function Hometile() {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 sm:px-12 md:mx-auto">
        <div className="relative overflow-hidden h-96 rounded-3xl bg-red-100 flex flex-col justify-center px-10">
          <img
                    className="absolute -bottom-36 -right-36 hover:-translate-y-4 hover:-translate-x-4 duration-700 opacity-50"
                    src={Rupee}
                    alt="Rupee"
                  />
          <div className="absolute">
          <span className="text-3xl antialiased font-semibold">Offordable</span>
          <p className="text-lg">
          We are specialize in making the gorgeous buildings at an affordable price.
          </p>
          </div>
        </div>
        <div className="relative overflow-hidden h-96 rounded-3xl bg-green-100 lg:col-span-2 flex flex-col justify-center px-10">
          <img
                    className="h-96 w-96 absolute -right-36 hover:-translate-x-4 duration-700 opacity-20"
                    src={Safety}
                    alt="Safety"
                  />
        <div className="w-80 absolute">
        <span className="text-3xl antialiased font-semibold">Safety Standards</span>
        <p className="text-lg">
          Our number one priority is safety of our client and employees and we take that very serious.
          </p>
          </div>
        </div>
        <div className="relative overflow-hidden h-96 rounded-3xl bg-indigo-100 lg:col-span-2 flex flex-col justify-center px-10">
        <img
                    className="h-96 w-96 absolute -right-36 hover:-translate-x-4 duration-700 opacity-20"
                    src={Medal}
                    alt="Medal"
                  />
        <div className="w-80 absolute">
        <span className="text-3xl antialiased font-semibold">Best In Class</span>
        <p className="text-lg">
        We are best construction company offering a full spectrum of services on projects small and large.
          </p>
        </div>
        </div>
        <div className="relative overflow-hidden h-96 rounded-3xl bg-fuchsia-100 flex flex-col  justify-center px-10">
        <img
                    className="absolute -bottom-36 -right-36 hover:-translate-y-4 hover:-translate-x-4 duration-700 opacity-20"
                    src={Clock}
                    alt="clock"
                  />
        <div className="absolute">
        <span className="text-3xl antialiased font-semibold">On Time Every Time</span>
        <p className="text-lg">
          We strive to complete the project on time and we are known for that.
          </p>
        </div>
        </div>
    </div>
  )
}

export default Hometile