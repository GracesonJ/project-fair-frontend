import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Edit() {
     const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  return (
    <>
    <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='mx-3 text-info'/>

            <Modal centered show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="projectImage">
                                    <input id='projectImage' type="file" style={{ display: "none" }} />
                                    <img src="https://img.freepik.com/premium-vector/add-file-icon-vector-image-can-be-used-documents-files_120816-133612.jpg" alt="no image" className='w-100' />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" placeholder='Title' className='form-control' />
                                </div>
                                <div className="mb-3">
                                <input type="text" placeholder='Language' className='form-control' />

                                </div>
                                <div className="mb-3">
                                <input type="text" placeholder='GitHub' className='form-control' />

                                </div>
                                <div className="mb-3">
                                <input type="text" placeholder='Website' className='form-control' />

                                </div>
                                <div className="mb-3">
                                    <textarea rows={5} className='form-control' placeholder='overview'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Edit