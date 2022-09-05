
import { CartItemWrapper } from './cart-item.styles.jsx';


const CartItem=({cartItem})=>{
    const {name,imageUrl, price, quantity}= cartItem;
  
    return(
        <CartItemWrapper>
        <img src={imageUrl} alt={`${name}`} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
            
        </CartItemWrapper>
    )
}

export default CartItem;