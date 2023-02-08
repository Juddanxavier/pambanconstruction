import AccordionUI from '@/Components/AccordionUI'
import Frontendlayout from '@/Layouts/Frontend'
import { Head, usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import ModalPackage from '@/Components/ModalPackage'

export default function Packages() {
    const packages = usePage().props.packages
    const [Index, setIndex] = useState(false) 
    const [showModal, setShowModal] = useState(false)
    const [packageName, setPackageName] = useState(false)
    const packageItems = []
    // const specifications = []
    packages.map((item, index) => {
        const specifications = item.content.map((specs, i) => {
            const spec = specs.specifications.map((item, j) => {
                return <li key={j} className="text-left">{item}</li>
            })
                return {
                    "specs": spec,
                    "category": specs.category
                }
        })
        const data = {
            "id": index,
            "title": item.title,
            "rate": item.rate,
            "specifications": specifications
        }
        packageItems.push(data)
    })
    return (
        <Frontendlayout>
          <Head title={"Packages - Pamban Construction"} />
            <div className="grid mx-10 md:mx-20">
                <div className="mx-auto mt-20 mb-5">
                    <h1 className="capitalize text-4xl font-bold text-slate-800">Pricing plans</h1>
                </div>
                <div className="mx-auto md:mx-20 my-2">
                    <h1 className="capitalize text-center text-gray-500">
                        We offers a variety of pricing plans to fit the needs of any project. Our team will handle both the design and construction phases of the project, and the client will pay a single price for the entire project. We will work with you to determine the best pricing plan for your project and budget.
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 flex items-start my-10 gap-5 align-center">
                    {packageItems.map((item, i) => (
                        <div key={i} className="p-5 grid grid-row rounded-md text-center cursor-pointer capitialize bg-white shadow-sm">
                            <span className="text-2xl text-blue-600 font-black">{item.title}</span>
                            <span className="text-lg my-3 text-gray-600 font-black">{item.rate}</span>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none h-12 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => {
                                setShowModal(true)
                                setPackageName(item.title)
                            }}>Get Quote</button>

                            {item.specifications.map((content, index) => (
                                <div key={index}>
                               <AccordionUI title={content.category} children={content.specs} Id={item.title + index} Index={Index} setIndex={setIndex}>
                                </AccordionUI>
                               </div>
                            ))}
                            
                       </div>
                    ))}
                </div>
                <div>
                    <p className="text-right">** All prices are exclusive of GST</p>
                </div>
                {showModal && <ModalPackage setOpenModal={setShowModal} packageName={packageName} />}
          </div>   
    </Frontendlayout>
    )
}
