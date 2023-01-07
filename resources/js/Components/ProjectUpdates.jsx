import React, { useState } from 'react'
import Lightbox from 'react-18-image-lightbox'
const ProjectUpdates = ({ updates }) => {
    const date = updates.map(date => {
        return date.update_month
    })
    const galleryImage = updates
    const [dates, setDates] = useState(date)
    const [selectedDate, setSelectedDate] = useState(date[0])
    const [images, setImages] = useState(galleryImage)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const pathUrl = 'http://pambanconstructions.com/'

    const handleDateChange = event => {
        setSelectedDate(event.target.value)
    }
    const filteredImages = images.filter(image => image.update_month === selectedDate)
    return (
        <div className="">
            {dates.map((date, index) => (
                <button key={index} value={date} type="button" className='py-2.5 my-4 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleDateChange}>{date}</button>
            ))}
            <div className="flex flex-wrap justify-around">
                {filteredImages.map((gallery, index) => (
                    <div key={gallery.update_month} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-8">
                        {gallery.update_gallery.map((image, index) => (
                            <div key={index} className="overflow-hidden	relative col-span-1 h-96 w-96 sm:h-64 sm:w-64">
                                <img className="rounded-sm object-cover h-full w-full transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer" src={ pathUrl + `storage/${image}`}
                                    onClick={() => setIsOpen(true)} alt={image} />
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={pathUrl + gallery.update_gallery[photoIndex]}
                                        nextSrc={gallery.update_gallery[(photoIndex + 1) % gallery.update_gallery.length]}
                                        prevSrc={gallery.update_gallery[(photoIndex + gallery.update_gallery.length - 1) % gallery.update_gallery.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() =>
                                            setPhotoIndex((photoIndex + gallery.update_gallery.length - 1) % gallery.update_gallery.length)
                                        }
                                        onMoveNextRequest={() =>
                                            setPhotoIndex((photoIndex + 1) % gallery.update_gallery.length)
                                        } />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectUpdates