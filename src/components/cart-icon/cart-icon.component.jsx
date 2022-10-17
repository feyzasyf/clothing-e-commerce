import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { toggleIsCartOpen } from '../../store/cart/cartSlice';
import {CartIconWrapper} from './cart-icon.styles.jsx';

const CartIcon=()=>{
    const dispatch= useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    
  


    
    return(
        <CartIconWrapper>
            <ShoppingIcon 
            className='shopping-icon'
                onClick={()=>dispatch(toggleIsCartOpen(!isCartOpen))}
            />
            <span className='item-count'>{cartCount}</span>
        </CartIconWrapper>
    )

}

export default CartIcon;