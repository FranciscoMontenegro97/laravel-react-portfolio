import { useState } from 'react';
import WorldSvg from './Svg';

import './Navbar.scss';

export default function Navbar() {

  const [showTrackerCard, setShowTrackerCard] = useState(false);
  const [showMobileAnchor, setShowMobileAnchor] = useState(false);

  return(
    <div className='nav-container'>
      <div className='drop-down-menu'>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle" onClick={() => setShowMobileAnchor(!showMobileAnchor)}>
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>
      <div className='title-container'>
        <h1>F.G.M</h1>
      </div>
      <div className={`anchor-container ${showMobileAnchor ? 'anchor-mobile-container' : 'my-anchor-hidden'}`}>
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
      <div className={`${showTrackerCard ? 'card-tracker-container' : 'card-hidden'}`}>
        <h1>HelloFolk</h1>
      </div>
    </div>
  )
}