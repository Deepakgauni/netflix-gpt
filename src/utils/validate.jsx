export const checkValidData= (email,password)=>{
  const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

   if(!isEmailValid)return "Email is not valid";
   if(!isPasswordValid) return "password is not valid";
   return null;

}

