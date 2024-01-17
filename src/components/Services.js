import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from "react-icons/tb"
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri"

const Services = () => {
  return (
  <Wrapper>
     <div className="container">
        <div className="grid grid-three-column">
            <div className="services-1">
                <div>
                <TbTruckDelivery className="icon"/>
                <h3>Super Fast and Free Delivery</h3>
                </div>
            </div>
            <div className="services-2">
                <div className="services-column-2">
                    <div>
                        <MdSecurity className="icon"/>
                        <h3>Non-contact Shipping</h3>
                    </div>
                </div>
                <div className="services-column-2">
                <div>
                    <GiReceiveMoney className="icon"/>
                    <h3>Money-back Guaranteed</h3> 
                    </div>
                </div>
            </div>
            <div className="services-3">
             <div>
               <RiSecurePaymentLine className="icon"/>
               <h3>Super Secure Payment System</h3>
            </div>
        </div>
     </div>
     </div>
  </Wrapper>
  

  )
}

const Wrapper = styled.section `
padding:9rem 0;

.grid {
    gap:4.8rem;
}
.services-1,
.services-2,
.services-3 {
    width:auto;
    height:30rem;
    display:flex;
    flex-direction:column;
    justify-content:center;

    align-content:center;
    background:${({theme})=>theme.colors.bg};
    text-align:center;
    border-radius:2rem;
    box-shadow:rgba(0, 0, 0,0.05) 0px 1px 2px 0px;
    
  
    
}
.services-1,.services-3{
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
       
        gap:2.5rem;
        
      
    }
    
}
.services-2{
    gap:4rem;
    
    background-color:transparent;
    box-shadow:none;

    .services-column-2{
      display:flex;
      flex-direction:row;
      flex:1;
      justify-content:center;
      background:${({theme})=>theme.colors.bg};
      align-items:center;
      box-shadow:rgba(0, 0, 0,0.05) 0px 1px 2px 0px;
      border-radius:2rem;
      ${'' /* cursor:pointer;
      background: #0a0a0a0d;
      padding:2rem; */}
     
 
      div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:2rem;
        
      }
    }
}
 
h3{
    ${'' /* margin-top:1.4rem; */}
    font-size:1.8rem;
}
.icon{
    width:7rem;
    height:7rem;
    padding:1.5rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;
}

@media (max-width:${({theme})=>theme.media.mobile}){
    .grid-three-column{
        grid-template-columns:1fr;
    }
    .services-2{
        .services-column-2{
            display:flex;
            flex-direction:column;
            
        
            div{
               display: flex;
               flex-direction: column;
               padding:1rem;
            }
        }
        
      
    }
   
    h3{
       font-size:2.2rem;
       font-weight:bold;
    }
   
};
`

export default Services