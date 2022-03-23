import React from 'react'
import './Nav.css'
import logo from './assets/logo.svg'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'
import avatar from './assets/image-avatar.jpg'

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='brand'>
            <img src={logo} />
        </div>
        <div className='options'>
            <div className='theme'>
                <img src={sun} />
            </div>
            <div className='avatar'>
                <img src={avatar} />
            </div>
        </div>
    </nav>
  )
}

export default Nav
