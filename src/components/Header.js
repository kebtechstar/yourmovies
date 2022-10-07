import React from 'react'
import './Header.css'
import Input from './Input'
import logo from '../images/logo.png';
import MovieContext from '../MovieContext';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';






const Header = () => {


const {loader } = useContext(MovieContext)

  return (
    <div className='banner'>


<div className= "loader">
  <RotatingLines
  strokeColor="white"
  strokeWidth="3"
  animationDuration="0.75"
  width="100"
  visible={loader}
/>
</div>

      <img src={logo} className="logo" alt='logo'></img>
        
        <Input />
     
      <div className='about'>
        <p>This is one of my project as a full stack developer.</p>
        <p>In this project, i have decided to create a movie web application.</p>
      </div>

      <div className='follow'>
        <button className='facebook'><a href='https://web.facebook.com/profile.php?id=100085842121635'><i className="fa-brands fa-facebook"></i></a></button>
        <button className='whatsapp'><a href='https://wa.me/+2347082492893'><i className="fa-brands fa-whatsapp"></i></a></button>
      </div>


    </div>
  )
}

export default Header