import React from 'react'
import Card from 'react-bootstrap/Card';
import projectPhoto from '../assets/projectimg.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';





function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '100%' }} className='mt-4 mt-md-0 shadow border-0 rounded-0'>
      <Card.Img onClick={handleShow} variant="top" src={projectPhoto} className='w-100'/>
      <Card.Body>
        <Card.Title className='text-center'>Media Player</Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src={projectPhoto} alt="no image" className='w-100'/>
              </div>
              <div className="col-md-6">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, laboriosam? Sequi recusandae architecto numquam alias neque expedita illo blanditiis cupiditate nesciunt voluptatibus maxime, quod eos iste beatae, unde nemo molestias.</p>
                <h4>Technologies</h4>
                <p>React</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
          <Link to=""><FontAwesomeIcon icon={faGithub} className='fa-2x me-3'/></Link>
          <Link to=""><FontAwesomeIcon icon={faGlobe} className='fa-2x me-3'/></Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard