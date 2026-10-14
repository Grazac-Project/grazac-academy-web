import lady from "../images/Grazac-website/IMG_8440.JPG";



const Mode = ({ title, page, text, button_1, button_2 }) => {
  return (
    <div className="mode">
      {/* <ToastContainer/> */}
      <div className="landing__discount">
        <div className="landing__discount--container">
          <div className="landing__discount--img">
            <img src={lady} alt="" />
          </div>
          <div className="landing__discount--text">
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="landing__btn--2">
              <div>
                <div className="nav__btn nav__btn-flex">
                  {page === "hire" ? (
                    <>
                      <a href="/" >
                        <div
                          className="nav__btn--text"
                          style={{ marginRight: "20px", }}
                        >
                          {button_1}
                        </div>
                      </a>

                      <a href="/hire/contact ">
                        <div className="nav__btn--text1">{button_2}</div>
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="/signup">
                        <div
                          className="nav__btn nav__btn-flex " style={{ marginRight: "16px" }}>
                          <span className="nav__btn--text">{button_1}</span>
                        </div>

                        {/* <div
                          className="nav__btn--text "
                          style={{ marginRight: "20px", }}
                        >
                          {button_1}
                        </div> */}
                      </a>

                      {/* <p>Don't have an account? <span onClick={()=>toast.info('Application into Cohort (CH011) is closed. Enrollment into CH012 begins July 2022')}>Sign up</span></p> */}

                      {/* <a
                        href="#landing_page_mode"
                        onClick={()=>toast.info('Coming Soon')}
                        className="nav__btn--text"
                        style={{ marginRight: "20px" }}
                      >
                        {button_1}
                      </a> */}

                      <a href="https://chat.whatsapp.com/EG62sZ8TqY198wq1vsjsXL">
                        <div className="nav__btn--text1">{button_2}</div>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
