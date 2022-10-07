import React from 'react'
import "./Modal.css"


const Modal = ({ movieId, movies, modal }) => {

  

  return (
    <div className='modal'>
      <i className='fa fa-times' onClick={()=> modal(false)}></i>
      {         
         // eslint-disable-next-line      
        movies.map(function (movie) {
          if (movie.id === movieId) {
            return (
              <div className='modalCover'key={movie.id}>
                <img src={movie.image} className="image" alt={movie.title} ></img>
                <div className='details'>
                  <h1 className='movieTitle'>{movie.title}</h1>
                  <p>{movie.description}</p>
                </div>
              </div>
            )
  
          }

        })

      }
        </div>
  )

}

export default Modal