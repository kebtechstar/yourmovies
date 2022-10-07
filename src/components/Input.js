import React from 'react'
import './Input.css'
import MovieContext from '../MovieContext';
import { useContext } from 'react';
import { Link } from "react-scroll";

const Input = () => {

  const { search, setSearch,setfetchedMovie, setloader} = useContext(MovieContext);




  async function fetchMovie() {

     setloader(true)
    const url = `https://imdb-api.com/en/API/SearchMovie/k_j32o4anm/s=${search}`;


   await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data)=> { 
     setfetchedMovie(data.results)
     setloader(false)
      }).catch((err) => {
        console.log(err);
     })
  }






  function saveMovie() {
    if(search !== "") {
    fetchMovie();
    }
  }


  return (
    <div className='input'>
        <input type="text" placeholder='search your movie' onChange={(e)=> setSearch(e.target.value)} />
        <Link to="movies" spy={true} smooth={true} offset={-10} duration={500}>
        <i className='fa fa-search' onClick={saveMovie}></i>
        </Link>
    </div>
  )
}

export default Input