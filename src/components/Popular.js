import React from 'react'
import './Popular.css'
import MovieContext from '../MovieContext';
import { useContext, useEffect} from 'react';





const Popular = () => {

  const { setSavePopular, SavePopular } = useContext(MovieContext);

  useEffect(()=> {
   

    fetchPopular()

    // eslint-disable-next-line 
     },[]);
     
     
      async function fetchPopular() {
   
         const url = `https://imdb-api.com/en/API/MostPopularMovies/k_j32o4anm`;
     
     
        await fetch(url)
           .then((res) => {
             return res.json();
           })
           .then((data)=> { 
            data.items.splice(20)
          setSavePopular(data.items)
           }).catch((err) => {
              console.log(err);
           })
       }

   

  return (
    <div className='popular'>
     <h1 className='heading'>Popular</h1>
  
     <div className='pcover'>
     {
      SavePopular.map((movie) =>     
          <div className='poster' key={movie.id}>
              <img src={movie.image} alt ="movie" className='pimg' />
          </div>
  )}
    </div>


 
    </div>
  )
}

export default Popular