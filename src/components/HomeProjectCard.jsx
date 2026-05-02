import React from 'react'

const HomeProjectCard = ({ title, description, tags = [] }) => {
    return (
        <div className='project-container'>
            <h3 className='project-title'>{title}</h3>
            <p>{description}</p>
            <p>{tags.map(tag =>
                <p>{tag}</p>
            )}</p>
        </div>
    )
}

export default HomeProjectCard