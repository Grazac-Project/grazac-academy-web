import { Link } from "react-router-dom";
import Facebook from "../images/svg/facebook.svg";
import Instagram from "../images/svg/instagram.svg";
import Logo from "../images/grazac_logo.png";
import Bird from '../images/footer-bird.png'
import Terms from "../images/newsletter/terms.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <ul className="footer__list">
            <li className="footer__item footer__item--head">
              <div className="footer__logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </li>
            <li className="footer__item">
              Grazac Academy gives you the opportunity to learn in-demand skills
              to build your technology career.
            </li>
            <li className="footer__item">
              <a href="tel:+234806 836 5951">+234 806 836 5951</a>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">Company</li>
            <li className="footer__item">
              <Link to="/about-us">About</Link>
            </li>
            <li className="footer__item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="footer__item">
              <a href="https://blog.grazacacademy.com/" target="__blank">
                Blog
              </a>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">What We Offer</li>
            <li className="footer__item">
              <Link to="/login">Learn with us</Link>
            </li>
            {/*
            <li className="footer__item">
              <Link to="/hire">Hire our Talents</Link>
            </li>
            */}
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">Discover</li>
            <li className="footer__item">
              <Link to="/faq">FAQs</Link>
            </li>
            {/* <li className="footer__item"><Link>Book a Call</Link></li> */}
            {/* <li className="footer__item"><Link to="/training/coming-soon">Corporate Training</Link></li>
            <li className="footer__item"><Link to="/hire/coming-soon">Grazac Hire</Link></li> */}
          </ul>

          <ul className="footer__accredit">
            <li className="footer__item footer__item--image"><img src={Bird} alt="accreditation logo" /></li>
            <li className="footer__text">
              Accredited by the American Council of Training and Development
            </li>
          </ul>
        </div>

        <div className="footer__line">&nbsp;</div>

        <div className="footer__bottom">
          <Link>Privacy & Policy</Link>
          <a href={Terms} download>
            Terms of Service
          </a>

          <p>
            ©{new Date().getFullYear()} Grazac Technologies. All Rights Reserved
          </p>

          <div className="footer__icons">
            {/* <a
              href="https://www.youtube.com/channel/UCAQ_Q8wYZloETgrdlBbwMtg"
              target="_blank"
            >
              <img src={Youtube} alt="icon" />
            </a> */}
            <a href="https://x.com/grazacng?s=21" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={20}/>
            </a>
            <a href="https://www.instagram.com/grazacng?" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="icon" />
            </a>
            <a href="https://www.facebook.com/grazacng" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="icon" />
            </a>
            <a href="https://www.linkedin.com/company/gra-zac/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  size={20}/>
            </a>
            <a href="https://www.tiktok.com/@grazac.ng?" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
