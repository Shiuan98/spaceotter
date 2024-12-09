import React, { Component, useState } from 'react';
import PlaySong from '../assets/img/otterwithheadphone2.png';
import MuteSong from '../assets/img/otterwithheadphone.png';
import {Howl, Howler, HowlOptions} from 'howler';
import ChillSong from '../assets/sound/cook-cute-background-music.mp3';


let sound = new Howl({
  src: ChillSong,
  loop: true,
});

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
  	<div class="sound-btn">
    <button 
      onClick={() => {
        // Toggles play / pause
        if (isPlaying) {
          sound.pause();
          setIsPlaying(false);
        } else {
          sound.play();
          setIsPlaying(true);
        }
        console.log("isPlaying", isPlaying);
      }}
    >
      {!isPlaying ? <div><img src={MuteSong} /></div> : <div><img src={PlaySong} class="otter-music" /></div>}
    </button>
    </div>
  );
};


export default Sound;