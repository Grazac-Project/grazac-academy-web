import { useEffect, useState, useRef } from "react";
import { cn } from "../utils";
import NavItem from "./NavItem";
import logo from "../images/svg/grazac-logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({top}) => {
  const [fixed, setFixed] = useState(false);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    /*if(top) {
      let h = document.querySelector('.infomodal').offsetHeight;
      console.log(h);
      document.querySelector('nav.nav').style.marginTop = h+'px';
    }*/
    if (nav.current && window.pageYOffset > nav.current.offsetTop) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    window.addEventListener("scroll", () => {
      if (nav.current && window.pageYOffset > nav.current.offsetTop)
        setFixed(true);
      else setFixed(false);
    });

  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (active) setActive(false);
    else setActive(true);
  };

  return (
    <nav className={cn("nav", { "nav--fixed": fixed })} ref={nav}>
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={cn("nav__menu", { "nav__menu--active": active })}>
          <button className="nav-tgl" onClick={handleClick}>
            <span>&nbsp;</span>
          </button>

          <ul className="nav__list--mb">
            <li className="nav__item">
              <NavItem exact link="/">
              <span>01</span>Home
              </NavItem>
            </li>
            <li className="nav__item">
              <NavItem link="/about-us"><span>02</span>About</NavItem>
            </li>
            <li className="nav__item">
              <NavItem link="/undergraduate-accelerator-plan"><span>03</span>Undergraduate</NavItem>
            </li>
            <li className="nav__item">
              <NavItem link="/graduate-accelerator-plan"><span>04</span>Graduate</NavItem>
            </li>
            <li className="nav__item">
              <a href="/#tracks">
                <button onClick={() => setActive(false)}>Enroll Now</button>
              </a>
            </li>
          </ul>
        </div>

        <ul className="nav__list" style={{ marginBottom: 0 }}>
          <li className="nav__item">
            <NavItem exact link="/">
              Home
            </NavItem>
          </li>
          <li className="nav__item">
            <NavItem link="/about-us">About</NavItem>
          </li>
          <li
            className="nav__item"
            style={{ position: "relative", cursor: "pointer" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <a className="nav__link">
              Academy
            </a>
            <svg
              className="mask"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.50003 6C5.32089 6 5.14252 5.934 4.99716 5.80113L0.282791 1.51511C-0.0503581 1.21251 -0.0959304 0.671616 0.182218 0.308161C0.45958 -0.0552936 0.954589 -0.104154 1.28852 0.198439L5.50867 4.03529L9.72175 0.336449C10.0596 0.0398561 10.5546 0.098146 10.8265 0.466744C11.0984 0.835342 11.0449 1.37452 10.7071 1.67197L5.99268 5.81056C5.8489 5.93657 5.67446 6 5.50003 6Z"
                fill="#575A65"
              />
            </svg>

            <div
              className={cn("nav__dropdown", {
                "nav__dropdown--active": hover,
              })}
            >
              <span></span>
              <ul
                className="nav__dropdown--list"
              >
                <li>
                  <Link to="/undergraduate-accelerator-plan" className="nav__link">Undergraduate</Link>
                </li>
                <li>
                  <Link to="/graduate-accelerator-plan" className="nav__link">Graduate</Link>
                </li>
              </ul>
            </div>
          </li>
          <a href="/#tracks">
            <div className="nav__btn">
              <div className="nav__btn--text">Enroll Now</div>
            </div>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
