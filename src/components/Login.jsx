import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const[isSignInForm, setIsSignInForm]= useState(true);
  const [errorMessage, setErrorMessage]= useState(null);
  
  const dispatch = useDispatch();

 const name= useRef(null)
  const email= useRef(null);
   const password= useRef(null);
  

  const handleButtonClick= ()=>{
     const message= checkValidData(email.current.value, password.current.value);
     setErrorMessage(message);
     if(message) return;

     // sign in or sign up logic
     if(!isSignInForm){
      
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {

    const user = userCredential.user;
    updateProfile(user, {
     displayName: name.current.value, 
    photoURL: USER_AVATAR
})
.then(() => {
    const {uid, email, displayName, photoURL}= auth.currentUser;
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
    
  // ...
}).catch((error) => {
setErrorMessage(error.message);
  // ...
});

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode + "-" + errorMessage);
     
  });


     }

     else{
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    
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
        <img src={BG_URL} 
       alt="Netflix background" />
      </div>
      <form   onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/70'>
      <h1 className='text-3xl font-bold my-4'>
        {isSignInForm ? "Sign In": "Sign Up"}
      </h1>
       { !isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full rounded-lg' />)}
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
