import React, { useState } from 'react';
import { ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'

const ImageSlider = ({ slides }) => {
  const pathUrl = 'https://pambanconstructions.com/';
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderStyle = {
    height: '100%',
    position: 'relative'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundImage: `url(storage/${slides[currentIndex]})`,
  }
  const leftArrow = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    zIndex: 1,
    cursor: 'pointer'
  }
  const rightArrow = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    zIndex: 1,
    cursor: 'pointer'
  }
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div style={sliderStyle}>

      <div className='h-100 w-full'>
        <img className="object-contain h-full w-full " src={pathUrl + `storage/${slides[currentIndex]}`} alt="" />
      </div>
      <div className="flex flex-row-reverse mr-6">
        <div className="my-5 mr-12" style={leftArrow} onClick={goToPrevious}>      <ArrowLongLeftIcon className="h-8 w-8 text-slate-500" />
        </div>
        <div className="my-5" style={rightArrow} onClick={goToNext}><ArrowLongRightIcon className="h-8 w-8 text-slate-500" /></div>
      </div>
    </div>
  )
}
export default ImageSlider
