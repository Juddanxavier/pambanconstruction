import { ChatBubbleBottomCenterTextIcon, CheckBadgeIcon, ClockIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {motion as m} from 'framer-motion'
import { fadeUpProject, staggerContainer } from '@/FramerMotion/Variants'

export default function Keypoints() {
    return (
      <m.div variants={staggerContainer} initial="hidden" whileInView="animate" viewport={{once: true}} className=" mb-20 grid md:grid-cols-2 gap-12 p-10 md:p-20">
            <m.div variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="flex flex-col justify-center items-center">
              <m.span variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="text-slate-800 font-bold text-4xl"> What sets us apart from our competitors?</m.span>
              <m.p variants={fadeUpProject} className="text-lg my-10">We are highly respected construction company in Chennai, known for delivering high-quality residential and commercial projects to its customers. The company's team has over 35 years of experience in the industry, and incorporates technology into its construction processes to improve efficiency and deliver top-quality results. Pamban Construction has a strong focus on customer satisfaction, as evidenced by its completion of over 40 successful projects and its more than 100 happy customers. The company's innovative approaches to design and construction set it apart in the industry.</m.p>
          </m.div>
          <m.div variants={staggerContainer} initial="hidden" whileInView="animate" viewport={{once: true}}>
              <div className="grid grid-col-1 lg:grid-cols-2 gap-12">
                  <m.div variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="bg-white w-100 h-64 rounded-sm md:shadow-sm md:shadow-indigo-300/50 p-10">
                      <span><CheckBadgeIcon  className="w-12 text-indigo-900"/></span>
                      <h1 className="font-bold text-lg text-indigo-900">Quality</h1>
                      <p className="text-gray-400">We assure quality in each stage of project, Zero compromise on the quality aspect.</p>
                  </m.div>
                  <m.div variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="bg-white w-100 h-64 rounded-sm md:shadow-md md:shadow-indigo-300/50  p-10">
                      <span><ChatBubbleBottomCenterTextIcon  className="w-12 text-indigo-900"/></span>
                      <h1 className="font-bold text-lg text-indigo-900">Transparency</h1>
                      <p className="text-gray-400">All the project related details are open to the customers and all the transactions between the parties are completely transparent.</p>
                  </m.div>
                  <m.div variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="bg-white w-100 h-64 rounded-sm md:shadow-md md:shadow-indigo-300/50 p-10">
                      <span><ClockIcon  className="w-12 text-indigo-900"/></span>
                      <h1 className="font-bold text-lg text-indigo-900">On-time delivery </h1>
                      <p className="text-gray-400">We hand over the project within the stipulated time, Provide the best home-buying experience at all customer touchpoints.</p>
                  </m.div>
                  <m.div variants={fadeUpProject} initial="hidden" whileInView="animate" viewport={{once: true}} className="bg-white w-100 h-64 rounded-sm md:shadow-md md:shadow-indigo-300/50 p-10">
                      <span><HandThumbUpIcon  className="w-12 text-indigo-900"/></span>
                      <h1 className="font-bold text-lg text-indigo-900">Trust-Worthy</h1>
                      <p className="text-gray-400">No deviation in the terms and conditions post signing the mutual agreement with the customer.</p>
                  </m.div>
              </div>
          </m.div>
         </m.div>
  )
}
