import { useEffect } from "react";
import { createContext, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap:{},
});


export const CategoriesProvider = ({children})=>{

    const [categoriesMap, setCategoriesMap] = useState({});

    // if we want to run an async event in useEffect, 
    // we need to wrap it in an async fn
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
          const categoryMap= await  getCategoriesAndDocuments();
          console.log(categoryMap);
          setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
       
    },[])

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = {categoriesMap}

    // useEffect(()=>{

    // },[products])

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}