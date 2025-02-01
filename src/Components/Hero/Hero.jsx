import  { useState, useEffect } from 'react';
 // Make sure to use your own images here
import im2 from './images/im2.jpg';
import im3 from './images/im3.jpg';
import im4 from './images/im4.jpg';
import im5 from './images/im5.jpg';
import './Hero.css';

function Hero() {
  // Array of background images
  const images = [ im2, im3, im4, im5];
  
  // State for the current background image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="background-slider"
      style={{
        height: '100vh',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 3s ease-in-out', // Smooth transition effect
      }}
      role="img"
      aria-label="Slideshow of beautiful background images"
    >
      <div className="content">
        <h1>Automatic Hero Background Slider</h1>
        <p>Enjoy the changing backgrounds every 5 seconds!</p>
      </div>
    </div>
  );
}

export default Hero;
