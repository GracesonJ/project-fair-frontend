import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

function Addproject() {

    const [show, setShow] = useState(false)
    const [preview, setPreview] = useState("")
    console.log(preview);

    const [projectDetails, setProjectDetails] = useState({
        title: "",
        language: "",
        github: "",
        website: "",
        overview: "",
        projectImage: ""
    })
    console.log(projectDetails);

    const handleFile = (e) => {
        // console.log(e.target.files[0]);
        setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])


    const handleClose = () => {
        setShow(false)
        handleCancel()
    };
    const handleShow = () => setShow(true);
    const handleCancel = () => {
        setProjectDetails({
            title: "",
            language: "",
            github: "",
            website: "",
            overview: "",
            projectImage: ""
        })
        setPreview("")
    }
    const handleAdd = () => {
        const { title, language, github, website, overview, projectImage } = projectDetails
        if (!title || !language || !github || website || !overview || !projectImage) {
            toast.info(`Fill the form completely`)
        }else{
            
        }
    }
    return (
        <>
            <button onClick={handleShow} className='btn btn-success rounded-0'>Add Project</button>

            <Modal centered show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="projectImage">
                                    <input id='projectImage' type="file" style={{ display: "none" }} onChange={(e) => handleFile(e)} />
                                    <img src={preview ? preview : "https://img.freepik.com/premium-vector/add-file-icon-vector-image-can-be-used-documents-files_120816-133612.jpg"} alt="no image" className='w-100' />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" value={projectDetails.title} placeholder='Title' className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={projectDetails.language} placeholder='Language' className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />

                                </div>
                                <div className="mb-3">
                                    <input type="text" value={projectDetails.github} placeholder='GitHub' className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />

                                </div>
                                <div className="mb-3">
                                    <input type="text" value={projectDetails.website} placeholder='Website' className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />

                                </div>
                                <div className="mb-3">
                                    <textarea rows={5} value={projectDetails.overview} className='form-control' placeholder='overview' onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        </>
    )
}

export default Addproject