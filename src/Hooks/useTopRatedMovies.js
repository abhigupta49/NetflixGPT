import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constatnt";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const topratedMovies = async () =>{
        const data  = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTIONS)
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        topratedMovies();
    },[])
}

export default useTopRatedMovies;