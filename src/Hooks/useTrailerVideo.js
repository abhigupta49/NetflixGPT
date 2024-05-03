import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constatnt"
import { useDispatch, useSelector } from "react-redux"

import { addTrailerVideo } from "../utils/moviesSlice"

const useTrailerVideo = (movieID) =>{
    const dispatch = useDispatch()
    
    const getTrailerVideos = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        
        const filterData = json.results.filter(video=>video.type==="Trailer" && video.name==="Official Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
        
        
    }

    useEffect(()=>{
        getTrailerVideos()
    },[])
}

export default useTrailerVideo;