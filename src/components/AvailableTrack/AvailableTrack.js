import classes from "./AvailableTrack.module.css";
import React, { useState } from "react";
import product from "../../images/product.png";
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";
import android from "../../images/android.png";
import product_management from "../../images/product_management.png";
// import machine_learning from "../../images/machine_learning.png";
// import java from "../../images/java.png";
import data_analysis from "../../images/analysis.png";
import product_marketing from "../../images/product-marketing.png";
import cybersecurity from "../../images/cybersecurity.png";
import cloud from "../../images/cloud.png";
import python from "../../images/python.png";
import qualityTesting from "../../images/quality-testing.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Ai from "../../images/available-tracks/ai.png";
import dashboard from "../../images/available-tracks/dashboard.png";
import security from "../../images/available-tracks/security.png";
import database from "../../images/available-tracks/database.png";
import product1 from "../../images/available-tracks/product.png";

const tabs = [
  {
    name: "All tracks",
    img: dashboard,
  },
  {
    name: "Products",
    img: product1,
  },
  {
    name: "AI and Software Engineering",
    img: Ai,
  },
  {
    name: "Cloud and Cybersecurity",
    img: security,
  },
  {
    name: "Data Science",
    img: database,
  },
];

const tracks = [
  {
    key: "frontend",
    tab: "AI and Software Engineering",
    img: frontend,
    title: "Front End Web development (Reactjs)",
    desc: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so that a user...",
    link: "/course-detail-graduate?course=frontend-web-development",
  },
  {
    key: "backend",
    tab: "AI and Software Engineering",
    img: backend,
    title: "Back End with Nodejs",
    desc: "Node.js is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news...",
    link: "/course-detail-graduate?course=backend-web-development",
  },

  {
    key: "android",
    tab: "AI and Software Engineering",
    img: android,
    title: "Mobile Development with Flutter and Dart",
    desc: "Flutter is an incredible user interface (UI) toolkit that allows you to build apps for iOS, Android, and even the web & desktop platforms like macOS, Windows, and Linux; all from...",
    link: "/course-detail-graduate?course=mobile-application-development",
  },

  {
    key: "data_analysis",
    tab: "Data Science",
    img: data_analysis,
    title: "Data Analysis",
    desc: "Data Analysis involves using different tools and techniques to scrutinize and probe large volumes of data with the goal of making informed solving problems, business decisions, and...",
    link: "/course-detail-graduate?course=data-analysis",
  },
  {
    key: "product",
    tab: "Products",
    img: product,
    title: "Product Design",
    desc: "Product design is a multifaceted field that involves creating and improving products to meet user needs and business goals. You'll gain knowledge in designing user interfaces that...",
    link: "/course-detail-graduate?course=product-designing-ui-ux",
  },
  {
    key: "product_marketing",
    tab: "Products",
    img: product_marketing,
    title: "Product Marketing",
    desc: "Learn strategies to position, promote, and grow products in competitive markets. This course blends marketing, communication, and product management skills.",
    link: "/course-detail-graduate?course=product-marketing",
  },
  {
    key: "product_management",
    tab: "Products",
    img: product_management,
    title: "Product Management",
    desc: "Grazac product management course will help you understand the process of strategically guiding a company's product development, market launch, ongoing support, and improvement of a product.",
    link: "/course-detail-graduate?course=product-management",
  },
  {
    key: "qualityTesting",
    tab: "Products",
    img: qualityTesting,
    title: "Quality Assurance (QA) Testing",
    desc: "This course equips learners with skills to ensure software quality using manual and automated testing tools.",
    link: "/course-detail-graduate?course=quality-assurance",
  },

  {
    key: "python",
    tab: "AI and Software Engineering",
    img: python,
    title: "Python for Machine Learning and AI",
    desc: "Learn Python programming for Machine Learning and AI. Explore libraries like NumPy, Pandas, Scikit-Learn, TensorFlow, and PyTorch.",
    link: "/course-detail-graduate?course=python-machine-learning-ai",
  },
  {
    key: "cloud_engineer",
    tab: "Cloud and Cybersecurity",
    img: cloud,
    title: "Cloud Engineering (AWS)",
    desc: "Master cloud infrastructure with AWS. Learn how to deploy, secure, and scale cloud applications.",
    link: "/course-detail-graduate?course=cloud-engineering-aws",
  },
  {
    key: "cloud",
    tab: "Cloud and Cybersecurity",
    img: cybersecurity,
    title: "Cybersecurity",
    desc: "Learn how to protect systems, networks, and data from cyber threats. This course covers security fundamentals, ethical hacking, penetration testing, and defensive strategies.",
    link: "/course-detail-graduate?course=cybersecurity",
  },
  {
    key: "backend_with_java",
    tab: "AI and Software Engineering",
    title: "Backend With Java",
    img: backend,
    desc: "At Grazac Academy, we offer an in-depth Java course designed to provide students with a strong foundation in one of the most versatile and widely used programming languages in the tech industry ",
    link: "/course-detail-graduate?course=java",
  },
];

const AvailableTrack = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  //   useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const courseDetailsHandler = (goTo) => {
    sessionStorage.setItem(
      "learning_mode",
      JSON.stringify({
        class_option: "Onsite",
      })
    );
    history.push(goTo);
  };

  const filteredTracks =
    activeTab === "All tracks"
      ? tracks
      : tracks.filter((track) => track.tab === activeTab);

  return (
    <div className={classes.landing_intern}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h2>Available Tracks</h2>
        </div>
        <div className={classes.text1}>
          <p>
            Explore a wide range of tech courses designed to empower you with
            the skills and knowledge you need to thrive in the ever-evolving
            tech industry.
          </p>
        </div>
        <div className={classes.available_tracks_tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={
                activeTab === tab.name
                  ? `${classes.available_tracks_tab_btn1} ${classes.active_tab}`
                  : classes.available_tracks_tab_btn1
              }
              onClick={() => setActiveTab(tab.name)}
            >
              <img
                src={tab.img}
                alt={tab.name}
                className={classes.available_tracks_tab_img}
                style={{
                  filter:
                    activeTab === tab.name ? "brightness(0) invert(1)" : "none",
                }}
              />
              {tab.name}
            </button>
          ))}
        </div>

        <div className={classes.gga_container}>
          {filteredTracks.map((track) => (
            <div
              key={track.key}
              className={classes.boxes33}
              onClick={() => courseDetailsHandler(track.link)}
            >
              <div className={classes.gua_cardview}>
                <div className={classes.gua_box}>
                  <img src={track.img} alt="course-desc" />
                </div>
                <div className={classes.gua_text}>
                  <h4>{track.title}</h4>
                  <p>{track.desc}</p>
                  <span onClick={() => courseDetailsHandler(track.link)}>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/signup">
          <div
            className="nav__btn"
            style={{ width: "252px", margin: "auto", textAlign: "center" }}
          >
            <div className="nav__btn--text">Apply Now</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AvailableTrack;
