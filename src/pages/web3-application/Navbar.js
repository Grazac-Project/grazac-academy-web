import { useEffect, useState, useRef } from "react";
import { cn } from "../../utils";
import NavItem from "../../components/NavItem";
// import logo from "../images/svg/grazac-logo.svg";
import logo from "../../images/grazac_logo.png";
import { Link } from "react-router-dom";
import InfoModal from "../../components/InfoModal";

const Navbar = ({ top }) => {
  const [fixed, setFixed] = useState(false);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
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
              <NavItem link="/about-us">
                <span>02</span>About
              </NavItem>
            </li>
            <li className="nav__item">
              <NavItem link="/faq">
                <span>03</span>FAQs
              </NavItem>
            </li>
            <li className="nav__item">
              {/* <a
              href="https://blog.grazacacademy.com/"
              target="__blank"
              className="nav__link"
            >
              Blog
            </a> */}
              <NavItem link="/pricing">
                <span>04</span>Pricing
              </NavItem>
            </li>
            {/* <li className="nav__item">
              <NavItem link="/hire">
                <span>04</span>Hire
              </NavItem>
            </li> */}
            <li className="nav__item">
              <a href="/login">
                <button onClick={() => setActive(false)}>Login</button>
              </a>
            </li>
            <li className="nav__item" style={{ marginTop: "30px" }}>
              <a href="tel:+2348068365951">
                <button onClick={() => setActive(false)}>Talk to us</button>
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
          <li className="nav__item">
            {/* <a
              href="https://blog.grazacacademy.com/"
              target="__blank"
              className="nav__link"
            >
              Blog
            </a> */}

            <NavItem link="/pricing">Pricing</NavItem>
          </li>
          <li className="nav__item">
            <NavItem link="/faq">FAQs</NavItem>
          </li>
          {/* <li className="nav__item">
            <NavItem link="/hire">Hire</NavItem>
          </li> */}
          <a href="/start">
            <div className="nav__btn">
              <div className="nav__btn--text">Apply Now</div>
            </div>
          </a>
          <a href="tel:+2348068365951" style={{ marginLeft: "20px" }}>
            <div className="nav__btn">
              <div className="nav__btn--text1">Talk to us</div>
            </div>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
