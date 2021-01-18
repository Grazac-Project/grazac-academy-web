import { NavLink } from "react-router-dom"

const NavItem = props => {

  return(
    <NavLink
      to={props.link}
      exact={props.exact}
      className="nav__link"
    >
      {props.children}
    </NavLink>
  );
}

export default NavItem;
//window.pageYOffset > header.offsetTop