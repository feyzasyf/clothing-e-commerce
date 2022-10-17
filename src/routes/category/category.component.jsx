import {CategoryWrapper, Title} from "./category.styles.jsx";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap} from "../../store/categories/categories.selector.js";
import { useSelector } from "react-redux";


const Category =()=>{
 const {category} = useParams();
 const categoriesMap = useSelector(selectCategoriesMap);

const [products, setProducts] = useState(categoriesMap[category]);

useEffect(()=>{
    setProducts(categoriesMap[category])
},[category, categoriesMap])

return(
    <Fragment>
    <Title>{category.toUpperCase()}</Title>
    <CategoryWrapper>
     {  products && products.map((product)=> <ProductCard key={product.id} product={product} />)
     }
    </CategoryWrapper>
    </Fragment>
)

}
export default Category;