import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import  {NavigationContainer, NavLink, NavLinks, LogoContainer} from  "./navigation.styles.jsx";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.contex";

const Navigation = () => {
  // const { setCurrentUser} = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
const {isCartOpen} =useContext(CartContext)
  // const signOutHandler = async()=>{

  //   await signOutUser();
  //     // setCurrentUser(null);

  // }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
