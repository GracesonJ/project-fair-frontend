import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import photo from "../assets/designer.svg"
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'


function Home() {
  return (
    <>
        <div style={{height:"100vh"}} className='bg-success p-5'>
          <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1 style={{fontSize:"70px"}}>Project Fair</h1>
                    <p>One stop destination for all software development Projects</p>
                    <Link to={'/login'}><button className='btn text-light p-1 mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    <Link to={'/dashboard'}><button className='btn text-light p-1 mt-3'>Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
                <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-center">
                    <img src={photo} alt="no img" className='w-75' />
                </div>
            </div>
          </div>  
        </div>

        {/* Explore our Project */}

        <div>
          <h1 className='text-center mt-5'>Explore our Projects</h1>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <ProjectCard/>
              </div>
              <div className="col-md-4">
              <ProjectCard/>
              </div>
              <div className="col-md-4">
              <ProjectCard/>
              </div>
            </div>
          </div>
          <Link to={'/projects'} className='text-danger'><p className='text-center my-5'>See more Projects</p></Link>
        </div>
    </>
  )
}

export default Home