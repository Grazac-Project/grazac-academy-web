import { Container, Row, Col  } from "react-bootstrap";
import grad1 from "../images/grad1.png";
import grad2 from "../images/grad2.png";
import grad3 from "../images/grad3.png";
import grad4 from "../images/grad4.png";

const Gallery = () => {
  return (
        <div>
                    <div
                      className="course_mode-intro course_mode-intro"
                      style={{ textAlign: "center" }}
                    >
                      <h2 className="join_heading" style={{ marginTop: "80px" }}>
                        Gallery
                      </h2>
                      <p className="join_needed">
                        Images of our students that put in deliberate efforts and have
                        been intentional and consistent in implementing{" "}
                        <br className="hide-at-600" />
                        what they learnt from the course.
                      </p>
                    </div>
                    <Container>
                      <div className="join_gallery">
                        <div className="join_gallery-top">
                          <div className="join_gallery-top-left">
                            <img src={grad1} alt="Graduation 1" />
                          </div>
                          <div className="join_gallery-top-right">
                            <img src={grad4} alt="Graduation 4" />
                          </div>
                        </div>
                        <div className="join_gallery-bottom">
                          <div className="join_gallery-bottom-left">
                            <img src={grad2} alt="Graduation 2" />
                          </div>
                          <div className="join_gallery-bottom-right">
                            <img src={grad3} alt="Graduation 3" />
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
  )
}

export default Gallery