import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



// register request


export const registerApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/register`, reqBody,"")
}

// login request
export const loginApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/login`, reqBody,"")
}

// addProject
export const addProjectApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/add-project`, reqBody, reqHeader)
}

// Get Home Project
export const homeProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/home-projects`)
}

// get All projects
export const allProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/all-project`)
}

// get user-projects
export const userProjectApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/user-project`,"",reqHeader)
}