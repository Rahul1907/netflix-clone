import React, { useEffect,useState } from "react";
import axios from "./axios";
import requests from './request';
import './banner.css';
function Banner() {

  const [movie,setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random()*req.data.results.length-1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <header className='banner'
      style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:'center center'
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
          <h1 className='banner_description'>
            {truncateString(movie?.overview,130)}</h1>
        </div>
      </div>
      <div className='banner_fadebottom'/>
    </header>
  );
}

export default Banner;
