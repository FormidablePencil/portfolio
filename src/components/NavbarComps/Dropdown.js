import React, { useState } from 'react'
import styled from 'styled-components';

const DropDown = ({ dropdownItems, links, initialLink, btnText }) => {
   const [isShown, setIsShown] = useState()

   return (
      <div className='inline flex-col flex'
         onMouseEnter={() => setIsShown(true)}
         onMouseLeave={() => setIsShown(false)}
      >
         <span className='bg-white rounded-md px-3 mx-1 shadow-lg'>{btnText}</span>
         {isShown ?
            <DropdownItem className='absolute'>
               <div className="h-2 bg-transparent"></div>
               <div className='bg-white shadow-sm rounded-sm px-3 mx-3 p-1 flex flex-col'>
                  {dropdownItems.map((item, index) =>
                     <a key={index} href={initialLink + links[index]} link={links[index]}>{item}</a>
                  )}
               </div>
            </DropdownItem>
            : null}
      </div >
   )
}

export default DropDown

const DropdownItem = styled.div`
   top: 40px;
`
