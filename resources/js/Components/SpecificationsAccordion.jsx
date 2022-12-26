import { usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import AccordionUI from './AccordionUI'

const SpecificationsAccordion = () => {
    const [Index, setIndex] = useState(false)
    const data = usePage().props.projectDetail
    //object to Array
    const specifications = []
    data.construction_specifications.map((item, index) => {
        const specificationsList = item.specifications.map((specs, i) => {
            return (
                <li key={i}>{specs}</li>
            )
        })
        const data = {
            "id": index,
            "category": item.category,
            "specifications": specificationsList
        }
        {item.category}
        specifications.push(data)
    })
  return (
    <div>
        <div className="rounded-xl h-auto w-auto bg-transparent">
            {specifications.map(item => {
                return(
                    <div key={item.id}>
                    <AccordionUI title={item.category} children={item.specifications} Id={item.id} Index={Index} setIndex={setIndex}>

                    </AccordionUI>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SpecificationsAccordion