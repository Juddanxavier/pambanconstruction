import { Head, Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Frontendlayout from '../Layouts/Frontend'
import ImageSlider from '../Components/ImageSlider'
import EmiCalculator from '@/Components/EmiCalculator'
import DownloadButton from '@/Components/Filedownload'
import RecentPost from '@/Components/RecentPost'
import Prefooter from '@/Components/Prefooter'
import ProjectTabs from '@/Components/ProjectTabs'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

function ProjectDetail() {
  const data = usePage().props.projectDetail
  const containerStyles = {
    // width: "100%",
    // height: "100%",
    margin: "0 auto"
  };
  // var [lat, lon] = []
  // if (Object.values(data.location).some(isNaN)) {
  //   [lat, lon] = [0, 0]  
  // } else {
  const [lat, lon] = data.location.split(', ')
  // }
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
      <div className="grid md:grid-cols-3 gap-5 mx-10 md:mx-20 my-20">
        <div className="col-span-2">
          <div className="flex flex-col">
            <span className="text-3xl font-bold mb-5 capitalize text-slate-800">{data.title}</span>
            <div className="md:hidden flex flex-row">
              <span className="mr-1">Status / <strong>{data.status} |</strong> </span>
<span className="mr-1">Area / <strong>{data.area} Sq.ft |</strong> </span>
<span className="mr-1">UDS / <strong>{data.uds} Sq.ft</strong> </span>
            </div>
        <p className="text-lg tracking-wide my-5">{data.description }</p>
      </div>
          <div className="justify-center my-2">
            <ImageSlider slides={data.gallery}/>
          </div>
<div className="">
        <div className="col-span-2 mt-5 py-5">
          <ProjectTabs  mapProps={mapProps} updates={updates}/>
        </div>
      </div>
        </div>
        <div>
          <p className="hidden md:block text-white font-bold text-lg bg-indigo-600 p-3 rounded-sm">Specfications</p>
          <div className="flex flex-row mb-5 hidden md:inline-grid">
              <span className="text-xl mt-2">Status / <strong>{data.status}</strong></span>
              <span className="text-xl mt-2">Area / <strong>{data.area} Sq.ft</strong></span>
              <span className="text-xl mt-2">UDS / <strong>{data.uds} Sq.ft</strong></span>
          </div>
          <p className="text-white font-bold text-lg bg-indigo-600 p-3 rounded-sm">Download Brochures</p>
          <div className="flex flex-col mb-5">
            {data.files.map((item, index) => (
              <DownloadButton key={index} name={item.name} filePath={ item.file_path} />
            ))}
          </div>
          <div className="flex flex-col mb-5">
            <p className="text-white font-bold text-lg bg-indigo-600 p-3 rounded-sm">EMI Calculator</p>
                      <EmiCalculator />

          </div>

        </div>
      </div>
      <div className="flex mb-10 mx-10 md:mx-20 gap-2">
              <div className="capitalize text-lg font-bold">Share us on :  </div>
              <FacebookShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <FacebookIcon size={32} round/>
              </FacebookShareButton>
              <FacebookMessengerShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <FacebookMessengerIcon size={32} round/>
              </FacebookMessengerShareButton>
              <TwitterShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <TwitterIcon size={32} round/>
              </TwitterShareButton>
              <WhatsappShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <WhatsappIcon size={32} round/>
              </WhatsappShareButton>
              <TelegramShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <TelegramIcon size={32} round/>
              </TelegramShareButton>
              <LinkedinShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <LinkedinIcon size={32} round/>
              </LinkedinShareButton>
              <EmailShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.slug}`}>
                  <EmailIcon size={32} round/>
              </EmailShareButton>
          </div>
      <div className=" w-auto mx-10 md:mx-20">
       <RecentPost />
       </div>
      <Prefooter />
    </Frontendlayout>
  )
}

export default ProjectDetail