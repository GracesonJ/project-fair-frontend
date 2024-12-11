import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import photo from "../assets/designer.svg"

function Home() {
  return (
    <>
        <div style={{height:"100vh"}} className='bg-success p-5'>
          <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1 style={{fontSize:"70px"}}>Project Fair</h1>
                    <p>One stop destination for all software development Projects</p>
                    <button className='btn text-light p-1 mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                    <button className='btn text-light p-1 mt-3'>Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="col-md-6">
                    <img src={photo} alt="no img" className='w-75' />
                </div>
            </div>
          </div>  
        </div>
    </>
  )
}

export default Home