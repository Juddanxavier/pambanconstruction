import react from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function Marker () {
    
    return (
        <div className="flex flex-row
        ">
    <div><MapPinIcon className="h-8 w-8 text-red-500" /></div>
    <div className="bg-pink w-96 h-100 rounded-lg shadow-lg p-3 flex items-center">
</div>
  </div>
    )
}