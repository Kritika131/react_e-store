import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper>
    <footer>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div className='text'>
                    <h3>Ready to get started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                </div>
            </div>
        </section>

        <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>Kritika</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                    <input type="email" placeholder='your email..' />
                    <input type="submit" value="subscribe" />
                </form>
            </div>

            <div className="footer-social">
                <h3>follow us</h3>
                <div className="footer-social--icons">
                    <div>
                        <a href="#">
                            <FaDiscord className='icons'/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FaInstagram className='icons'/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FaYoutube className='icons'/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-contact">
                <h3>Call Us </h3>
                {/* <a href="tel:9854758956">+91 9745638759</a> */}
                <h3>+91 7867847585</h3>
            </div>
        </div>
        <div className="footer-bottom--section">
           <hr />
           <div className="container temp grid grid-two-column">
             <p>@ {new Date().getFullYear()} Kritika. All Rights Reserved</p>
             <div>
                <p>PRIVACY POLICY </p>
                <p>TERMS & CONDITIONS</p>
             </div>
           </div>
        </div>
     </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`


.contact-short{
    max-width:60vw;
    margin:auto;
    padding:5rem 10rem;
 
    background-color:${({theme})=>theme.colors.bg};
    border-radius:1rem;
    box-shadow:${({theme})=>theme.colors.shadowSupport};
    transform:translateY(-50%);

    .grid div:last-child {
        justify-self:end;
        align-self:center;
    }
} 
.text h3{
    color:black;
}
footer {
    padding:0rem 0 9rem 0;
    margin-top:10rem;
    background-color:${({theme})=>theme.colors.footer_bg};
    

    h3{
        color:${({theme})=>theme.colors.white};
        margin-bottom:1rem;
    }
    p {
        color:${({theme})=>theme.colors.white}; 
    }
    .footer-social--icons{
        display:flex;
        gap:2rem;
        div {
            padding:1rem;
            border-radius:50%;
            border:2px solid ${({theme})=>theme.colors.white};
            .icons{
                color:${({theme})=>theme.colors.white};
                font-size:2.4rem;
                position:relative;
                cursor:pointer;
            }
        }
    }
    
    .temp{
        gap: 35rem;
        width: 100rem;

    }
}
.footer-bottom--section{
    padding-top:9rem;

    hr{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:0.1px;
    }
}

@media (max-width:${({theme})=>theme.media.mobile}){
    .contact-short{
        max-width:80vw;
        text-align:center;
        margin:4.8rem auto;
        transform:translateY(0%);

        .grid div:last-child{
           justify-self:center;
        }
    }
    footer{
       padding:9rem 0 9rem 0;
    }
    .footer-bottom--section{
        padding-top:4.8rem;
    }
} 
`

export default Footer