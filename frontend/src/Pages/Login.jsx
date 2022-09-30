import uibackground from "../Images/signup/ui-login-background.svg"
import logo from "../Images/signup/logo.svg"
import google from "../Images/signup/google-logo.png";
import microsoft from "../Images/signup/microsoft-logo.png";
import apple from "../Images/signup/apple-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../Redux/AuthReducer/action";

const Login = () => {  
     const [data,setData] =  useState({email:"",password:""});
     const [error,setError] = useState(false);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const {msg} = useSelector((store)=>{
          return {
               msg:store.AuthReducer.data
          }
     })


     useEffect(()=>{
           if(msg){
                if( msg?.includes("Please")){
                     setError(true);
                    }else if(msg?.includes("successfull")){
                         setError(false);
                         navigate("/");
                    }
               }
     },[msg,error])
      

     const handleChange = (e)=>{
           const {name,value} = e.target;
          setData({...data,[name]:value});
     }
     

     const handleSubmit =(e)=>{
          e.preventDefault();
          console.log(data);
          dispatch(LOGIN(data))
     }
     console.log(msg,error);

  return (
   <div className='w-full grid grid-cols-1  md:grid-cols-2'>

    <div className='hidden md:block'>
         <img className="bg-[#2c3e6f] w-full h-screen overscroll-y-none" src={uibackground} alt="Image Not available" />
    </div>
    <div className="flex flex-col m-auto w-7/12 mt-[25%] md:w-6/12  md:m-auto justify-center items-center">

        <img className="w-6/12 md:w-5/12" src={logo} alt="TrackingTime" />

        <div className="w-60 flex gap-x-6  py-2 px-3 mt-3 justify-start items-center bg-gray-100 hover:bg-gray-200 rounded-lg hover:cursor-pointer">
             <img  className="w-6" src={google} alt="Goolge" />
             <h1   className="text-sm font-semibold">Sign in with Google</h1>
        </div>

        <div className="w-60 flex gap-x-6  py-2 px-3 mt-1 justify-start items-center bg-gray-100 hover:bg-gray-200 rounded-lg hover:cursor-pointer">
             <img  className="w-6" src={apple} alt="Google" />
             <h1   className="text-sm font-semibold">Sign in with Apple</h1>
        </div>

        <div className="w-60 flex gap-x-6  py-2 px-3  mt-1 justify-start items-center bg-gray-100 hover:bg-gray-200 rounded-lg hover:cursor-pointer">
             <img  className="w-6" src={microsoft} alt="Microsoft" />
             <h1   className="text-sm font-semibold">Sign in with Microsoft</h1>
        </div>
           
          <p className="text-sm font-semibold m-5 text-gray-600">Sign in with your email</p> 
           
           <form  onSubmit={handleSubmit}>

          {/* Input fields */}
          <div>
            <input type="text" name="email" onChange={handleChange} className="text-gray-700 border border-solid border-gray-200 placeholder-gray-700  text-sm rounded-lg block w-60 mb-2 p-2.5 outline-1 outline-blue-700 " placeholder="Email" />
            <p className="hidden mt-1 mb-2 pl-2 text-sm text-red-600">Email is not Registered.</p>
          </div>

          <div>
            <input type="password" name="password" onChange={handleChange}  className="text-gray-700 border border-solid border-gray-200 placeholder-gray-700 text-sm rounded-lg block w-60 p-2.5 outline-1 outline-blue-700" placeholder="Password" />
          {error  &&   <p className=" mt-1 mb-2  text-sm font-semibold text-red-600">Please check creditails</p>}
          </div>
          
          <p className="text-xs font-semibold mt-2 hover:text-gray-500 hover:underline 
          hover:underline-offset-2 hover:cursor-pointer">Forgot your password? <span className="text-xs text-gray-500 underline underline-offset-1">Retrieve</span> </p> 
           
           <input type="submit" value="Login" className="w-60 bg-black items-cente6w-60justify-center py-2 mt-3 rounded-md hover:cursor-pointer text-gray-200 hover:text-gray-300" />
          </form>

          <Link to="/signup">
          <p className="text-sm font-semibold mt-5 text-gray-600 hover:cursor-pointer">Don't have an account? <span className="text-xs text-gray-600 underline underline-offset-1"> SIGN UP</span> </p> 
          </Link> 

          <p className="text-sm font-semibold mt-5 hover:text-gray-500  hover:cursor-pointer">Terms of services / <span className="text-xs text-gray-500 underline underline-offset-1 md:mb-18"> Privacy Policy</span> </p> 
    </div>
   </div>
  );
};

export default Login;