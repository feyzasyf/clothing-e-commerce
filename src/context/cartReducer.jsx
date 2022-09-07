import { CART_ACTION_TYPES } from "./actions";


export const cartReducer =(state, action)=>{
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS :
            return {
                ...state,
                cartItems: payload.cartItems,
                cartCount: payload.cartCount,
                cartTotal: payload.cartTotal,
            }
      
        case CART_ACTION_TYPES.TOGGLE_ISCARTOPEN:
            return{
                ...state,
                isCartOpen: payload,
            }

        default:
            throw new Error(`unhandled error tyepe ${type} in cartReducer`);
    }




}