// Import dependencies
import React, { useEffect, useState, useRef, lazy} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import WOW from 'wowjs';
import $ from 'jquery';

// Import class components
import HeroBanner from './components/HeroBanner';
import OtterArt from './components/OtterArt';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import WakuIsland from './components/WakuIsland';
import Sound from './components/Sound';
import ToDo from './components/Todo';

// // Import image
import Otter1 from './assets/img/otter1.png';
import Mars from './assets/img/ottermars.png';
import LoadOtter from './assets/img/otterwithheadphone2.png'
import LoadStar from './assets/img/star.png';
import LoadMars from './assets/img/ottermars.png';
import LoadRocket from './assets/img/otterrocketpng.png';
import LoadStar2 from './assets/img/mobile-stars.png';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

  // Initiate animations
  AOS.init();

  // Define variables & set states
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState('Connect Metamask.');
  const [mintSuccess, setMintSucess] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  // Minting function
  const [mintingNFT, setMintingNFT] = useState(false);
  
  const publicMint = () => {

    blockchain.smartContract.methods
      .adoptOtter()
      .send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.003).toString(), "ether"),
      })
      // Transaction fail / Error
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction failed or rejected. Please try again.");
        setMintingNFT(false);
      })
      // Transaction success / Minting completed
      .then((receipt) => {
        setMintingNFT(false);
        setTimeout(() => dispatch(fetchData(blockchain.account)), 2200);
        setMintSucess(true);
        setFeedback("Mint success. Thank you for giving the otters a new HOME.");
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      setFeedback("");
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  useEffect(() => {
    new WOW.WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true, 
      }).init();
  }, []);

  window.addEventListener('scroll', function(e) {
    if( $(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
      new WOW.WOW({ }).init();
    }
  });

  $(document).ready(function() {
    $(window).scroll(function(event) {
      let scroll = $(this).scrollTop();
      let opacity = 1 - (scroll / 100);
      if (opacity > 0) {
          $('.ottermars').css('opacity', opacity);
      }
    });
  });

  const [faqs, setfaqs] = useState([

    {
      question: 'How big is the Space Otter family?',
      answer: 'A total of 6,666 otters (50% male and 50% female) are currently living in Waku Waku Island.',
      open: false    
    },
    {
      question: 'What are the utilities?',
      answer: 'CC0 will be provided for all Space Otter Club NFT owners. Additionally, holders will receive $SOC token airdrop, claim merchandises, win collaboration whitelists and other NFT prizes.',
      open: false    
    },
    {
      question: 'Mint Details?',
      answer: 'Every wallet is able to mint 3 Space Otter NFTs for 0.003ETH + Gas. NO whitelist, NO team reserve. Everyone get 3 otters: 1 to cover cost, 1 to show, 1 for moonbag.',
      open: false
    },
    {
      question: 'What about the Female Space Otters?',
      answer: 'The Space Otter Club is a "build first, sales later" NFT project. Female Space Otters Collection will launch after the first collection minted out.',
      open: false    
    }

  ]);

  const toggleFAQ = index =>{
    setfaqs(faqs.map((faq, i) =>{
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  };
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $(".counter h1").html(c + "%");
    $(".counter hr").css("width", c + "%");

    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
    }
  },50);


  return (
    <Router>
    <div>
   <Sound/>
      {loadingPage == false ? (
        <div class="loading-page">
          <img src={LoadMars} class="load-mars" alt="Space Otter Club" />
          <img src={LoadStar} class="star hide-mobile" alt="Space Otter Club" />
          <img src={LoadStar2} class="star show-mobile" alt="Space Otter Club" />
          <div class="container text-center">
            <div class="load-center">
              {loading ? (
                <div class="counter">
                  <h1 class="text-white">0</h1>
                  <h2 class="text-white">Loading...</h2>
                </div>
              ) : (
                <div>
                  <img src={LoadOtter} class="load-otter wow animate__bounceIn animated" data-wow-duration="2s" data-wow-delay="1s" alt="Space Otter Club" />
                  <h4 class="text-uppercase text-white wow animate__bounceIn animated" data-wow-duration="2s" data-wow-delay="1s">Space Otter Club</h4>
                  <button class="connect-wallet wow animate__bounceIn animated" data-wow-duration="2s" data-wow-delay="1s" onClick={(e) => {
                    setLoadingPage(true);
                  }}>
                    Enter
                  </button>
                </div>
              )}
            </div>
          </div>
          <img src={LoadRocket} class="load-rocket" alt="Space Otter Club" />
        </div>
      ) : (
        <div>
          <div class="full-page-bg">
            <HeroBanner />
            {/*<Sound/>*/}
            <div class="otter-mint">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <img src={Mars} class="mars" />
                  </div>
                  <div class="col-md-8">
                    <h2 class="ml-3">Otter Adoption Program</h2>
                    <p class="mb-3 ml-3">Adopt otters and give them a HOME.<br></br>Mint 3 Space Otter NFTs for 0.003ETH + Gas.</p>
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <div class="">
                        <button class="connect-metamask text-uppercase mt-3 ml-4" onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}>
                          Connect Wallet
                        </button>
                      </div>
                    ) : (
                      <div class="minting-section ml-3">
                        <h3 class="mt-3"><span>{data.totalSupply}</span> of <span>3333</span> Otters minted.</h3>
                        {mintSuccess == false ? (
                          <div>
                            <button class="connect-metamask text-uppercase mt-3 ml-3" type="submit" disabled={mintingNFT ? 1 : 0} onClick={(e) => {
                              publicMint();
                            }}>
                              Mint Otter
                            </button>
                            <p class="feedback-text mt-3 ml-3">{feedback}</p>
                          </div>
                        ) : (
                          <div>
                            <a href='https://opensea.io/collection/space-otter-club' target="_blank">
                              <button class="connect-metamask text-uppercase mt-3 ml-3">
                                View OpenSea
                              </button>
                            </a>
                            <p class="feedback-text mt-3 ml-3">{feedback}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <OtterArt />
            <ToDo />
            <Roadmap />
            <div class="faq">
              <div class="container">
                <h2 class="text-center">FAQ</h2>
                <div class="faq-list">
                  {faqs.map((faq, i) => (
                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <WakuIsland />
        </div>
      )}     
    </div>
    </Router>
  );
}

export default App;
