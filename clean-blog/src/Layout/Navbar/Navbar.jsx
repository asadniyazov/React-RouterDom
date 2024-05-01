import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [isHiddenUl, setisHiddenUl] = useState(false)
    function HiddenBtnClick() {
        setisHiddenUl(!isHiddenUl)
    }
  return (
    <>
    <header>
    <nav>
    <div className="nav__container">
          <div className="nav__a"><NavLink className="nav__a" to={"/"}>Start Bootstrap</NavLink></div>
          <div class="nav__ul">
            <ul>
            <NavLink className={'a'} to={'/'}>Home</NavLink>
            <NavLink className={'a'} to={'about'}>About Us</NavLink>
            <NavLink className={'a'} to={'sample_post'}>Sample Post</NavLink>
            <NavLink className={'a'} to={'contact'}>Contact</NavLink>
            </ul>
          </div>
          <button onClick={HiddenBtnClick} className="hidden"> <i className="fa-solid fa-bars"></i></button>
        
          </div>
          <div className='hidden_ul_container'>
          </div>
          <div  className={` hidden__ul ${isHiddenUl ? "active" : ""}`}>
            <ul>
            <NavLink className={'a'} to={'/'}>Home</NavLink>
            <NavLink className={'a'} to={'about'}>About Us</NavLink>
            <NavLink className={'a'} to={'sample_post'}>Sample Post</NavLink>
            <NavLink className={'a'} to={'contact'}>Contact</NavLink>
            </ul>
        </div>
            
     </nav>
     </header>
    </>
  )
}

export default Navbar