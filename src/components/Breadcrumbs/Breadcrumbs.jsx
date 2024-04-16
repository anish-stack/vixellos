import React from 'react'

const Breadcrumbs = ({title}) => {
  return (
    <div className='container-fluid py-5 bg-warning'>
        <div className='col-12 text-center'>
            <h1 className='text-black fs-1 fw-bolder'>{title}</h1>
        </div>
    </div>
  )
}

export default Breadcrumbs