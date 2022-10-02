import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";
import axios from "axios";


let token = getLocalData("token");

let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

// Get => /project 
// /project/add => post
// /project/id  =>delete patch 

export const GET_DATA = () => (dispatch)=>{
    dispatch({type:types.GETDATA_REQUEST});
    return axios.get("http://localhost:8080/project",config).then((res)=>{
            dispatch({type:types.GETDATA_SUCCESS,payload:res.data.data});
    }).catch((err)=>{
        dispatch({type:types.GETDATA_FALIURE});
    })
}

