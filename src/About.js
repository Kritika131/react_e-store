// import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './context/productcontext'


const About = () => {

  // const {myName} = useContext(AppContext);
  const {myName} = useProductContext();
  const data={
    name:"Your Digital Store",
  }
  return (
    <>
    {myName}
    <HeroSection mydata={data}/>
    </>
  )
}

export default About;