import Frontendlayout from '@/Layouts/Frontend'
import { ClockIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Head, usePage } from '@inertiajs/inertia-react'
import format from 'date-fns/format';
import React, { useState } from 'react'
import HtmlParser from 'react-html-parser';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Blog() {
    const pathUrl = 'https://pambanconstructions.com/'
    const data = usePage().props
    const date = format(new Date(data.blog.created_at), "EEEE, MMMM d, yyyy")
  return (
    <Frontendlayout>
          <Head title={`${data.blog.title} - Pamban Construction`} />
          <div className="flex flex-col text-center text-3xl my-10">
              <h1 className="mx-auto capitalize mx-10 md:mx-20  font-bold text-slate-900">{data.blog.title}</h1>
              <div className="flex justify-center text-sm font-bold text-gray-500 mt-5">
                  {/* <UserCircleIcon className="w-6 mx-2" /> | */}
                  <ClockIcon className="w-6 mx-2" />{date}
              </div>
          </div>

          <div className="md:mx-20 h-3/2">
              <LazyLoadImage effect="blur" className="object-cover w-full h-3/2 md:rounded-lg" src={pathUrl + `storage/${data.blog.image}`} alt={data.blog.image} />
          </div>
          <div className="flex grid m-10 md:m-20 justify-center">
              <div className="max-w-5xl text-xl antialiased tracking-wide text-justify">{HtmlParser(data.blog.content)}</div>
          </div>
          <div className="flex justify-center gap-2">
              <div className="capitalize text-lg font-bold">Share us on :  </div>
              <FacebookShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <FacebookIcon size={32} round/>
              </FacebookShareButton>
              <FacebookMessengerShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <FacebookMessengerIcon size={32} round/>
              </FacebookMessengerShareButton>
              <TwitterShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <TwitterIcon size={32} round/>
              </TwitterShareButton>
              <WhatsappShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <WhatsappIcon size={32} round/>
              </WhatsappShareButton>
              <TelegramShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <TelegramIcon size={32} round/>
              </TelegramShareButton>
              <LinkedinShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <LinkedinIcon size={32} round/>
              </LinkedinShareButton>
              <EmailShareButton
                  quote={'Dummy'} hashtag="#Pamban Constructions" url={`https://www.pambanconstructions.com/blog/${data.blog.slug}`}>
                  <EmailIcon size={32} round/>
              </EmailShareButton>
          </div>
          </Frontendlayout>
  )
}
