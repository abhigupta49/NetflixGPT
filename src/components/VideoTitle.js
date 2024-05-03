
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const VideoTitle = ({title,overview}) =>{
    
    return(
        <div className="pt-[20%] px-24 absolute aspect-video w-screen text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div >
                <button className="bg-white text-black text-xl p-4 px-12 hover:bg-opacity-80 rounded-sm"><FontAwesomeIcon icon={faPlay}/> Play</button>
                <button className="bg-white text-white text-xl p-4 px-12 mx-2 bg-opacity-50 rounded-sm"><FontAwesomeIcon icon={faInfoCircle}/> More</button>
            </div>
        </div>
    )
}
export default VideoTitle;