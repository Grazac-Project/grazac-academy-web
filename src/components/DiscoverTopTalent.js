import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Grazac from "../images/svg/logo-round.svg";

const DiscoverTopTalent = () => {
  return (
    <div
      className="landing__bottom"
      id="landing__bottom"
      style={{ paddingBottom: 0 }}
    >
      <div className="landing__bottom--text">
        <div className="landing__bottom--text--right">
          <h1>
            Discover Top Tech <br />
            Talent Here
          </h1>
          <p>
            Find experienced fresh tech talents and professionals with authentic
            background that match your requirements.
          </p>
          <div className="landing__btn--2">
            <Link to="/hire">
              <div
                className="nav__btn nav__btn-flex "
                // onClick={() => toast.info("Coming Soon")}
              >
                <a className="nav__btn--text">Hire our Talents</a>
              </div>
            </Link>
          </div>
        </div>

        <div className="landing__bottom--text--left">
          <img src={Grazac} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverTopTalent;
