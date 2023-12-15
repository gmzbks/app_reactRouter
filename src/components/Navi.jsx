import React from 'react'
import { NavLink, Outlet,} from 'react-router-dom'
import Logo from "../style/image/Yoga_logo.png"

const Navi = () => {

  return (
    <> 
    <nav>
    <img className="brand" src={Logo} alt="logo" />
      <ul>
        <li>
            <NavLink style={({isActive}) => ({color: isActive?"orange":"grey"})} to="gmzbks">Main</NavLink>
        </li>
        <li>
            <NavLink style={({isActive}) => ({color: isActive?"orange":"grey"})} to="blog">Blog</NavLink>
        </li>
        <li>
            <NavLink style={({isActive}) => ({color: isActive?"orange":"grey"})} to="gallery">Gallery</NavLink>
        </li>
        <li>
            <NavLink style={({isActive}) => ({color: isActive?"orange":"grey"})} to="news">News</NavLink>
        </li>
        <li>
            <NavLink style={({isActive}) => ({color: isActive?"orange":"grey"})} to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>

    </>
  )
}

export default Navi
