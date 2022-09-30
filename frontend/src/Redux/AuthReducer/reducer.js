import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";


let token = getLocalData("token");

const initialState = {
  data:"",
  token: token || "",
  isLoading: false,
  isError: false
};

const reducer = (state = initialState, action) => {
    const {type,payload} = action;

    switch(type){
      case types.SIGNUP_REQUEST:
        return {
          ...state ,
          isLoading:true
        }
        case types.SIGNUP_SUCCESS:{
            return {
              ...state ,
              isLoading:false,
              isError:false,
              data:payload
            }
        }
        case types.SIGNUP_FAILURE:{
          return {
            ...state ,
            data:payload,
            isLoading:false,
            isError:true,
          }
      }
      case types.LOGIN_REQUEST:
        return {
          ...state ,
          isLoading:true
        }
        case types.LOGIN_SUCCESS:{
           saveLocalData("token",payload.token);
            return {
              ...state ,
              isLoading:false,
              isError:false,
              data:payload.msg,
              token:payload.token
            }
        }
        case types.LOGIN_FAILURE:{
          return {
            ...state ,
            data:"",
            isLoading:false,
            isError:true,
          }
      }
    }
          return state;
};

export { reducer };
