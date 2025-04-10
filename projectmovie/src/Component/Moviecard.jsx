import "../css/MovieCard.css";
import { useMovieContext } from "../Context/MoviesContent";



function Moviecard({movie}){

    const {AddToFavorite,removeFromFavorite,isFavorites } = useMovieContext();
    const favorites = isFavorites(movie.id)

    function onAddToFavorites(e){
        e.preventDefault ()
        if (favorites) 
            removeFromFavorite(movie.id)
         else 
            AddToFavorite(movie)
        
    }
   
    return(
        
        <div className="card">
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.tittle} />
               
                <div className="overlay">
                    <button className={`favorite-btn ${favorites ? "active":""}`} onClick={onAddToFavorites}> {favorites ? "❤️" : "🤍"}</button>
                </div>

            </div>
            <div className="info">
                <h3>{movie.tittle}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
            </div>
    );
        
    

}
export default Moviecard;

