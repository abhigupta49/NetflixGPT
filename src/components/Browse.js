
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse =() =>{
    //Custom Hooks calling fetch movies data in browser 
    useNowPlayingMovies()
    
    return(
        <div>
            <Header />
            <Maincontainer />
            <Secondarycontainer />
        </div>
    )
}

export default Browse;