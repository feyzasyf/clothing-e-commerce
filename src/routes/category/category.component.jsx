import {CategoryWrapper, Title} from "./category.styles.jsx";
import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";


const Category =()=>{
 const {category} = useParams();
 const {categoriesMap} = useContext(CategoriesContext);
const [products, setProducts] = useState(categoriesMap[category]);

useEffect(()=>{
    setProducts(categoriesMap[category])
},[category, categoriesMap])

return(
    <Fragment>
    <Title>{Category.toUpperCase()}</Title>
    <CategoryWrapper>
     {  products && products.map((product)=> <ProductCard key={product.id} product={product} />)
     }
    </CategoryWrapper>
    </Fragment>
)

}
export default Category;