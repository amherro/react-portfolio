import React from 'react'

const Project = ({source, title, description, liveUrl, githubUrl}) => {
  return (
    <div>
        <div className="image-overlay card relative" data-overlay-title={title}>
            <img src={source} alt={title} className='project-screenshot w-full align-top relative'/>
            <button className='open-modal-button card-action btn btn-primary btn-sm'>Open</button>
        </div>
        {/* Dark overlay with text on hover */}
        {/* Button to open modal */}

        {/* ********* Modal ********* */}
        {/* Title */}
        {/* Screenshot */}
        {/* Short description */}
        {/* Buttons to open live version and GitHub repo */}
    </div>
  )
}

export default Project