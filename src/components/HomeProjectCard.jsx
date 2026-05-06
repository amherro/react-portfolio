import React from 'react'

const HomeProjectCard = ({ title, description, tags = [], url }) => {
    return (
        <a href={url}>
            <div className='project-container'>
                <h3 className='project-title'>{title}</h3>
                <p className='project-description'>{description}</p>
                <div className='flex'>{tags.map((tag, index) =>
                    <p key={index} className='project-tag'>{tag}</p>
                )}</div>
                <div className='project-arrow'>↗</div>
            </div>
        </a>
    )
}

export default HomeProjectCard