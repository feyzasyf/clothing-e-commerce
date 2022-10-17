import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    cartItems: [],    
    isCartOpen: false,
    
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        
        toggleIsCartOpen : (state, action)=>{state.isCartOpen = action.payload;
        },
        addItemToCart :(state, action)=>{
            const existingCartItem= state.cartItems.find(
                cartItem=> cartItem.id === action.payload.id
                );
         
            if(existingCartItem){
                const newList = state.cartItems.map((cartItem)=> 
                cartItem.id ===action.payload.id
                ? {...cartItem, quantity: cartItem.quantity+1}
                : cartItem
                
                );
               state.cartItems = newList;
            } else{
            state.cartItems.push({...action.payload, quantity: 1});
            }

        },

        clearCartItem:(state, action)=>{
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
        },
        removeItemFromCart: (state,action)=>{
            const existingCartItem=state.cartItems.find(
                cartItem=> cartItem.id === action.payload.id
                );
                
            if(existingCartItem.quantity ===1){
               state.cartItems= state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            }
           else{ 
            state.cartItems = state.cartItems.map((cartItem)=>{
              return cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity-1}
              : cartItem;
              
            })  }  
           

        }
    }
})

export const {toggleIsCartOpen, addItemToCart, clearCartItem, removeItemFromCart}= cartSlice.actions;
export default cartSlice.reducer;