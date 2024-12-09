import React, { Component } from 'react';
import OtterMars from '../assets/img/otter web.png';
import Star from '../assets/img/star.png';
import Twitter from '../assets/img/twitter-icon.png';
import Instagram from '../assets/img/instagram-icon.png';
import Opensea from '../assets/img/opensea-icon.png';
import Discord from '../assets/img/discord-icon.png';
import Telegram from '../assets/img/telegram-icon.png';

class HeroBanner extends Component {
  
  render() {
    return (
        <div class="hero-banner">
          <img src={Star} class="star" />
          <div class="otter-club"> 
        <div class="container">
        <div class="middle-place">
        <img src={OtterMars} class="ottermars" />
        <h1 class="text-uppercase mb-0">Space Otter Club</h1>
        <div class="icon-part mt-0">
          <a href="https://twitter.com/SpaceOtterClub" target="_blank">
          <img src={Twitter} class="mr-4"/>
          </a>
          <a href="https://discord.gg/M2TZMwFSqk" target="_blank">
          <img src={Discord} class="mr-4"/>
          </a>
          <a href="https://t.me/spaceotterclub" target="_blank">
          <img src={Telegram} class="mr-4"/>
          </a>
          <a href="https://opensea.io/collection/space-otter-club" target="_blank">
          <img src={Opensea}/>
          </a>
          {/* <a href="https://www.instagram.com/spaceotter.eth" target="_blank">
          <img src={Instagram} class="mr-4"/>
          </a> */}
        </div>
        <div class="col-md-12 text-center">
        <div class="curve-border">
        <p>
          Professor Otter was tanning its fur on the Waku Waku Island Beach, he saw a space rocket launched up into the sky.
          <br></br><br></br>
          He started thinking:
          <br></br>
          “What is it like to be living in the Otter Space?”
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default HeroBanner;