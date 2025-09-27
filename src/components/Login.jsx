import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'

const Login = () => {
  const[isSignInForm, setIsSignInForm]= useState(true);
  const [errorMessage, setErrorMessage]= useState("");

  const email= useRef(null);
   const password= useRef(null);

  const handleButtonClick= ()=>{
     const message= checkValidData(email.current.value, password.current.value);
     setErrorMessage(message);
     if(message)return;

     // sign in or sign up logic
     if(!isSignInForm){
        // sign up logic
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });


     }

     else{
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
     }


  }

  const toogleSignInform=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg' 
       alt="Netflix background" />
      </div>
      <form   onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/70'>
      <h1 className='text-3xl font-bold my-4'>
        {isSignInForm ? "Sign In": "Sign Up"}
      </h1>
       { !isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full rounded-lg' />)}
        <input ref={email} type="text" placeholder='Email or phone number' className='p-4 my-4 bg-gray-600 w-full rounded-lg'  />
        
         <input ref={password} type='password' placeholder='Password' className='p-4 my-4 bg-gray-700 w-full rounded-lg' />

         <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

         <button className="p-4 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
         <p className='cursor-pointer'onClick={toogleSignInform}>
         {isSignInForm ? "New to Netflx? Sign Up Now": "Already registerd ? Sign In Now. "}</p>
      </form>
    </div>
  )
}

export default Login
