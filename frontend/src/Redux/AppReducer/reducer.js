import * as types from "./actionTypes";

const initialState = {
  data:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
     const {type,payload} = action;
     
     switch(type){
        case(types.GETDATA_REQUEST):
        return {
          ...state,
          isLoading:true
        }
        case(types.GETDATA_SUCCESS):
        return{
             ...state,
             isLoading:false,
             data:payload
        }
        case(types.GETDATA_FALIURE):
        return{
             ...state,
             isError:true
        }
        default:
         return state;
     }
};

export { reducer };
