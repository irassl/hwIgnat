import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div  className='moved'>
            <NavLink to='/pre-junior'className='link'>pre-junior </NavLink>
            <NavLink to='/junior' className='link'>junior </NavLink>
            <NavLink to='/junior-plus' className='link'>junior-plus </NavLink>
            <div className='block'/>

        </div>
    )
}

export default Header
