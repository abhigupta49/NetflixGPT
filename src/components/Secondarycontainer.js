import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const Secondarycontainer = () =>{
    const movies = useSelector(store => store.movies)
    
    return(
        movies.nowPlayingMovies && <div className="bg-black">
            <div className="-mt-60 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Latest"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Rated"} movies={movies.nowPlayingMovies} />
            </div>
            
        </div>
    )
}

export default Secondarycontainer;