import React from 'react'

const InfoCard = ({title, data}) => {
  return (
    <div className='contact-card card bg-base-200 mb-20'>
        <h2 className='card-title justify-center pt-5 underline'>{title}</h2>
        <p className='card-body items-center'>{data}</p>
    </div>
  )
}

export default InfoCard