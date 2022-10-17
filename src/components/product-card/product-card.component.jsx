
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import { ProductCardWrapper } from './product-card.styles.jsx';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cartSlice";

const ProductCard =({product})=>{

const {name,price, imageUrl}  = product;
const dispatch = useDispatch();

const addProductToCart=()=>{
    console.log("Add to Cart function is being called")
    dispatch(addItemToCart(product));
}


return(
    <ProductCardWrapper>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className="name">{name}</span>
            <span className="price">${price}</span>            
        </div>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </ProductCardWrapper>
)

}

export default ProductCard;