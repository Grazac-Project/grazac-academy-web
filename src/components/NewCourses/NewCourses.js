import classes from "./NewCourses.module.css";
import Virtual from "../../images/virtual-new.png";
import benzene from "../../images/benzene.svg";
import group1 from "../../images/group-gift.png";
import { Link } from "react-router-dom";
const NewCourses = () => {
  return (
    <section className={classes.new}>
      <div className={classes.group}>
        <img src={group1} alt="group" />
      </div>
      <div className={classes.info}>
        <h1>New Courses Now Available!</h1>
        <p>
          Learn with us from anywhere around the globe, our experienced tutors
          are here to guide you on a journey of discovery, ensuring you acquire
          valuable skills and knowledge that transcend borders
        </p>
        <div className={classes.course}>
          <div className={classes.label}>
            <span>Cybersecurity</span>
          </div>
          <div className={classes.label_marketing}>
            <span>Product Marketing</span>
          </div>
          <div className={classes.label_python}>
            <span>Python for Machine Learning and AI</span>
          </div>
          <div className={classes.label_cloud}>
            <span>Cloud Engineering (AWS)</span>
          </div>
          <div className={classes.label_quality}>
            <span>Quality Assurance (QA) Testers</span>
          </div>
        </div>
        <Link to="/virtualLanding">
          <button className={classes.view}>View All Courses</button>
        </Link>
      </div>
    </section>
  );
};

export default NewCourses;
