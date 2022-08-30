import './product-card.styles.scss'
import Button from "../button/button.component"

import { useContext } from 'react';
import { CartContext } from '../../context/cart.contex';

const ProductCard =({product})=>{

const {name,price, imageUrl}  = product;
const {addItemToCart} = useContext(CartContext);
const addProductToCart=()=>{
    console.log("Add to Cart function is being called")
    addItemToCart(product);
}


return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className="name">{name}</span>
            <span className="price">{price}</span>            
        </div>
        <Button onClick={addProductToCart} buttonType="inverted">Add to cart</Button>
    </div>
)

}

export default ProductCard;