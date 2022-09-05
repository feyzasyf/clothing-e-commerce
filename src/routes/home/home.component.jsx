import { Outlet } from 'react-router-dom';
import CategoryList from '../../components/categoryList/category-list';

function Home() {

  return (
    <div>
  <CategoryList />
  <Outlet/>
  </div>
    
 
  
  );
}

export default Home;
