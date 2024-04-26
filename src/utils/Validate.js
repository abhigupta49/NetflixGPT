export const checkValidateData = (email,password,fullName,isSignUp)=>{
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isFullNamevalid = isSignUp? fullName.trim().length>0:true;
    if(!isFullNamevalid) return "Please enter full name"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordvalid) return "Password is not valid"
    
    return null;
}

