const API_KEY ="36b359afa18d29ddbd3142e5d06a095d"
const BASE_URL ="https://api.themoviedb.org/3"


export const fetchPopularMovies =async () =>{
    const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await responce.json();
    return data.results 

};

export const SearchMovies = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}