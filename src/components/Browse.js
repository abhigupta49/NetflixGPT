
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GptSearch from './GptSearch'
import { useSelector } from "react-redux";

const Browse =() =>{
    //Custom Hooks calling fetch movies data in browser 
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies();

    const showGptSearchValue = useSelector(store => store.gpt.showGptSearch)
    return(
        <div>
            <Header />
            {
                showGptSearchValue ? <GptSearch /> : 
                <> 
                    <Maincontainer />
                    <Secondarycontainer />
                </>
            }
            
            
        </div>
    )
}

export default Browse;