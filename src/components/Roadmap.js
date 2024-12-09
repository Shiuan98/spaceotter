import React, { useEffect, useState, useRef, lazy, Component} from "react";
import OtterMars from '../assets/img/ottermars.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";
import OtterPlanet from '../assets/img/otterplanet.png';
import Otters from '../assets/img/otters.png';
import OtterFemale from '../assets/img/otterfemale.png';
import OtterRocket from '../assets/img/otterrocketpng.png';
// import ScrollReveal from 'scrollreveal';
// import $ from 'jquery';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Roadmap() {

    return (
        <div class="our-story timeline">       
          <div class="container-fluid">
          <h2 class="text-white text-uppercase text-center">Roadmap</h2>
          <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                <img src={Otters} class="otter-both" />
      <h3 className="vertical-timeline-element-title">Otter Recruitment</h3>
    <p>
    Professor Otter is recruiting a team of 3,333 male otters to work on their big plan and build a rocket that can send them up to the Otter Space. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"  
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
      <img src={OtterFemale} class="otter-female" />
    <h3 className="vertical-timeline-element-title">Otter Plus One</h3>
    <p>
    The otters are really excited about their plan, they are ready to invite their "plus-one" (Female Space Otters) to participate in this journey.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <img src={OtterRocket} class="Otter-Roc" />
    <h3 className="vertical-timeline-element-title">Rocket Parts</h3>
    <p>
    The otters are ready to assemble their rocket. Rocket parts will be airdropped to each otter at random distribution. The otters have to work together to assemble their rocket. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <img src={OtterPlanet} class="otter-planet" />
    <h3 className="vertical-timeline-element-title">Road Trip to Mars</h3>
    <p>
    The rocket is ready to launch into space, are you joining us or chicken out?
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">What’s on Mars?</h3>
    <p>
    We don’t know what is waiting for us on Mars, but one thing for sure is to get there first.
    </p>
    <img src={OtterMars} class="otter-marss" />
  </VerticalTimelineElement>

</VerticalTimeline>




          </div>
        </div>
    );
  }

export default Roadmap;