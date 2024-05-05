import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_LOGO } from "../utils/Constatnt";
const GptSearch = () =>{
    return(
        <div>
            <div className="absolute -z-10 w-screen">
                <img alt="background" src={NETFLIX_LOGO}/>
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch;