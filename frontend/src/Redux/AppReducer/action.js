import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";
import axios from "axios";
import { fetchLink } from "../../App";


let token = getLocalData("token");

let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

export const GET_DATA = () => (dispatch)=>{
    dispatch({type:types.GETDATA_REQUEST});
    return axios.get(`${fetchLink}/project`,config).then((res)=>{
            dispatch({type:types.GETDATA_SUCCESS,payload:res.data.data});
    }).catch((err)=>{
        dispatch({type:types.GETDATA_FALIURE});
    })
}

export const POST_DATA = (payload) => (dispatch)=>{
  return axios.post(`${fetchLink}/project/add`,payload,config).then((res)=>{
    console.log(res.data);
    alert("Project created successfull")
  }).catch((err)=>{
    console.log(err)
    alert("error while creating project")
  })
}

export const PATCH_DATA = ({id,payload}) => (dispatch)=>{
  return axios.patch(`${fetchLink}/project/${id}`,payload,config).then((res)=>{
       alert("Updated Successfully")
  })
}


export const DELETE_DATA = (id) => (dispatch)=>{
  return axios.delete(`${fetchLink}/project/${id}`,config).then((res)=>{
    alert("Project Deleted Successfully")
  }).catch((err)=>{
    console.log(err)
  })
}