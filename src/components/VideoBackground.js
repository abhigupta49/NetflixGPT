import useTrailerVideo from "../Hooks/useTrailerVideo"
import { useSelector } from "react-redux"
const VideoBackground = ({movieID}) =>{
    useTrailerVideo(movieID)
    const trailerVideo  = useSelector(store => store.movies?.trailerVideo)
    return(
        <div className="w-screen">
            {/* // Fetch trailer with movie ID */}
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground