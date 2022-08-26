import { useEffect } from "react";
import { createContext, useState } from "react";
import ProductData from "../shop-data.json";


export const ProductsContext = createContext({
    products:[],
});


export const ProductsProvider = ({children})=>{

    const [products, setProducts] = useState(ProductData);
    const value = {products}

    // useEffect(()=>{

    // },[products])

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}