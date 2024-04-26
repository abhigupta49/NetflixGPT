import Signin from "./Forms/Signin";

import Header from "./Header";

const Login =  () =>{
    return(
        <div className="">
            <Header />
            <div className="absolute">
                <img alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            </div>

            <Signin/>
        </div>
    )
}

export default Login;