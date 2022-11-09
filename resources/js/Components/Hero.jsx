import React from 'react'

function Hero() {
  return (
    <div>
    <div className="flex flex-wrap h-auto">
      <div className="md:w-1/2 h-auto">
        <div className="mx-16 md:mx-32 mt-16 md:mt-48">
        <h1 className="text-6xl font-16">We Build Great Homes</h1>
        <div className="flex mt-16 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Apartments</span>
              <p className="text-1xl text-gray-900 font-bold pt-2">Residential homes</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Office</span>
              <p className="text-1xl text-gray-900 font-bold pt-2">Joint Venture</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Renovation</span>
              <p className="text-1xl text-gray-900 font-bold pt-2">Commerical Building</p>
            </div>
          </div>
        <div
            className="description w-full my-16 text-gray-500 text-sm"
          >
            The best construction company in Chennai for all residential and commercial buildings. We are one of the most distinguished Construction companies in Chennai, founded by a strong team of experts, and we stand firm to uphold our practice of providing the finest spaces to our customers. Pamban construction than decade constructed and delivered 40+ projects across Chennai.
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2 items-end -pb-15">
      <img
          src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
          className="h-70 w-full"
          alt=""
        />
      </div>
    </div>

    <div className="text-white py-10 bg-indigo-700 w-full px-32">
        <div className="container">
        <div className="md:w-1/3">
        <p className="text-2xl font-semibold">
            We offer an incredible array of new houses any customized floor plan or home remodeling anything you can imagine.
        </p>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Hero