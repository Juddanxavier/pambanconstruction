import React from 'react'
import {team} from '../../constants/index'

export default function Team() {
  return (
    <>
<div className="sm:mx-6 md:mx-20 mx-10 lg:mx-24 pt-8">
<p className="text-3xl font-bold mb-10 text text-slate-800 sm:mx-4">Our Expert Team</p>
</div>
         <div className="grid md:grid-cols-2 md:gap-6 sm:mx-6 md:mx-20 mx-10 lg:mx-24 pb-12">
          {team.map((member) => {
            return (
              <div key={member.id} className="flex flex-row my-5 bg-stone-100 cursor-pointer hover:bg-stone-200 rounded-xl p-4">
                <div>
                <img src={member.profilePicture} className="rounded-xl" />
                </div>
                <div className="grid content-between p-6">
                <div>
                <p className="text-2xl font-bold">{member.name}</p>
                <span>{member.designation}</span>
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
