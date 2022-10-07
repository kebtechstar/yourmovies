import React from 'react'
import './Movies.css'
import MovieContext from '../MovieContext';
import { useContext, useState } from 'react';
import Modal from './Modal';

const Movies = () => {

  let {fetchedMovie} = useContext(MovieContext);

  const [ModalOpen, setModalOpen] = useState(false);
  const [movieId, setmovieId] = useState("")

  function showInfo() {
    setModalOpen(true)
  }





  return (
    <div id='movies'>
      {
      fetchedMovie.length !== 0 ? <h1>Movies</h1> : "No searched movie available"
      }
    
     <div className='cover'>
     {
      fetchedMovie.map((movie) =>     
          <div className='poster' key={movie.id} onClick={()=> setmovieId(movie.id)}>
              <img src={movie.image} alt = {movie.title} className='img' onClick={showInfo}/>
          </div>
  )}
    </div>
    {
      ModalOpen ?   <Modal movieId={movieId} movies={fetchedMovie} modal={setModalOpen}/> : ""
    }
    </div>
  )
}

export default Movies