import React, { useState } from 'react'

const ProjectUpdates = (props) => {
    // console.log(props.update_gallery)

    // const updates = props.update_gallery.map((update, index)=> {
    // const [selectedTab, setSelectedTab] = useState(updates)
    // console.log(updates);

    // const updatedProject = updates.map((update, index) => {
        // console.log(update)
        // const images = update.update_gallery.map((image, index) => {
        //     return <img key={index} src={image} alt="gallery" />
//         })
//         console.log(update)
//     return (
// <div className="relative">
// <h2 className="text-3xl">Hello</h2>

//             <div className="flex border-b border-gray-300">
//                 <div key={index}>
//                     <h1>
//                         {update.update_month}
//                     </h1>
//                     {images}
//                 </div>
                {/* {updates.updates.map(date => (
                    <button key={date}
                        className={`w-1/2 text-center py-2 font-medium ${date === selectedTab ? 'bg-gray-200' : 'bg-white'}`}
                        onClick={() => setSelectedTab(date)} >
                            {date}
                        </button>
                ))} */}
            {/* </div>
        </div>
    )
}) */}

const [updateMonth, setUpdateMonth] = useState(null)

const handleClick = update_month => {
    setUpdateMonth(update_month)
}
console.log(props)
return (
    <div>
        {props.update_gallery.map((item, index) => (            
            <div key={index}>
                <button key={index}
                        className= "w-1/2 text-center py-2 font-medium"
                        onClick={() => handleClick(item.update_month)} >
                            {item.update_month}
                        </button>
                        {updateMonth === item.update_month && (
                            <div>
                                {item.update_gallery.map(image =>(
                                <img src={`storage/${image}`} alt={image} />
                            ))}
                            </div>
                        )}
            </div>
        ))}
    </div>
)
}

export default ProjectUpdates