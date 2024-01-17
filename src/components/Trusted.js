import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
         <h3>Trusted by 1000+ Companies</h3>
         <div className="brand-section-slider">
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="brand1" />
          </div>
          <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="brand2" />
          </div>
          <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="brand3" />
          </div>
          <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" alt="brand4" />
          </div>
          <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="brand5" />
          </div>
          <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="brand5" />
          </div>
         </div>
      </div>
      </Wrapper>
    )
}
const Wrapper=styled.section `
padding:9rem 0;
background-color:${({theme})=>theme.colors.bg};

.brand-section{
  ${'' /* padding:12rem 0px 0px 0px;   */}
}
h3{
  text-align:center;
  text-transform:capitalize;
  color:${({theme})=>theme.colors.text};
  font-size:2rem;
  font-weight:bold;   
}
img{
  min-width:9rem;
  height:9rem;
}
.brand-section-slider{
  width:90rem;
  margin:0 auto;
  margin-top:3.2rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
}

@media (max-width:${({theme})=>theme.media.mobile}){
  .brand-section-slider{
    margin-top:3.2rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
    ${'' /* background:red; */}
    width:80rem;
  }
}

;
`

export default Trusted