import { Link } from "react-router-dom";
import Facebook from "../images/svg/facebook.svg"
import Instagram from "../images/svg/instagram.svg"
import Twitter from "../images/svg/twitter.svg"
import Youtube from "../images/svg/youtube.svg"
import Logo from "../images/grazac.png";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <ul className="footer__list">
            <li className="footer__item footer__item--head">
              <div className="footer__logo">
                <img src={Logo} alt="logo" />
              </div>
            </li>
            <li className="footer__item">You need more than a degree to be relevant in the 21st century. We are passionate about </li>
            <li className="footer__item">+23486 089 3455</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">Company</li>
            <li className="footer__item"><Link to="/about-us">About</Link></li>
            <li className="footer__item"><Link>Careers</Link></li>
            <li className="footer__item"><Link to="/contact">Contact Us</Link></li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">Features</li>
            <li className="footer__item"><Link>Courses</Link></li>
            <li className="footer__item"><Link>Internship</Link></li>
            <li className="footer__item"><Link>NYSC Members</Link></li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item footer__item--head">Teaching</li>
            <li className="footer__item"><Link>FAQ</Link></li>
            <li className="footer__item"><Link>Book a Call</Link></li>
            <li className="footer__item"><Link>Corporate Training</Link></li>
            <li className="footer__item"><Link>Grazac Hire</Link></li>
          </ul>
        </div>

        <div className="footer__line">&nbsp;</div>

        <div className="footer__bottom">
          <Link>Privacy & Policy</Link>
          <Link>Terms of Service</Link>

          <p>©2020 Grazac Technologies. All Rights Reserved</p>

          <div className="footer__icons">
            <img src={Youtube} alt="icon" />
            <img src={Twitter} alt="icon" />
            <img src={Instagram} alt="icon" />
            <img src={Facebook} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;