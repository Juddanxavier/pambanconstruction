import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Team() {
  const [team, setTeam] = useState([])
  const getData = async () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'api/teamAPI')
    xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.responseType = 'json'
    xhr.onload = () => {
      setTeam(xhr.response)
    }
    xhr.send()

    }
    useEffect(() => {
      getData()
    }, [])
  console.log(team)
  return (
    <>
<div className="sm:mx-6 md:mx-20 mx-10 lg:mx-24 pt-8">
<p className="text-3xl font-bold mb-10 text text-slate-800 sm:mx-4">Our Team at Your Service</p>
</div>
         <div className="grid md:grid-cols-2 md:gap-6 sm:mx-6 md:mx-20 mx-10 lg:mx-24 pb-12">
          {team.map((member) => {
            return (
              <div key={member.id} className="flex flex-row my-5 bg-stone-100 cursor-pointer hover:bg-stone-200 rounded-xl p-4">
                <div>
                <LazyLoadImage effect="blur" src={member.photo} className="rounded-xl" />
                </div>
                <div className="grid content-between p-6">
                <div>
                <p className="text-2xl font-bold capitalize">{member.name}</p>
                <span className="capitalize">{member.designation}</span>
                </div>
                <div>
                  <p className="text-md text-gray-200">
                    Pamban Constructions
                  </p>
                  
                </div>
                </div>
              </div>
            )
          })}
         </div>
    </>
  )
}
