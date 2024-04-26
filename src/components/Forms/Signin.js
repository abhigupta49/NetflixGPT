import { useState } from "react"
import Signup from "./Signup";

const Signin = () =>{

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    return(
        <form className="p-12 absolute bg-black bg-opacity-80 w-3/12 my-36 mx-auto left-0 right-0">
                <h1 className="font-bold text-3xl py-2 p-2 text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Enter Full Name" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />}
                <input type="text" placeholder="Email Address" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />
                <input type="password" placeholder="Password" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />
                <button className="p-2 m-2 mt-4 rounded-md bg-red-600 w-full text-white">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="text-white p-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered Sign In Now"}</p>
        </form>
    )
}

export default Signin