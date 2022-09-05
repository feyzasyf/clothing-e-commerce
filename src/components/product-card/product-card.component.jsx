
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

import { useContext } from 'react';
import { CartContext } from '../../context/cart.contex';
import { ProductCardWrapper } from './product-card.styles.jsx';

const ProductCard =({product})=>{

const {name,price, imageUrl}  = product;
const {addItemToCart} = useContext(CartContext);
const addProductToCart=()=>{
    console.log("Add to Cart function is being called")
    addItemToCart(product);
}


return(
    <ProductCardWrapper>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className="name">{name}</span>
            <span className="price">{price}</span>            
        </div>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </ProductCardWrapper>
)

}

export default ProductCard;