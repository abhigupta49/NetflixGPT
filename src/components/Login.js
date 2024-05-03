import Signin from "../Forms/Signin"

import Header from "./Header";
import { NETFLIX_LOGO } from "../utils/Constatnt";
const Login =  () =>{
    return(
        <div className="">
            <Header />
            <div className="absolute">
                <img alt="background" src={NETFLIX_LOGO}/>
            </div>

            <Signin/>
        </div>
    )
}

export default Login;