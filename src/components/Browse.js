
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../Hooks/usePopularMovies";

const Browse =() =>{
    //Custom Hooks calling fetch movies data in browser 
    useNowPlayingMovies()
    usePopularMovies()
    return(
        <div>
            <Header />
            <Maincontainer />
            <Secondarycontainer />
        </div>
    )
}

export default Browse;