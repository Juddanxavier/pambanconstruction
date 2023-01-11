import SpecificationsAccordion from '@/Components/SpecificationsAccordion'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'
import Frontendlayout from '../Layouts/Frontend'
import ImageSlider from '../Components/ImageSlider'
import LocationMap from '../Components/LocationMap'
import ProjectUpdates from '../Components/ProjectUpdates'
import EmiCalculator from '@/Components/EmiCalculator'
import DownloadButton from '@/Components/Filedownload'
import RecentPost from '@/Components/RecentPost'
import Prefooter from '@/Components/Prefooter'
import { Tab } from '@headlessui/react'

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
      <div className="mx-10 mt-20 w-[200] h-[400] justify-center ">
        <ImageSlider slides={data.gallery}/>
      </div>
      <div className="flex flex-col mt-20 mb-10 mt-20 md:mx-20 mx-10">
        <span className="text-3xl font-bold mb-5 capitalize text-slate-800">{ data.title }</span>
        <p className="text-lg tracking-wide">{data.description }</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 mb-20 mx-10 md:mx-20">
        <div className="col-span-2 p-5">
          <Tab.Group>
      <Tab.List className="text-lg font-bold border-b-2">
              <Tab className="mr-10">
              Construction Specifications
            </Tab>
        <Tab className="mr-10">Location</Tab>
        <Tab className="mr-10">Project Updates</Tab>
      </Tab.List>
      <Tab.Panels>
              <Tab.Panel className="my-5">
                <SpecificationsAccordion {...data} />
        </Tab.Panel>
              <Tab.Panel className="my-5">
                <LocationMap {...mapProps} />
        </Tab.Panel>
              <Tab.Panel className="my-5">
                <ProjectUpdates updates={updates} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
        </div>
        <div className="p-4 bg-blue-50 text-slate-800 rounded-sm">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-2xl font-bold text-blue-800">Project Specifications</h1>
            </div>
            <div className="flex flex-col">
              <span className="text-xl mt-2">Status / <strong>{data.status}</strong></span>
              <span className="text-xl mt-2">Area / <strong>{data.area} Sq.ft</strong></span>
              <span className="text-xl mt-2">UDS / <strong>{data.uds} Sq.ft</strong></span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl my-5 font-bold text-blue-800">Download Brochure</h1>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-auto mx-10 md:mx-20">
       <RecentPost />
       </div>
      <Prefooter />
    </Frontendlayout>
  )
}

export default ProjectDetail