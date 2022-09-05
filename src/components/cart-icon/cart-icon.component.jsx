import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.contex';
import {CartIconWrapper} from './cart-icon.styles.jsx';

const CartIcon=()=>{

    const {isCartOpen, setIsCartOpen, cartCount} =useContext(CartContext)
    
    const toggleIsCartOpen =()=>{setIsCartOpen(!isCartOpen)}



    
    return(
        <CartIconWrapper>
            <ShoppingIcon 
            className='shopping-icon'
                onClick={toggleIsCartOpen}
            />
            <span className='item-count'>{cartCount}</span>
        </CartIconWrapper>
    )

}

export default CartIcon;