import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 d-flex justity-content-center align-items-center flex-column">
                    <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" className='w-75'/>
                    <h1>Look like you are lost</h1>
                    <h4>The page you are looking is unavailable</h4>
                    <Link to={'/'}><button className='btn btn-success mt-3 rounded-0'>GO HOME</button></Link>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </>
  )
}

export default PagenotFound