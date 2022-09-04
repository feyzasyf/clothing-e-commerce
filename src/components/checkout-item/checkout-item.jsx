import { useContext } from "react";
import { CartContext } from "../../context/cart.contex";
import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem}) => {
  const {id, imageUrl, quantity, price, name } = checkoutItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart} = useContext(CartContext);


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      
        <span className="name">{name}</span>
        <span className="quantity">
        <div  onClick={()=>{removeItemFromCart(id)}} className="arrow">
        &#10094;
        </div>    
        
        
          <span className="value">{quantity}</span>
          <div onClick={()=>{addItemToCart(checkoutItem)}} className="arrow">
          &#10095;
        </div>
        </span>
        <span className="price">{price}</span>
        <Button className="remove-button" onClick={()=>{clearItemFromCart(checkoutItem)}}>&#10005;</Button>
      
    </div>
  );
};

export default CheckoutItem;
