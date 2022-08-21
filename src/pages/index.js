import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { aboutContent, contactContent } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import PortFolio from "../components/Portfolio/Index";
import Sidebar from "../components/Sidebar";

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
      <InfoSection {...aboutContent} />
      <PortFolio />
      <InfoSection {...contactContent} />
      <Footer />
    </>
  );
};

export default Home;
