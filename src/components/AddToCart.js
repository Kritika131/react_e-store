import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({product}) => {
  // console.log(product)
    const {id,colors,stock} = product;
    const [color,setColor] = useState(colors[0]);
    // console.log(colors);

    const {addToCart}=useCartContext();
    
    const [amount,setAmount] = useState(1);
    const setDecrease=()=>{
        amount>1 ? setAmount(amount-1):setAmount(1);
    };
    const setIncrease=()=>{
        amount<stock?setAmount(amount+1):setAmount(stock);
    };
  return (
    <Wrapper>
       <div className="colors">
        <p>
            Colors:{
                colors.map((col,idx)=>{
                   return <button key={idx} style={{backgroundColor:col}} className={color===col ?"btnStyle active":"btnStyle"}
                   onClick={()=>setColor(col)}>
                   {color===col ? <FaCheck className="checkStyle"/>:null}  
                   {/* error may  be */}
                   </button>
                })
            }
        </p>
       </div>

       <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
       <NavLink to="/cart" onClick={()=>addToCart(id,color,amount,product)}>
        <Button className="btn">Add to Cart</Button>
       </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  
  `
  ;

export default AddToCart