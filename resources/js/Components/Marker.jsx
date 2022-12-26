import react from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function Marker (label) {
    
    return (
        <div className="flex flex-row
        ">
    <div><MapPinIcon className="h-8 w-8 text-red-500" /></div>
    <div className="bg-white w-100 h-100 rounded-lg shadow-lg p-3 flex items-center">
  {/* {{label}} */}
</div>
  </div>
    )
}