import "./cart-dropdown.styles.scss";
import Button
 from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.contex";
 
const CartDropdown =()=>{
  const { cartItems}= useContext(CartContext);
  
  return(
    <div className="cart-dropdown-container">
    <div className="cart-items">
    {cartItems.length? (
      cartItems.map(item=> <CartItem key={item.id} cartItem={item}/>)
    )
    :(<span className="empty-message">Your cart is empty</span>)
    }
      
    </div>
    <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;