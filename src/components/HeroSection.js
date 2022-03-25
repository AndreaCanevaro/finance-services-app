import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import {Table} from './sections/Table';
import {Latest} from './sections/Latest';
import {About} from './sections/About';
import {Performance} from './sections/Performance';
import {Closedtrades} from './sections/Closedtrades';

import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h4>Welcome to Rivkin ASX Growth Portfolio</h4>
      <h5>ASX Group is a 14-stock portfolio that combine...</h5>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
        <div class='footer-link-items'>
        <Link to='/'><h4>Portfolio</h4></Link>
            
</div>

      <div class='footer-link-items'>
            <Link to='/'><h4>Latest Updates</h4></Link>
      </div>


      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <Link><h4>About</h4></Link>
            </div>

        
          <div class='footer-link-items'>
            <Link to='/'><h4>Performance</h4></Link>
            </div>

          <div class='footer-link-items'>
            <Link to='/'><h4>Closed Trades</h4></Link>
            </div>

        </div>
      
</div>

</div>      

</div>
  );
}

export default HeroSection;
