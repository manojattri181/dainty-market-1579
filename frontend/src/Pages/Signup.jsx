import uibackground from "../Images/signup/ui-login-background.svg"
import logo from "../Images/signup/logo.svg"
import google from "../Images/signup/google-logo.png";
import microsoft from "../Images/signup/microsoft-logo.png";
import apple from "../Images/signup/apple-logo.png";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { SIGNUP } from "../Redux/AuthReducer/action";
import { useEffect } from "react";

const Signup = () => {
     const [data,setData] =  useState({email:"",password:""});
     const [email,setEmailError] = useState(false);
     const [password,setPasswordError] = useState(false);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const {msg} = useSelector((store)=>{
          return {
               msg:store.AuthReducer.data.msg
          }
     })


     useEffect(()=>{
           if(msg){
                if( msg.includes("Email")){
                     setEmailError(true);
                    }else if(msg.includes("Password")){
                         setPasswordError(true);
                         setEmailError(false);
                    }else{
                         setEmailError(false);
                         setPasswordError(false);
                         navigate("/login");
                         // window.href.reload();
                    }
               }
     },[msg,email,password])
      

     const handleSignup = (e)=>{
           const {name,value} = e.target;
          setData({...data,[name]:value});
     }
     

     const handleSubmit =(e)=>{
          e.preventDefault();
          dispatch(SIGNUP(data));
     }

  return (
   <div className='w-full grid grid-cols-1  md:grid-cols-2'>

    <div className='hidden md:block'>
         <img className="bg-[#2c3e6f] w-full h-screen" src={uibackground} alt="Image Not available" />
    </div>
    <div className="flex flex-col m-auto w-7/12 mt-[25%] md:w-6/12  md:m-auto justify-center items-center">

        <img className="w-7/12 md:w-5/12" src={logo} alt="TrackingTime" />

        <div className="w-60 flex gap-x-6  py-2 px-3 mt-4 justify-start items-center bg-gray-100 hover:bg-gray-200 rounded-lg hover:cursor-pointer">
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
           

           <Link to="/login">
           <p className="text-sm font-semibold m-5 text-gray-500 hover:text-gray-600 hover:underline 
             hover:underline-offset-2 hover:cursor-pointer">Sign in with your email</p> 
           </Link>


         <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="email" onChange={handleSignup} className="text-gray-700 border border-solid border-gray-200 placeholder-gray-700  text-sm rounded-lg block w-60 mb-2 p-2.5 outline-1 outline-blue-700" required={true} placeholder="Email" />
             <p className="hidden mt-1 mb-2 pl-2 text-sm text-green-600"><span className="font-medium">Well done</span> User Email is Available.</p> 
            {email && <p className="mt-1 mb-2 pl-2 text-sm text-red-600"><span className="font-medium">Sorry! </span> User Email is not Available.</p> }
          </div>

          <div>
            <input type="password" name="password" onChange={handleSignup} className="text-gray-700 border border-solid border-gray-200 placeholder-gray-700 text-sm rounded-lg block w-60 p-2.5 outline-1 outline-blue-700" required={true}  placeholder="Password" />
            <p className="hidden mt-1 mb-2 pl-2 text-sm text-green-600"><span className="font-medium">Well done</span>Password is Strong</p>
            {password && <p className="mt-1 mb-2 pl-2 text-sm text-red-600"><span className="font-medium">Sorry!</span> Password musbt be strong.</p> }
          </div>
          
          <div className="flex justify-center mx-auto">
          <input type="checkbox" className="mt-5 accent-gray-500" name="terms&conditions" required={true} />
          </div>

          <p className="w-56 px-4 text-center text-xs font-semibold mt-2 hover:text-gray-500 hover:underline 
          hover:underline-offset-2 hover:cursor-pointer">I agree with<span className="text-xs text-gray-500 underline underline-offset-1">Terms of service & Privacy Policy</span> </p> 

          <input type="submit"  value="SIGN UP" className="w-60 bg-black items-center w-60justify-center py-2 mt-3 rounded-md text-gray-200 hover:text-gray-300 uppercase hover:cursor-pointer" />
          </form>
           
           <Link to="/login">
          <p className="text-sm  text-gray-600 mt-5  hover:text-gray-500 hover:cursor-pointer underline underline-offset-1" > Back to Login</p> 
           </Link>

          <p className="text-sm font-semibold mt-5  md:mb-18 hover:text-gray-500 hover:cursor-pointer">Terms of services / <span className="text-xs text-gray-500 underline underline-offset-1"> Privacy Policy</span> </p> 
    </div>
   </div>
  );
};


export default Signup;