import React from 'react'
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import FormatPrice from "../helper/FormatePrice"
import { useCartContext } from '../context/cart_context';


const CartItem = ({id,name,image,color,price,amount}) => {
    const {removeItem,setDecrement,setIncrement}=useCartContext();
    // console.log(price,amount);
   
  return (
    <div className='cart_heading grid grid-five-column'>
       <div className="cart-image--name">
         <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
                <p>color:</p>
                <div className="color-style" style={{backgroundColor:color,color:color}}></div>
            </div>
          </div>
       </div>

       <div className="cart_hide">
          <p>
            <FormatPrice price={price}/>
          </p>
       </div>

       <CartAmountToggle amount={amount} setDecrease={()=>setDecrement(id)} setIncrease={()=>setIncrement(id)}/>

       <div className="cart_hide">
        <p><FormatPrice price={price*amount}/></p>
       </div>

       <div>
         <FaTrash className="remove_icon" onClick={()=>removeItem(id)}/>
       </div>

  
    </div>
  )
}

export default CartItem