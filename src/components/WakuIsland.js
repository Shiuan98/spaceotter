import React, { Component } from 'react';
import WakuIslands from '../assets/img/wakuwaku_island.png';


class WakuIsland extends Component {
  
  render() {
    return (
        <div class="waku-island">
   		<img src={WakuIslands} class="wakuwaku-island" />
        </div>
    );
  }
}

export default WakuIsland;