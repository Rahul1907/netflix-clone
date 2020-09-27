const APIKEY= '4e13e966fa070acce63d415954037e68';

const requets ={
  fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${APIKEY}&width_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&width_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&width_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&width_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&width_genres=99`,
}

export default requets