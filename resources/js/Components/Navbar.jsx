import React, { useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import {navLinks} from '../../constants/index'
import {logo, logoMark} from '../../images/index.js'
import { Link } from '@inertiajs/inertia-react'
import { motion as m} from "framer-motion"
import { fadeIn, logoAnimation, staggerContainer } from '@/FramerMotion/Variants'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <m.main variants={staggerContainer} initial="hidden" animate="animate">
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center md:mt-5 md:justify-between sm:items-stretch sm:justify-start">
                  <m.div variants={logoAnimation} className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logoMark}
                    alt="Pamban Constructions"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src={logo}
                    alt="Pamban Constructions"
                  />
                </m.div>
                <m.div variants={fadeIn} className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4"> 
                    {navLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.id}
                        className={classNames(
                          item.current ? 'text-blue-700' : 'text-grey-500	  hover:text-blue-700',
                          'px-3 py-2 rounded-md text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"><a href="/contact">Lets Talk</a>
</button>
                  </div>
                </m.div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navLinks.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.id}
                  className={classNames(
                    item.current ? 'text-blue-700' : 'text-gray-700  hover:text-blue-700',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
      </m.main>
  )
}
