import Moviecard from '../Component/Moviecard';
import { useMovieContext} from '../Context/MoviesContent';
import '../css/Favorite.css'


function Favorites(){
    const {favorites} = useMovieContext();

  if (favorites && favorites.length > 0){
    return(
        <div className="movie-grids">
            {favorites.map((movie) =>(
                <Moviecard movie={movie} key={movie.id}/>
            ))}

        </div>
    )
  }
  return(
        <div className="favorites-ampty">
        <h2>
         no favorite movie yet
          </h2> 
        <p> starting movies to your favorite, and they will appear here!</p>
        </div>
  )
}



export default Favorites