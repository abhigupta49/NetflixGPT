import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    const handleSignout = () =>{
        signOut(auth).then(()=>{
            navigate("/")
        }).catch((error)=>{
            console.log(error)
            navigate("/error")
        })
    }

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            <div className="flex items-center justify-center">
                <img className="w-10 mr-2 h-9" src={user?.photoURL} alt="usericon" />
                <button className="text-white" onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
    )
}

export default Header;