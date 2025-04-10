import { useEffect } from "react";
import { useState } from "react";
import '../css/Home.css';
import { fetchPopularMovies, SearchMovies } from "../Services/Api";
import Moviecard from "../Component/Moviecard";

function Home(){
    const[searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies ] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await fetchPopularMovies();
                setMovies(popularMovies);


            }
            catch (err){
                console.log(err);
                setError("failed to load movies...");
                }finally{
                    setLoading(false);
                }
        };
        loadPopularMovies();
    },[]);
    const handleSearch = async (e) =>{
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try{
            const SearchResult = await SearchMovies(searchQuery);
            setMovies(SearchResult);
            setError("");
         } catch (err){
            console.log (err);
            setError ("Failed to search movies");
         } finally{
            setLoading(false);
         }

    }

    return(
         <>
        <div className="Home">
            <form onSubmit={handleSearch}>
                <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search" 
                type="text"
                placeholder="search your movie"/>
                <button className="search-btn" type="submit">search</button>


            </form>

            {error && <div className="error-message">{error}</div>}
            {loading ?(
                <div className="loading">Loading... </div>
            ) :(
                <div className="movie-grid">
                    {movies.map((movies)=>(
                        <Moviecard movie={movies} key={movies.id} />
                    ) )}
                    </div>
            )}
            
            </div> 

         </>
    );

}

export default Home;