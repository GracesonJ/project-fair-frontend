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
//query Parameter = baseurl?key=value
export const allProjectApi = async(searchKey, reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/all-project?search=${searchKey}`,"",reqHeader )
}

// get user-projects
export const userProjectApi = async( reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/user-project`,"",reqHeader)
}

// api to remove user project
export const removeUserProjectApi = async(id, reqHeader)=>{
    return await commonApi(`DELETE`, `${serverUrl}/remove-userproject/${id}`,{}, reqHeader)
}

//api to update project
export const updateUserProjectApi = async(id, reqBody, reqHeader)=>{
    return await commonApi('PUT', `${serverUrl}/update-userProject/${id}`, reqBody, reqHeader)
} 

//api to update user Profile
export const updateUserProfileApi = async ( reqBody, reqHeader)=>{
    return await commonApi('PUT', `${serverUrl}/update-userProfile`, reqBody, reqHeader)
}