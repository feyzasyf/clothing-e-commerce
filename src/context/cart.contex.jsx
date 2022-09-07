import { useReducer } from "react";
import { createContext} from "react";
import { CART_ACTION_TYPES } from "./actions";
import { cartReducer } from "./cartReducer";
import { createAction } from "../utils/reducer/reducer.utils";



export const CartContext = createContext({  
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart:()=>{},
    cartCount: 0,
    setCartCount: ()=>{},
    clearItemFromCart: ()=>{},
    cartTotal:0,
})


const initialState= {
    cartItems: [],
    cartCount: 0,
    isCartOpen: false,
    cartTotal:0,
}
 
const addCartItem=(cartItems, productToAdd)=>{
    const existingCartItem=cartItems.find(
        cartItem=> cartItem.id === productToAdd.id
        );

    if(existingCartItem){
        return cartItems.map((cartItem)=> 
        cartItem.id ===productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity+1}
        : cartItem
        
        );
    }
  

    return [...cartItems, {...productToAdd, quantity:1}];
  

};

const removeCartItem=(cartItems, itemToBeRemoved)=>{
    const existingCartItem=cartItems.find(
        cartItem=> cartItem.id === itemToBeRemoved.id
        );
        
    if(existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== itemToBeRemoved.id);
    };
   return cartItems.map((cartItem)=>{
      return cartItem.id === itemToBeRemoved.id ? {...cartItem, quantity: cartItem.quantity-1}
      : cartItem;
      
    })    
   
};

const clearCartItem =(cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartProvider=({children})=>{


    const [state, dispatch] = useReducer(cartReducer, initialState)
    const {cartItems, cartCount, isCartOpen, cartTotal} = state;
   
    
 
    const updateCartItemsReducer =(newCartItems)=>{
        const newCartCount = newCartItems.reduce((total, cartItem )=>total + cartItem.quantity,0);

        const newCartTotal = newCartItems.reduce((acc, cartItem)=>{
                  return( acc+ (cartItem.price * cartItem.quantity));
                }, 0);

                const payload={
                    cartItems: newCartItems,
                    cartTotal: newCartTotal,
                    cartCount: newCartCount,
                }
             
                dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
    }
   
    const addItemToCart=(product)=>{
        
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
       
     
       
    };

    const removeItemFromCart=(cartItemToRemove)=>{
          const newCartItems=  removeCartItem(cartItems, cartItemToRemove);
          updateCartItemsReducer(newCartItems);
       
          


    }

    const clearItemFromCart =(cartItemToClear)=>{
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
      
    }

    const setIsCartOpen=(bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_ISCARTOPEN, bool));
      
    }


        
    const value= {isCartOpen, setIsCartOpen, clearItemFromCart, addItemToCart, removeItemFromCart, cartItems, cartTotal, cartCount};

    return <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>
}