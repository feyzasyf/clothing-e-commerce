import {CheckoutWrapper} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from '../../context/cart.contex';
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useEffect } from "react";
import { useState } from "react";

const Checkout =()=>{
    const {cartItems, cartTotal} = useContext(CartContext);
 

 
  

 

return(
    <CheckoutWrapper>
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
        <span>description</span>
        </div>
        <div className="header-block">
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
    </div>
   
    { cartItems.length? (cartItems.map((cartItem)=>{
        return <CheckoutItem  key={cartItem.id} checkoutItem ={cartItem} />

    }))
    : (<span>Cart is empty</span>)


    }
    
    <span className="total">TOTAL : ${cartTotal}</span>
    </CheckoutWrapper>
    );
   
   



};

export default Checkout;