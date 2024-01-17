import React from 'react'
import HeroSection from "./components/HeroSection"
import Services from './components/Services';
import Trusted from './components/Trusted';
import Contact from './Contact';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {
  const data={
    name:"E-commerce store",
  };
  return <>
  <HeroSection mydata={data}/>
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  <Contact/>
  </>
};


export default Home