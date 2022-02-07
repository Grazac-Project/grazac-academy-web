import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mode from "../../components/Mode";
import { Link } from "react-router-dom";
import { getAllTalents } from "../../api/dashboard/hire";

import Sponsor1 from "../../images/svg/Apple.svg";
import Sponsor2 from "../../images/svg/AWS.svg";
import Sponsor3 from "../../images/svg/Flutterwave.svg";
import Sponsor5 from "../../images/svg/Microsoft.svg";
import Sponsor6 from "../../images/svg/Google.svg";
import whyHire from "../../images/why-hire.png";
import man from "../../images/man.jpg";
import my_love from "../../images/my_love.png";
import kamala from "../../images/kamala.jpg";
import arrow from "../../images/svg/arrow-front.svg";
import star from "../../images/svg/star.svg";
import Loader from "../../components/Loader";

const Hire = () => {
  const [carousel, setCarousel] = useState("one");
  const [carouselInfo, setCarouselInfo] = useState({
    firstName: "Jonathan Doe",
    profession: "Product Designer",
    profile_upload: man,
    stars: 4,
  });
  const [talents, setTalents] = useState([]);

  React.useEffect(() => {
    document.title = "Hire - Grazac Academy";
    // window.scrollTo(0, 0);
    getAllTalents(1)
      .then((response) => response)
      .then((resp) => {
        // console.log(resp);
        if (resp.status === 200) {
          setTalents(resp.data.data.users);
          // console.log(resp.data.data.users)

          setCarouselInfo(resp.data.data.users[0]);
          // console.log(resp.data.data.users[0])
        } else {
          alert(
            `Something went wrong, please try again!!! Message: ${resp.data.message}`
          );
        }
      })
      .catch((err) => {
        console.log(err);
        alert(`Something went wrong, please try again!!!`);
      });
  }, []);

  // console.log(talents)

  const carouselPple = [
    {
      name: "Jonathan Doe",
      position: "Software Engineer, Primer AI",
      stars: 4,
    },
    {
      name: "Miracle Shadare",
      position: "Content Writer, Grazac",
      stars: 4,
    },
    {
      name: "Rebecca West",
      position: "Product Designer, Google LLC",
      stars: 4,
    },
  ];

  const whyContent = [
    {
      heading: "Competency",
      paragraph:
        "Our tech talents are adequately trained to be globally certified and competent to work anywhere in the world whether remotely or on-site.",
    },
    {
      heading: "Good knowledge of soft skills",
      paragraph:
        "Our tech talents are not only vast with tech skills and tools, but also equipped with soft skills that will foster great workplace ethics.",
    },
    {
      heading: "Strong Problem solving skill",
      paragraph:
        "Our tech talents are not just entry levels, they have gone through an in-depth internship program giving them prior workplace experience and they are practical oriented.",
    },
    {
      heading: "No Hiring Stress",
      paragraph:
        "You won't have to sift through hundreds of fresh applications to determine the perfect fit for the position you're looking for.",
    },
  ];

  return (
    <div>
      {console.log(talents)}

      {talents.length != 0 ? (
        <div>
          <Navbar />
          <div className="hire">
            <div className="hire_hero">
              <Container>
                <Row>
                  <Col md={6}>
                    <div>
                      <h1>Hire top tech talents from our pool</h1>
                      <p>
                        Attracting the best tech talent is competitive, let’s
                        pull them out from our pool.
                      </p>
                      <Link to="/hire/listing">
                        <button>Hire from Us</button>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="hire_hero-carousel">
                      {carousel === "one" && (
                        <img
                          src={talents[0]?.profile_upload}
                          alt="main-image"
                          className="hire_hero-carousel-mainImage"
                        />
                      )}
                      {carousel === "two" && (
                        <img
                          src={talents[1]?.profile_upload}
                          alt="main-image"
                          className="hire_hero-carousel-mainImage"
                        />
                      )}
                      {carousel === "three" && (
                        <img
                          src={talents[2]?.profile_upload}
                          alt="main-image"
                          className="hire_hero-carousel-mainImage"
                        />
                      )}
                      <div
                        className={
                          carousel === "one"
                            ? "hire_hero-carousel-frame box1 crs-bg"
                            : "hire_hero-carousel-frame box1"
                        }
                      >
                        <div
                          className="hire_hero-carousel-frame-image"
                          onClick={() => {
                            setCarousel("one");
                            setCarouselInfo(talents[0]);
                          }}
                        >
                          <img src={talents[0]?.profile_upload} alt="picx" />
                        </div>
                      </div>
                      <div
                        className={
                          carousel === "two"
                            ? "hire_hero-carousel-frame box2 crs-bg"
                            : "hire_hero-carousel-frame box2"
                        }
                      >
                        <div
                          className="hire_hero-carousel-frame-image"
                          onClick={() => {
                            setCarousel("two");
                            setCarouselInfo(talents[1]);
                          }}
                        >
                          <img src={talents[1]?.profile_upload} alt="picx" />
                        </div>
                      </div>
                      <div
                        className={
                          carousel === "three"
                            ? "hire_hero-carousel-frame box3 crs-bg"
                            : "hire_hero-carousel-frame box3"
                        }
                      >
                        <div
                          className="hire_hero-carousel-frame-image"
                          onClick={() => {
                            setCarousel("three");
                            setCarouselInfo(talents[2]);
                          }}
                        >
                          <img src={talents[2]?.profile_upload} alt="picx" />
                        </div>
                      </div>
                      <div className="hire_hero-carousel-textbox">
                        <div>
                          <h4>
                            {carouselInfo?.firstName} {carouselInfo?.lastName}
                          </h4>
                          <p>{carouselInfo?.profession}</p>
                          <div>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="landing__sponsors">
              <div className="landing__sponsors--container">
                <img src={Sponsor1} alt="sponsor" />
                <img src={Sponsor2} alt="sponsor" />
                <img src={Sponsor3} alt="sponsor" />
                <img src={Sponsor5} alt="sponsor" />
                <img src={Sponsor6} alt="sponsor" />
              </div>
            </div>

            <div className="hire_why">
              <Container>
                <Row>
                  <Col md={6}>
                    <img src={whyHire} alt="why-hire" />
                  </Col>
                  <Col md={6}>
                    <div className="hire_why-content">
                      <h2>
                        Why Top Companies <br />
                        Hire from Us
                      </h2>
                      {whyContent.map((item, idx) => (
                        <div key={idx}>
                          <p className="hire_why-content-heading">
                            {item.heading}
                          </p>
                          <p className="hire_why-content-paragraph">
                            {item.paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="hire_talents">
              <h2>Our Top Talents</h2>
              <div className="hire_talents-define">
                <p>
                  You determine the starting points, we provide the best
                  possible interception to achieve the goals.
                </p>
              </div>
              <div className="hire_talents-cards">
                <Container>
                  <Row>
                    {talents.slice(0, 6).map((item, idx) => (
                      <Col md={4} sm={6} key={idx}>
                        <Link
                          to={`/hire/profile?id=${item.id}&/${item.firstName}-${item.lastName}`}
                        >
                          <div className="hire_talents-cards-box">
                            <div className="hire_talents-cards-box-image">
                              <img src={item.profile_upload} alt="talent" />
                            </div>
                            <div className="hire_talents-cards-box-text">
                              <h4>
                                {item.firstName} {item.lastName}
                              </h4>
                              <p className="hire_talents-cards-box-text-1">
                                {item.profession}
                              </p>
                              <div
                                className={
                                  item.status === "Hired"
                                    ? "hire_talents-cards-box-text-hired"
                                    : "hire_talents-cards-box-text-available"
                                }
                              >
                                <p>
                                  {item.status === "Hired"
                                    ? "HIRED"
                                    : "AVAILABLE"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Link to="/hire/listing">
                  <button>
                    View more
                    <img src={arrow} alt="alt" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Mode />
          <Footer />
        </div>
    
      )
      :
      <Loader />
    
    }
    </div>
  );
};

export default Hire;
