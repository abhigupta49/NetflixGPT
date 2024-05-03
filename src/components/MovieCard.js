import {IMG_CDN_POSTER_URL} from '../utils/Constatnt'

const MovieCard = ({posterID}) =>{
    return(
        <div className='w-48 pr-4'>
            <img alt='Movie Card' src={IMG_CDN_POSTER_URL+posterID}></img>
        </div>
    )
}
export default MovieCard;