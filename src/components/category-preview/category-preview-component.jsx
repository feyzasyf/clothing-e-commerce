import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewWrapper } from "./category-preview.styles.jsx";


const CategoryPreview =({title, products})=>{
    return(
        <CategoryPreviewWrapper>
            <h2>
                <span className="title">{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
            {
                products.filter((_, index)=> index<4)
                .map((product)=> <ProductCard key={product.id} product={product}/>)
            }

            </div>
        </CategoryPreviewWrapper>
    )

}

export default CategoryPreview;