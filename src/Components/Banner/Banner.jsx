import React from 'react';
import {BlueButtonMedium, BlackButton, BlueButtonLarge} from '../Button/Buttons';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
      <BlueButtonMedium >Read Bounty</BlueButtonMedium>
      <h1>ADDA NFT</h1>
      <h3>Get NFT before anyone else</h3>
      <div className='banner-btn-and-text'>
        <div className='banner-btn'>
        <BlueButtonLarge>Start Earning Now</BlueButtonLarge>
        <BlackButton >Buy Tokens</BlackButton>
        </div>
     
        <div className='banner-text'>
          <spna className='meter'>200M</spna>
          <spna className='total-coins'>Total Coins</spna>
        </div>
      </div>
      </div>

      <div className='banner-img'>
        <img src='' alt='panda-img' />
      </div>
      
    </div>
  )
}

export default Banner;