
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.contex";
import { useNavigate } from "react-router-dom";
import { CartDropdownWrapper } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToChekoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <CartDropdownWrapper>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button onClick={goToChekoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;
