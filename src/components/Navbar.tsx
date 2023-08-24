import { useState } from 'react';
import WorldSvg from './Svg';

import './Navbar.scss';
import CardComponent from './Card';

export default function Navbar() {

  const [showTrackerCard, setShowTrackerCard] = useState(false);
  const [showMobileAnchor, setShowMobileAnchor] = useState(false);

  return(
    <div className='nav-container'>
      <div className='drop-down-menu'>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle" onClick={() => setShowMobileAnchor(!showMobileAnchor)}>
          <div className="bars bar--top"></div>
          <div className="bars bar--middle"></div>
          <div className="bars bar--bottom"></div>
        </label>
      </div>
      <div className='title-container'>
        <h1>F.G.M</h1>
      </div>
      <div className={`anchor-mobile-off ${showMobileAnchor ? 'anchor-mobile-container' : 'my-anchor-hidden'}`}>
        <CardComponent customClassName='card-anchor-container'>
          <div className='card-anchor-mobile-container'>
            <a href='#' className='anchor-mobile-decoration'>
              SOBRE MI
            </a>
            <a href='#' className='anchor-mobile-decoration'>
              PORTAFOLIO
            </a>
            <a href='#' className='anchor-mobile-decoration'>
              CONTACTO
            </a>
          </div>
        </CardComponent>
      </div>
      <div className="anchor-container">
        <a href='#' className='animated-link'>
          SOBRE MI
          <span className='animation'></span>
        </a>
        <a href='#' className='animated-link'>
          PORTAFOLIO
          <span className='animation'></span>
        </a>
        <a href='#' className='animated-link'>
          CONTACTO
          <span className='animation'></span>
        </a>
      </div>
      <div className='svg-container' onClick={() => setShowTrackerCard(!showTrackerCard)}>
        <WorldSvg />
      </div>
      <div className={`${showTrackerCard ? 'card-tracker-container' : 'card-tracker-hidden'}`}>  
        <CardComponent customClassName='card-tracker'>
          <p>Hello Folks</p>
        </CardComponent>
      </div>
    </div>
  )
}