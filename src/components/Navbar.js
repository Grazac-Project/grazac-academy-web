import { useEffect, useState, useRef } from "react";
import { cn } from "../utils";
import NavItem from "./NavItem";
import logo from "../images/grazac.png";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const nav = useRef(null);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (nav.current && window.pageYOffset > nav.current.offsetTop)
        setFixed(true);
      else 
        setFixed(false);
    }) 
  })

  const handleClick = e => {
    e.preventDefault();

    if (active) setActive(false);
    else setActive(true);
  }

  const getHoverState = hover => {
    console.log(hover)
    console.log("brrrrrrrrrrrrr")
  }

  return(
    <nav className={cn("nav", { "nav--fixed": fixed })} ref={nav}>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={cn("nav__menu", { "nav__menu--active": active })}>
        <button className="nav-tgl" onClick={handleClick}>
          <span>&nbsp;</span>
        </button>

        <ul className="nav__list--mb">
        <li className="nav__item"><NavItem exact link="/about-us">About</NavItem></li>
        <li className="nav__item">
          <NavItem link="/enterprise">Enterprise</NavItem>
          <svg className="mask" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50003 6C5.32089 6 5.14252 5.934 4.99716 5.80113L0.282791 1.51511C-0.0503581 1.21251 -0.0959304 0.671616 0.182218 0.308161C0.45958 -0.0552936 0.954589 -0.104154 1.28852 0.198439L5.50867 4.03529L9.72175 0.336449C10.0596 0.0398561 10.5546 0.098146 10.8265 0.466744C11.0984 0.835342 11.0449 1.37452 10.7071 1.67197L5.99268 5.81056C5.8489 5.93657 5.67446 6 5.50003 6Z" fill="#575A65"/>
          </svg>
        </li>
        <li className="nav__item"><NavItem link="gua">Undergraduate</NavItem></li>
        <li className="nav__item"><NavItem link="gga">Graduate</NavItem></li>
        <li className="nav__item nav__item--btn">
          <PrimaryBtn link="/signup">Get Started</PrimaryBtn>
        </li>
      </ul>
      </div>

      <ul className="nav__list" style={{marginBottom: 0}}>
        <li className="nav__item"><NavItem exact link="/about-us">About</NavItem></li>
        <li className="nav__item" 
          style={{position: "relative", cursor: "pointer"}}  
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <a onClick={e => !click ? setClick(true) : setClick(false)}>Academy</a>
          <svg className="mask" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50003 6C5.32089 6 5.14252 5.934 4.99716 5.80113L0.282791 1.51511C-0.0503581 1.21251 -0.0959304 0.671616 0.182218 0.308161C0.45958 -0.0552936 0.954589 -0.104154 1.28852 0.198439L5.50867 4.03529L9.72175 0.336449C10.0596 0.0398561 10.5546 0.098146 10.8265 0.466744C11.0984 0.835342 11.0449 1.37452 10.7071 1.67197L5.99268 5.81056C5.8489 5.93657 5.67446 6 5.50003 6Z" fill="#575A65"/>
          </svg>
          
          <div className={cn("nav__dropdown", {"nav__dropdown--active": hover || click })}>
            <span></span>
            <ul className="nav__dropdown--list" onMouseEnter={() => console.log("brrrrr")}>
              <li><Link to="gua">Undergraduate</Link></li>
              <li><Link to="gga">Graduate</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav__item">
          <NavItem link="/enterprise">Enterprise</NavItem>
          <svg className="mask" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50003 6C5.32089 6 5.14252 5.934 4.99716 5.80113L0.282791 1.51511C-0.0503581 1.21251 -0.0959304 0.671616 0.182218 0.308161C0.45958 -0.0552936 0.954589 -0.104154 1.28852 0.198439L5.50867 4.03529L9.72175 0.336449C10.0596 0.0398561 10.5546 0.098146 10.8265 0.466744C11.0984 0.835342 11.0449 1.37452 10.7071 1.67197L5.99268 5.81056C5.8489 5.93657 5.67446 6 5.50003 6Z" fill="#575A65"/>
          </svg>
        </li>
        <li className="nav__item nav__item--btn">
          <PrimaryBtn link="/signup">Get Started</PrimaryBtn>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 