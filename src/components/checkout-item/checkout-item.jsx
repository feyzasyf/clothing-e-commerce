import { useContext } from "react";
import { useDispatch } from "react-redux";
import { CheckOutItemWrapper } from "./checkout-item.styles";
import { removeItemFromCart, clearCartItem, addItemToCart } from "../../store/cart/cartSlice";

const CheckoutItem = ({ checkoutItem}) => {
  const {id, imageUrl, quantity, price, name } = checkoutItem;
  const dispatch= useDispatch();
 


  return (
    <CheckOutItemWrapper>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      
        <span className="name">{name}</span>
        <span className="quantity">
        <div  onClick={()=>{dispatch(removeItemFromCart(checkoutItem))}} className="arrow">
        &#10094;
        </div>    
        
        
          <span className="value">{quantity}</span>
          <div onClick={()=>{dispatch(addItemToCart(checkoutItem))}} className="arrow">
          &#10095;
        </div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button"  onClick={()=>{dispatch(clearCartItem(checkoutItem))}}>&#10005;</div>
      
    </CheckOutItemWrapper>
  );
};

export default CheckoutItem;
