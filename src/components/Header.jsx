import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
       <Navbar className="bg-success d-flex align-items-center">
          <Link to={'/'} style={{textDecoration:"none"}}>
              <Navbar.Brand className='text-light mx-5'>
                <span className='fs-3'> <FontAwesomeIcon className='me-3 ' icon={faStackOverflow} />Project Fair</span>
              </Navbar.Brand>
          </Link>
      </Navbar> 
    </>
  )
}

export default Header