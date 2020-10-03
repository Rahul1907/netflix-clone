import React,{useEffect, useState} from 'react'
import avatr from './images/avtar.png';
import './nav.css'
function Nav() {

  const [show,handleShow] = useState(false);
  
  useEffect(() => {
    
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        handleShow(true);
      }
      else 
        handleShow(false);
    })
    return ()=>{
      window.removeEventListener('scroll')
    };
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />
      <img
        className='nav_avtar'
        src={avatr}
        alt='avtar logo'
      />
    </div>
  )
}

export default Nav
