import React from 'react'
import {FaMinus,FaPlus} from "react-icons/fa"
import styled from 'styled-components'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <Wrapper>
    {/* <div className="cart-button"> */}
        <div className="amount-toggle">
            <button onClick={()=>setDecrease()}><FaMinus/></button>
            <div className="amount-style">{amount}</div>
            <button onClick={()=>setIncrease()}><FaPlus/></button>
        </div>
    {/* </div> */}
    </Wrapper>
  )
};

const Wrapper =styled.section`
.amount-toggle {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`

export default CartAmountToggle;