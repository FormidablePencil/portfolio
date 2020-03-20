import React from 'react'
import { Link } from "react-router-dom";

const NavbarComp = () => {
   return (
      <div className='flex h-12 w-3/4 justify-end items-center z-10 absolute self-center'>
         <Link to='#' className='px-3 mx-1'>LinkedIn</Link>
         <LinkBtn linkTo=''>Resume</LinkBtn>
         <LinkBtn linkTo='bio'>Bio</LinkBtn>
      </div>
   )
}

const LinkBtn = (props) =>
   <Link className='bg-white rounded-md px-3 mx-1' to={props.linkTo}>{props.children}</Link>

export default NavbarComp
