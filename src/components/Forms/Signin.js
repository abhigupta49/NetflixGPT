import { useRef, useState } from "react"
import { checkValidateData } from "../../utils/Validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Signin = () =>{

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullNameRef = useRef(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () =>{
        // validate the form date
        const fullNameValue = isSignInForm?'': (fullNameRef.current?.value || '')
        const message = checkValidateData(emailRef.current.value,passwordRef.current.value,fullNameValue.trim(),!isSignInForm)
        setErrorMessage(message)
        if(message) return;

        //Sign In or Sign Up
        if(!isSignInForm){
            //Signup Logic
            createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-"+errorMessage)
                // ..
            });
        }else{
            //SignIn Logic
        }


    }

    return(
        <form onSubmit={(e)=>e.preventDefault()} className="p-12 absolute bg-black bg-opacity-80 w-3/12 my-36 mx-auto left-0 right-0">
                <h1 className="font-bold text-3xl py-2 p-2 text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" ref={fullNameRef} placeholder="Enter Full Name" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />}
                <input ref={emailRef} type="text" placeholder="Email Address" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />
                <input ref={passwordRef} type="password" placeholder="Password" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />
                <p className="text-red-500 m-2">{errorMessage}</p>
                <button onClick={handleButtonClick} className="p-2 m-2 mt-4 rounded-md bg-red-600 w-full text-white">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="text-white p-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered Sign In Now"}</p>
        </form>
    )
}

export default Signin