import React from 'react'
import Flip from 'react-reveal/Flip'
import DeviceIcons from '../../icons/device icons/Device-icons'
import SassPortfolioLinks from './Sass-portfolio-links'



const SassPortfolio =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Sass Portfolio</h1>
        <img src='./gifs/Sass-portfolio-gif.gif' alt='sass portfolio project' className='gif'></img>
        <p className= 'project-description'>
        <img className='techStack-icon' src='/Sass-icon.png' alt='sass icon' />
        <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <DeviceIcons />
            This is a project built using Sass and HTML5.
            This project is a basic portfolio site. You can view the about me section,
            work section and contact section. The site is fully responsive for all devices. 
        </p>
        <Flip top>
            <SassPortfolioLinks />
        </Flip>
    </div>

export default SassPortfolio