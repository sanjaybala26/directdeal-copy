// src/Home1.js
import React, { useEffect } from 'react';
import './Home1.css';
import logo from './logo123.png';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import LottieAnimation from './LottieAnimation';

const Home1 = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener('click', smoothScroll));

    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    const makeNavbarSticky = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    const highlightActiveSection = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.pageYOffset >= sectionTop - 50 &&
          window.pageYOffset < sectionTop + sectionHeight - 50
        ) {
          const id = section.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.onscroll = () => {
      makeNavbarSticky();
      highlightActiveSection();
    };

    let opacity = 0;
    const fadeIn = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.1;
        navbar.style.opacity = opacity;
      } else {
        clearInterval(fadeIn);
      }
    }, 50);

    return () => {
      window.onscroll = null;
      anchors.forEach((anchor) => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);

  const navigate = useNavigate();

  const goSell = () => {
    navigate('/sell');
  };

  const goBuy = () => {
    navigate('/buy');
  };

  const goMyProducts = () => {
    navigate('/my-products');
  };
  
  const goChat = () => {
    navigate('/chat');
  };
  

  const goToProductDetail = (id) => {
    navigate(`/prod/${id}`);
  };

  return (
    <div className="asas">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Frisk Scripts Logo" />
        </div>
        <ul className="nav-links">
          <div className="nav-links-left">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Buy</a></li>
          </div>
          <div className="nav-links-right">
            <li><a href="#services">Sell</a></li>
            <li><a href="#contact">My Products</a></li>
            <li><a href="#contact" onClick={goChat}>Chat</a></li>

          </div>
        </ul>
      </nav>
      <Profile />
      <section id="home" className="home">
        <div className="a">
        <div className='lottie1'>
          <dotlottie-player src="https://lottie.host/7ca247da-166d-4dd2-97ca-ca6910a00385/FiXPfpJ7Kv.json" 
            background="transparent"
            speed="1" 
            loop 
            autoplay>
          </dotlottie-player>
        </div>
        </div>
       
      </section>
      <section id="about">
        <div className="buy-box">
          <p>🅑🅤🅨</p>
          <a onClick={goBuy}>Click Here To Buy a Product</a>
        </div>
      </section>
      <section id="services">
        <div className="sell-box">
          <div className="lottie-container">
            <LottieAnimation />
          </div>
          <a onClick={goSell}>Click Here To Sell The Product</a>
        </div>
      </section>
      <section id="contact">
        <div className="myproduct">
          <button onClick={goMyProducts}>My Products</button>
        </div>
      </section>
    </div>
  );
};

export default Home1;
