import SpecificationsAccordion from '@/Components/SpecificationsAccordion'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Frontendlayout from '../Layouts/Frontend'
import ImageSlider from '../Components/ImageSlider'
import LocationMap from '../Components/LocationMap'
import ProjectUpdates from '../Components/ProjectUpdates'
import EmiCalculator from '@/Components/EmiCalculator'
import DownloadButton from '@/Components/Filedownload'
import RecentPost from '@/Components/RecentPost'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

function ProjectDetail() {
  const data = usePage().props.projectDetail
  console.log(data)
  const containerStyles = {
    // width: "100%",
    // height: "100%",
    margin: "0 auto"
  };
  var [lat, lon] = []
  if (Object.values(data.location).some(isNaN)) {
    [lat, lon] = [0, 0]  
  } else {
  [lat, lon] = data.location.split(',').map(s => s.trim())
  }
  const mapProps = {
    center: {
      lat: parseFloat(lat),
      lng: parseFloat(lon)
    },
    title: data.title,
    zoom: 15
  }
  const updates = data.updates

  return (
    <Frontendlayout>
      <Head title={`${data.title} - Pamban Construction`} />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center item-center min-h-96 mt-5 py-10 md:px-20 bg-slate-100">
        <div className="flex flex-col md:items-left items-center justify-center md:justify-left col-span-1">
          <div>
            <h1 className="text-slate-800 text-6xl capitalize font-black">
              {data.title}
            </h1>
          </div>
        </div>
        <div className="h-96 w-full" style={containerStyles}>
          <ImageSlider slides={data.gallery} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mt-5 py-10 px-10 md:px-20">
        <div className="md:col-span-2">
          <div>
            <span className='text-2xl text-slate-800 font-bold'>Description</span>
            <p className="text-gray-600 text-xl antialiased tracking-wide leading-relaxed my-5 text-justify">{data.description}</p>
          </div>
          <div className="mt-10">
            <span className='text-2xl my-8 text-slate-800 font-bold'>Construction Specifications</span>
            <SpecificationsAccordion {...data} />
          </div>
          <div className='w-auto my-10'>
            <span className='text-2xl text-slate-800 font-bold pb-20'>Location</span>
            <LocationMap {...mapProps} />
          </div>
          <div className="w-auto my-10">
            <span className='text-2xl text-slate-800 font-bold pb-20'>Recent updates</span>
            <ProjectUpdates updates={updates} />
            {/* <ProjectUpdates update_gallery={update_gallery}/> */}
          </div>
        </div>


        <div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 border-b-white border-b-2">
            <div className='text-white'>Status</div>
            <span className="text-4xl font-black text-white">{data.status}</span>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 border-b-white border-b-2">
            <div className='text-white'>Area</div>
            <span className="text-4xl font-black text-white">{data.area} Sq.Ft</span>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className='text-white'>USD</div>
            <span className="text-4xl font-black text-white">{data.uds} Sq.Ft</span>
          </div>
          <h1 className="text-2xl text-slate-800 mt-6 font-bold mb-4">Download Brochures</h1>
          <div className="flex flex-col">
            {data.files.map((item, index) => (
              <DownloadButton key={index} fileName={`storage/${item.file_path}`} name={item.name} />

            ))}

          </div>
          <div>
            <EmiCalculator />
          </div>
</div>
        </div>
        <div className="flex justify-between w-auto mx-10 md:mx-20">
          <span className='text-2xl text-slate-800 font-bold mb-10'>Recent Projects</span><Link className="flex flex-row text-left text-lg text-indigo-500 hover:text-indigo-800" href="/projects">View All Projects <ArrowLongRightIcon className="w-6 pl-2"/></Link>
      </div>
      <div className=" w-auto mx-10 md:mx-20">
      <RecentPost />
      </div>
    </Frontendlayout>

  )
}

export default ProjectDetail