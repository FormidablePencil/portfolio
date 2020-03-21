import React from 'react'
import { Link } from "react-router-dom";
import DropDown from './Dropdown';

const NavbarComp = () => {
   return (
      <div className='flex justify-end items-center fixed z-10 w-full'>
         <div className='mx-12 my-4 text-lg flex flex-row'>
            <Link to='#' className='px-3 mx-1'>LinkedIn</Link>
            <LinkBtn linkTo='/' className='px-3 mx-1'>Home</LinkBtn>

            <DropDown
               btnText={'technologies'}
               dropdownItems={['React', 'React Native', 'Gatsby',]}
               initialLink={'/technologies/'}
               links={['2', '3', '4']} />
            <DropDown
               btnText={'projects'}
               dropdownItems={['secondProject', 'thirdProject', 'fourthProject',]}
               initialLink={'/project/'} links={['2', '3', '4']} />

            <LinkBtn linkTo='/resume'>Resume</LinkBtn>
            <LinkBtn linkTo='/bio'>Bio</LinkBtn>
         </div>
      </div>
   )
}

const LinkBtn = (props) =>
   <div>
      <Link className='bg-white rounded-md px-3 mx-1 shadow-lg' to={props.linkTo}>{props.children}</Link>
   </div>

export default NavbarComp
