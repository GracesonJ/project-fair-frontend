import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'


function Projects() {
  return (
    <>
      <Header />
      <div className='my-5'>
        <h3 className='text-center'>All Projects</h3>

        {/* Not Login */}
        {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <img src="https://cdn.dribbble.com/users/8619169/screenshots/16514320/media/0dc828901898c59928c3d69718791941.gif" alt="no img" className='w-75' />
            <h4>please <Link to={'/login'}>Login</Link> to see more Projects</h4>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div> */}

        {/* login */}
        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex">
                <input type="text" placeholder='Technologies' className='form-control shadow ' />
                <FontAwesomeIcon style={{ color: 'lightgrey', marginTop: "11.5px", marginLeft: "-30px" }} icon={faMagnifyingGlass} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>

          <div className="container mt-5 p-5">
            <div className="row">
              <div className="col-md-3"><ProjectCard/></div>
              <div className="col-md-3"><ProjectCard/></div>
              <div className="col-md-3"><ProjectCard/></div>
              <div className="col-md-3"><ProjectCard/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects