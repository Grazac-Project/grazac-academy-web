import { Link } from "react-router-dom/cjs/react-router-dom.min"


const AdmissionProcess = () => {
  return (
    <div className="landing__discover">
              <div className="landing__bottom--text1">
                <h1>
                  How the Admission <br className="hide-at-600"/>
                  Process Works
                </h1>
                <p>
                  Understand our admission process 
                  in 3 easy <br className="hide-at-600"/> steps
                </p>
              </div>
              <div className="landing__discover--container">
                <div className="landing__discover--images">
                  <div className="landing__discover--images-left">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="landing__discover--images-right">
                    <div></div>
                  </div>
                </div>
    
                <div className="landing__discover--list">
                  <div className="landing__discover--list-item">
                    <h2>01</h2>
                    <div>
                      <h3>Fill and submit the application form</h3>
                      <p>
                        Create an account to start your application. Login to your
                        dashboard and fill in your correct details.
                      </p>
                    </div>
                  </div>
    
                  <div className="landing__discover--list-item">
                    <h2>02</h2>
                    <div>
                      <h3>Pass the assessment tests</h3>
                      <p>
                        If your application is successful, you will be contacted via
                        mail to take a physical assessment test to ensure your
                        commitment meets our standard.
                      </p>
                    </div>
                  </div>
    
                  <div className="landing__discover--list-item">
                    <h2>03</h2>
                    <div>
                      <h3>Complete the process and begin your journey into Tech</h3>
                      <p>
                        Once you pass the assessment test, you are eligible for
                        admission. You will receive a mail on how to complete your
                        admission process.
                      </p>
                    </div>
                  </div>
                  <div className="landing__discover--list-item"></div>
                  <div className="landing__discover--list-item"></div>
                  <Link to="/signup">
                    {/* <div className="nav__btn one-btn" onClick={showToast}> */}
                    <div className="nav__btn"
                     style={{ width: "150px", margin: "auto", textAlign: "center" }}>
                      <div className="nav__btn--text">Apply Now</div>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
  )
}

export default AdmissionProcess