import React from 'react'

const HomeProjectCard = ({ title, description, tags = [] }) => {
    return (
        <div className='project-container'>
            <h3 className='project-title'>{title}</h3>
            <p>{description}</p>
            <div>{tags.map((tag, index) =>
                <p key={index}>{tag}</p>
            )}</div>
        </div>
    )
}

export default HomeProjectCard