import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";

import {addUser, removeUser} from "../utils/userSlice"
import { toggleGptSearchView,toggleLang } from "../utils/gptSlice";
const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const user = useSelector(store=>store.user)
    const gptSearchValue = useSelector(store=>store.gpt.showGptSearch)
    const handleSignout = () =>{
        signOut(auth).then(()=>{
            
        }).catch((error)=>{
            
            navigate("/error")
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                navigate("/browse")
            } else {
              // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });

        // unsubscribe when Component unmounts
        return () =>unsubscribe()
    },[])

    const handleGptSearch = () =>{
        //Toggle GPT search
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) =>{
        
        dispatch(toggleLang(e.target.value))
    }

    return(
        <div className=" w-screen px-8 py-2 bg-gradient-to-b from-transparent  z-10 flex justify-between fixed top-0 ">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            {user && (
                <div className="flex items-center justify-center">
                    <button className="py-2 px-4 mx-4 m-2 bg-white text-black rounded-sm" onClick={handleGptSearch}>{gptSearchValue?"Homepage" :"GPT Search" }</button>
                    {gptSearchValue && <select className="mx-4 p-2 m-2 bg-gray-900 text-white rounded-sm" onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="spanish">Spanish</option>
                    </select>}
                    <img className="w-10 mr-2 h-9" src={user?.photoURL} alt="usericon" />
                    <button className="text-white" onClick={handleSignout}>Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header;