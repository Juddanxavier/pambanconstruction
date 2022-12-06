import React from 'react'
import {team} from '../../constants/index'

export default function Team() {
  return (
    <>
<div className="sm:mx-6 md:mx-10 lg:mx-24 pt-8">
<p className="text-5xl font-bold my-6 text-neutral-700 sm:mx-4">Meet Our Team</p>
</div>
         <div className="grid md:grid-cols-2 md:gap-6 sm:mx-6 md:mx-10 lg:mx-24 pb-12">
          {team.map((member) => {
            return (
              <div key={member.id} className="flex flex-row bg-stone-100 hover:bg-stone-200 rounded-xl p-4">
                <div>
                <img src={member.profilePicture} className="rounded-xl" />
                </div>
                <div className="grid content-between p-6">
                <div>
                <p className="text-2xl font-bold">{member.name}</p>
                <span>{member.designation}</span>
                </div>
                <div>
                  <p className="text-md text-gray-300">
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
