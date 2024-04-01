import Navbar from '../components/Navbar';
import img from '../Assets/Home/project_home.jpg';
import Shape from '../Assets/Aboutus/titleabout_us.png';
import styles from '../styles.css';
import React from 'react';

function AboutPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'top',
        padding: '0 40px',
        color: 'Red',
      }}
      id='AboutSection'
    >
      <div>
       
        <h2 style={{ color: 'black' }}>
          Welcome to our Eye Lens Shop, where clarity meets style! At Eye Lens
          Shop, we understand the importance of clear vision and the impact it
          has on your daily life. We take pride in offering a diverse range of
          high-quality lenses that not only enhance your vision but also
          complement your unique style. Whether you're looking for daily,
          monthly, or colored lenses, our curated selection ensures comfort,
          durability, and optimal visual performance. Our commitment goes
          beyond providing top-notch products – we strive to create a seamless
          and enjoyable shopping experience for all our customers. Explore our
          collection and discover a new perspective with Eye Lens Shop.
        </h2><br /><br/>
        <h3 style={{justifyContent:"right"}}> THANKS FOR THE VISIT!</h3>
      </div>
      
    </div>
  );
}

function About() {
  return (
    <>
      <Navbar />
      <AboutPage /> {/* Render the AboutPage component */}
    </>
  );
}

export default About;
