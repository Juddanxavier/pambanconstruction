import React from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function LocationMap(props) {
  console.log(props.center.lat);
  const googleKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const Marker = ({ text }) => (
    <div className="flex flex-row
        ">
      <div><MapPinIcon className="h-8 w-8 text-red-500" /></div>
      <div className="bg-white rounded-lg shadow-lg p-3 flex items-center">
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
  console.log(googleKey)
  // const { lat, lon} = props
  return (
    <div className="my-6 h-96">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        hover={false}

      >
        <Marker className="text-red-500" lat={props.center.lat} lng={props.center.lng} text={props.title} />
      </GoogleMapReact>
    </div>
  )
}
