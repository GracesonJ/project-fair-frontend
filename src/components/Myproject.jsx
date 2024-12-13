import React from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Myproject() {
  return (
    <>
        <div className="p-5 shadow w-100">
            <div className="d-flex justify-content-between mt-4">
                <h3 className='text-success'>My Projects</h3>
                <Addproject/>
            </div>
            <div className="p-3 bg-light mt-4 rounded-2 d-flex align-items-center justify-content-between">
                <h5>Media Player</h5>
                <div className="d-flex">
                    <Edit/>
                    <FontAwesomeIcon icon={faGlobe}  className='mx-3 text-warning '/>
                    <FontAwesomeIcon icon={faGithub} className='mx-3 text-success ' />
                    <FontAwesomeIcon icon={faTrash}  className='mx-3 text-danger '/>
                </div>
            </div>

            <div className="p-3 bg-light mt-4 rounded-2 d-flex align-items-center justify-content-between">
                <h5>Media Player</h5>
                <div className="d-flex">
                    <Edit/>
                    <FontAwesomeIcon icon={faGlobe}  className='mx-3 text-warning '/>
                    <FontAwesomeIcon icon={faGithub} className='mx-3 text-success ' />
                    <FontAwesomeIcon icon={faTrash}  className='mx-3 text-danger '/>
                </div>
            </div>

            <div className="p-3 bg-light mt-4 rounded-2 d-flex align-items-center justify-content-between">
                <h5>Media Player</h5>
                <div className="d-flex">
                    <Edit/>
                    <FontAwesomeIcon icon={faGlobe}  className='mx-3 text-warning '/>
                    <FontAwesomeIcon icon={faGithub} className='mx-3 text-success ' />
                    <FontAwesomeIcon icon={faTrash}  className='mx-3 text-danger '/>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default Myproject