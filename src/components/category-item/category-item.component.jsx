import {useNavigate} from "react-router-dom";
import { CategoryItemWrapper, Body, BackgroundImage } from './category-item.styles.jsx';

const CategoryItem= ({category}) => {
const {imageUrl, title, route} = category;
const navigate= useNavigate();

const onNavigateHandler =()=>navigate(route);

return(
    <CategoryItemWrapper onClick={onNavigateHandler}>
     <BackgroundImage
     imageUrl={imageUrl}
    />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemWrapper>
)


}
export default CategoryItem;