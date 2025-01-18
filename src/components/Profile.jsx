import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import { serverUrl } from '../services/serverUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfileApi } from '../services/allApi';
import { Collapse } from 'react-bootstrap';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';

function Profile() {
  const [open, setOpen] = useState(false);
  const [updateStatus, setUpdateStatus] = useState({})
  const [preview, setPreview] = useState("")
  const [userDetails, SetUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    github: "",
    linkedin: ""
  })

  const [existingImg, setExistingImg] = useState("")
  console.log(userDetails);
  const handleFIle = (e) => {
    SetUserDetails({ ...userDetails, profile: e.target.files[0] })
  }


  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))
    }
  }, [userDetails.profile])
  console.log(preview);

  const handleUpdate = async () => {
    const { username, email, password, profile, github, linkedin } = userDetails
    if (!github || !linkedin) {
      toast.info(`Please add GitHub and LinkedIn`)
    } else {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ?
        reqBody.append("profile", profile) :
        reqBody.append("profile", existingImg)

        const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Profile Updated")
          // alert(`Profile Updated`)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setUpdateStatus(result)
        }else{
          toast.error(`Something Went Wrong`)
          // alert(`Something Went Wrong`)
        }

      } else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Profile Updated")
          // alert(`Profile Updated`)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setUpdateStatus(result)
        }else{
          toast.error(`Something Went Wrong`)
          // alert(`Something Went Wrong`)
        }
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      console.log(user);
      SetUserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin })
      setExistingImg(user.profile)

    }
  }, [updateStatus])

  return (
    <>
      
        <div className="p-4 shadow mt-5" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
          <div className="d-flex justify-content-between">
            <h4 className='text-success'>Profile</h4>
            <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open} className='btn'>
              {open == true? <FontAwesomeIcon icon={faAngleUp}/> :
              <FontAwesomeIcon icon={faAngleDown} />}
              </button>
          </div>
          <Collapse in={open}> 

           <div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <label htmlFor="profileImage" className=''>
                  <input onChange={(e) => handleFIle(e)} type="file" id='profileImage' className='d-none' />
      
                  {existingImg == "" ?
                    <img src={preview ? preview : "https://cdn.iconscout.com/icon/free/png-256/free-user-icon-download-in-svg-png-gif-file-formats--profile-avatar-account-person-app-interface-pack-icons-1401302.png?f=webp&w=256"} alt=""
                      style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "25px" }} />
                    :
                    <img src={preview ? preview : `${serverUrl}/upload/${existingImg}`} alt="" 
                    style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "25px" }}/>
                  }
                </label>
                <div className='w-100'>
                  <div className="mb-3">
                    <input type="text" placeholder='Github' className='form-control' value={userDetails?.github} onChange={(e) => SetUserDetails({ ...userDetails, github: e.target.value })} />
                  </div>
                  <div className="mb-4">
                    <input type="text" placeholder='LinkedIn' className='form-control' value={userDetails?.linkedin} onChange={(e) => SetUserDetails({ ...userDetails, linkedin: e.target.value })} />
                  </div>
                  <div className="mb-2 text-center">
                    <button onClick={handleUpdate} className='btn btn-success w-75 mt-2'>Update</button>
                  </div>
                </div>
              </div>
           </div>

          </Collapse>
          <ToastContainer position="top-center" autoClose={2000} theme="colored" />
  
        </div>
      
    </>
  )
}

export default Profile