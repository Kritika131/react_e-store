import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import { Button } from './Button'

const HeroSection = ({mydata}) => {
    const {name}=mydata;
  return <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">Welcome to </p>
                <h1>{name} </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem dolorum a iure nisi cum placeat! Quasi delectus placeat repudiandae.
                </p>
                <NavLink>
                    <Button>Shop Now</Button>
                </NavLink>
            </div>
            <div className="hero-section-image">
                <figure>
                    <img src="image/hero.jpg" alt="image" className="img-style"/>
                </figure>
            </div>
        </div>
      </div>
  </Wrapper>
}
const Wrapper =styled.section `
${'' /* height:40rem; */}
  padding:12rem 0;
  ${'' /* background:rgba(0,0,0,0.8); */}
  box-shadow:1px 1px 5px rgba(0,0,0,0.1);
  

  img{
    min-width:10rem;
    height:10rem;

  }
  .hero-section-data{
    p{
        margin:2rem 0;
    }
    h1{
        text-transform:capitalize;
        font-weight:bold;
        font-size:2rem;
     }
    .intro-data{
        margin-bottom:0;
        font-size:3.4rem;
    }
  }
  .hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    }
  figure{
    position:relative;
    &::after{
      content: "";
      width: 100%;
      height: 99%;
      background-color: rgb(3 28 2 / 40%);
      position: absolute;
      left: 11%;
      top: -5rem;
      z-index: -1;

       ${'' /* background-color:rgba(81, 56,238, 0.4); */}
    }
  }
  .img-style{
    width:100%;
    height:auto;
    box-shadow: 3px -3px 5px rgba(0,0,0,0.4); 
  }

  @media (max-width:${({theme})=>theme.media.mobile}){

    .grid {
        gap:10rem;
    }
    figure::after{
        content:"";
        width:50%;
        height:100%;
        left:0;
        top:10%;
        background-color:rgba(81, 56, 238,0.4);
    }
  }
`

export default HeroSection;