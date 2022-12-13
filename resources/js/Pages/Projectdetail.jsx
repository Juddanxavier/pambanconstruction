import SpecificationsAccordion from '@/Components/SpecificationsAccordion'
import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Frontendlayout from '../Layouts/Frontend'

function ProjectDetail() {
  const data = usePage().props.projectDetail
  console.log(data)
    return (
      <Frontendlayout>
        <Head title="Project" />
        <SpecificationsAccordion {...data}/>
      </Frontendlayout>
      
    )
  }
  
  export default ProjectDetail