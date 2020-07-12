import React from 'react'
import jsLogo from '../assets/techLogo/hiclipart.com.png'
import htmlLogo from '../assets/techLogo/htmlLogo.png'
import cssLogo from '../assets/techLogo/cssLogo.png'
import logo1 from '../assets/techLogo/logo(1).svg';
import logo2 from '../assets/techLogo/logo.svg';
import logo3 from '../assets/techLogo/logo_raw.svg';
import logo4 from '../assets/techLogo/paper-logo.png';
import logo6 from '../assets/techLogo/reactNativeLogo.png';
import logo7 from '../assets/techLogo/svg+xml;base64,PHN2ZyBjbGFzcz0idy0xMCBoLTEwIGJsb2NrIG1kOmhpZGRlbiIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgICAgICAgICAgICA8dGl0bGU+VGFpbHdpbmQgQ1NTPC90aXRsZT4KICAgICAgICAgICAgICAgICAgPHBhdGggZD0iT.svg';
import wordPressLogo from '../assets/techLogo/wordpressLogo.png';
import gatsbyLogo from '../assets/techLogo/Gatsby_Monogram.svg';
import github from '../assets/techLogo/github.png';
import typescript from '../assets/techLogo/typescript.svg';
import sassLogo from '../assets/techLogo/sassLogo.png';

function TechnologiesShowcase() {
  return (
    <div className='row aligning techSection'>
      <ul className='listOfTech leftTech'>
        <li><img src={github} alt='github' /></li>
        <li><img src={jsLogo} alt='js' /></li>
        <li><img src={htmlLogo} alt='html' /></li>
        <li><img src={cssLogo} alt='css' /></li>
        <li><img src={logo1} alt='graph-ql' /></li>
        <li><img src={logo2} alt='bit' /></li>
        <li><img src={logo3} alt='material-ui' /></li>
      </ul>

      <ul className='midTech'>
        <li>
          <p className='firstLeter'>M</p><p>ongo</p>
        </li>
        <li>
          <p className='firstLeter'>E</p><p>press</p>
        </li>
        <li>
          <p className='firstLeter'>R</p><p>eact</p>
        </li>
        <li>
          <p className='firstLeter'>N</p><p>ode</p>
        </li>
      </ul>

      <ul className='listOfTech rightTech'>
        <li><img src={gatsbyLogo} alt='gatsby' /></li>
        <li><img src={typescript} alt='typescript' /></li>
        <li><img src={logo4} alt='react-native-papper' /></li>
        <li><img src={sassLogo} alt='sassLogo' /></li>
        <li><img src={logo6} alt='react-native' /></li>
        <li><img src={logo7} alt='tailwind' /></li>
        <li><img src={wordPressLogo} alt='wordPress' /></li>
      </ul>
    </div>
  )
}

export default TechnologiesShowcase
