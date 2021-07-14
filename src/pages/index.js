import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree } from '../components/infoSection/Data';
import Additions from '../components/Additions';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection data={homeObjOne} />
      <Additions />
      <InfoSection data={homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
