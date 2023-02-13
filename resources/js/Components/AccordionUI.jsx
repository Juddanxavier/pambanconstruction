import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => {
        if (Index !== Id) {
            Index !== Id && setIndex(Id)
        } else {
            setIndex(false)
        }
    }
    return (
        <>
            <div onClick={() => handleSetIndex(Id)} className="flex items-center group cursor-pointer w-full mx-auto h-16 justify-between font-bold text-left p-2 border-b bg-transparent">
                <div className="flex group cursor-pointer">
                    <div className="font-semibold">
                        {title}
                    </div>
                </div>
                <div className="flex items-center justify-center pr-10">
                    {Index !== Id ? (<ChevronDownIcon className="w-6 h-6" />) : (<ChevronUpIcon className="w-6 h-6" />)}
                </div>
            </div>
            {
                Index === Id && (
                    <div className="text-lg py-4 w-auto h-auto border-b border-gray-200 mb-2">
                        {children}
                    </div>
                )
            }
        </>
    )
}

export default AccordionUI