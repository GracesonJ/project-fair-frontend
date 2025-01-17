import React, { useContext, useEffect, useState } from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { removeUserProjectApi, userProjectApi } from '../services/allApi'
import { Link } from 'react-router-dom'
import { addResponseContext, editResponseContext } from '../Context/ContextShare'


function Myproject() {
    const [userProject, setUserProject] = useState([])

    const { addResponse } = useContext(addResponseContext)
    const { editResponse} = useContext(editResponseContext)
    const [ removeStatus, setRemoveStatus ] = useState({})

    const getUserProject = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            const result = await userProjectApi(reqHeader)
            //    console.log(result);
            setUserProject(result.data);
        }
    }
    console.log(userProject);

    const handleDelete = async (id) => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await removeUserProjectApi(id, reqHeader)
            console.log(result);
            if(result.status == 200){
                setRemoveStatus(result)
                alert(`Project Deleted Siuccessfully`)
            }else{
                alert(`Something Went Wrong`)
            }
        }
    }  

    useEffect(() => {
        getUserProject()
    }, [addResponse, removeStatus, editResponse])

    return (
        <>
            <div className="p-5 shadow w-100">
                <div className="d-flex justify-content-between mt-4">
                    <h3 className='text-success'>My Projects</h3>
                    <Addproject />
                </div>

                {userProject?.length > 0 ?
                    userProject?.map((item) => (
                        <div className="p-3 bg-light mt-4 rounded-2 d-flex align-items-center justify-content-between">
                            <h5>{item.title}</h5>
                            <div className="d-flex">
                                <Edit projects = {item} />
                                <Link to={item?.website} target='_blank'><FontAwesomeIcon icon={faGlobe} className='mx-3 text-warning ' /></Link>
                                <Link to={item?.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='mx-3 text-success ' /></Link>
                                <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={faTrash} className='mx-3 text-danger ' />
                            </div>
                        </div>
                    ))
                    :
                    <h4 className='text-center text-warning mt-5'>No Project Added Yet</h4>}
            </div>


        </>
    )
}

export default Myproject