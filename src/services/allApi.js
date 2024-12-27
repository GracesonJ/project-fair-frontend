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