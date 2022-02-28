import React from 'react'
import { logo , dollar , arrow , cart} from '../images/logo'
import './nav.css'
export const Navbar = () => {
  return (
    <div className='nav-container'>
        <ul className='categories'>
            <li className='active'>Women</li>
            <li>Men</li>
            <li>Kids</li>
        </ul>
       {logo}
       <ul className='symbols-container'>
           <li>{dollar}</li>
           <li>{arrow}</li>
           <li>{cart}</li>
       </ul>
    </div>
  )
}
