import { createContext, useEffect, useState } from "react";



export const CartContext = createContext({  
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart:()=>{},
    cartCount: 0,
    setCartCount: ()=>{},
    clearItemFromCart: ()=>{},
})



 
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

const removeCartItem=(cartItems, id)=>{
    const existingCartItem=cartItems.find(
        cartItem=> cartItem.id === id
        );
        
    if(existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== id);
    };
   return cartItems.map((cartItem)=>{
      return cartItem.id === id ? {...cartItem, quantity: cartItem.quantity-1}
      : cartItem;
      
    })    
   
};

const clearCartItem =(cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartProvider=({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] =useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem )=>total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])
   
    const addItemToCart=(product)=>{
        
        let newCartItemsList = addCartItem(cartItems, product);
        setCartItems(newCartItemsList);  
       
    };

    const removeItemFromCart=(id)=>{
          let updatedCartItems=  removeCartItem(cartItems, id);
          setCartItems(updatedCartItems);     


    }

    const clearItemFromCart =(cartItemToClear)=>{
        const newList = clearCartItem(cartItems, cartItemToClear);
        setCartItems(newList);
    }

    // const removeItemFromCart =(id)=>{
    //     let updatedCartItemsList = cartItems.filter((cartItem)=> cartItem.id !== id);
    //     setCartItems(updatedCartItemsList);
    // }

    // const toggleQuantity =(id,type)=>{

    //     let updatedCartItems= cartItems.map((cartItem)=>{
    //          if(cartItem.id === id){
    //              if(type === "dec"){
    //                  return {...cartItem, quantity: cartItem.quantity-1}
    //              }
    //              if(type ==="inc"){
    //                  return {...cartItem, quantity: cartItem.quantity+1}
    //              }
    //          }
    //          return cartItem;
    //      })
    //      .filter((cartItem)=> cartItem.quantity!==0);

    //      setCartItems(updatedCartItems);      
        
    //  }
        
    const value= {isCartOpen, setIsCartOpen, clearItemFromCart, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>
}