import * as types from "./actionTypes";
import axios from "axios";
import { fetchLink } from "../../App";


export const SIGNUP = (payload) => (dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST});
    return axios.post(`${fetchLink}/user/signup`,payload).then((res)=>{
        if(res.data?.data){
            dispatch({type:types.SIGNUP_SUCCESS,payload:res.data.data});
        }else if(res.data.isError){
            dispatch({type:types.SIGNUP_FAILURE,payload:res.data.isError});
        }
    });
}


export const LOGIN = (payload) => (dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});
    return axios.post(`${fetchLink}/user/login`,payload).then((res)=>{
            console.log(res.data);
            dispatch({type:types.LOGIN_SUCCESS,payload:res.data.data});
    });
}

