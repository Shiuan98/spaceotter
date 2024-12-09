import React, { Component } from 'react';
import WOW from 'wowjs';

import Otter1 from '../assets/img/otter1.png';
import Otter2 from '../assets/img/otter2.png';
import Otter3 from '../assets/img/otter3.png';
import Otter4 from '../assets/img/otter4.png';
import Otter5 from '../assets/img/otter5.png';
import Otter6 from '../assets/img/otter6.png';
import Otter7 from '../assets/img/otter7.png';
import Otter8 from '../assets/img/otter8.png';
import Otter9 from '../assets/img/otter9.png';
import Otter10 from '../assets/img/otter10.png';
import Otter11 from '../assets/img/otter11.png';
import Otter12 from '../assets/img/otter12.png';
import Star from '../assets/img/star.png';

class OtterArt extends Component {
  
  render() {
    return (
        <div class="otter-art">
          <img src={Star} class="star2" />
        <div class="container">
        <h2 class="text-uppercase text-center">Otter's Family</h2>
        <div class="gallery">

        <div class="gallery-art">
        <img src={Otter1} />
        </div>

        <div class="gallery-art">
        <img src={Otter2} />
        </div>

        <div class="gallery-art">
        <img src={Otter3} />
        </div>

        <div class="gallery-art">
        <img src={Otter4} />
        </div>

        <div class="gallery-art">
        <img src={Otter5} />
        </div>

        <div class="gallery-art">
        <img src={Otter6} />
        </div>

        <div class="gallery-art">
        <img src={Otter7} />
        </div>

        <div class="gallery-art">
        <img src={Otter8} />
        </div>

        <div class="gallery-art">
        <img src={Otter9} />
        </div>

        <div class="gallery-art">
        <img src={Otter10} />
        </div>

        <div class="gallery-art">
        <img src={Otter11} />
        </div>

        <div class="gallery-art">
        <img src={Otter12} />
        </div>

        </div>
        </div>
        </div>
    );
  }
}

export default OtterArt;