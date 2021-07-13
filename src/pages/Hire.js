import {Link} from 'react-router-dom';
import undergraduate from "../images/undergraduate.png";

const Hire = () => {
    return(
        <div>
            <div className="gua_hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="gua_hero-text">
                        <div className="gua_hero-text-b">
                      <h1>Undergraduate Accelerator Plan</h1>
                      <p>
                        We equip you to be an asset in the digital age before
                        leaving the four walls of school and we believe the
                        future of work will be strictly skill-based. Join
                        thousands of young undergraduates to build a career in
                        technology and be mentored by industry experts.
                      </p>
                      <div className="contact_hero-privacy">
                        <a href="#courses" className="download-brochure">
                          Join Us Today!
                        </a>
                        <Link to="/lead">
                          <button>Apply as Lead</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={undergraduate}
                    alt="undergraduate"
                    className="gua_hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}