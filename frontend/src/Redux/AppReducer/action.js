import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";
import axios from "axios";


let token = getLocalData("token");

let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

export const GET_DATA = () => (dispatch)=>{
    dispatch({type:types.GETDATA_REQUEST});
    return axios.get("http://localhost:8080/project",config).then((res)=>{
            dispatch({type:types.GETDATA_SUCCESS,payload:res.data.data});
    }).catch((err)=>{
        dispatch({type:types.GETDATA_FALIURE});
    })
}

export const POST_DATA = (payload) => (dispatch)=>{
  return axios.post("http://localhost:8080/project/add",payload,config).then((res)=>{
    console.log(res.data);
    alert("Project created successfull")
  }).catch((err)=>{
    console.log(err)
    alert("error while creating project")
  })
}

export const PATCH_DATA = ({id,payload}) => (dispatch)=>{
  return axios.patch(`http://localhost:8080/project/${id}`,payload,config).then((res)=>{
       alert("Updated Successfully")
  })
}


export const DELETE_DATA = (id) => (dispatch)=>{
  return axios.delete(`http://localhost:8080/project/${id}`,config).then((res)=>{
    alert("Project Deleted Successfully")
  }).catch((err)=>{
    console.log(err)
  })
}