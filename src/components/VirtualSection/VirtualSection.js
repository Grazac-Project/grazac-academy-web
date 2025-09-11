import classes from './VirtualSection.module.css';
import Virtual from "../../images/virtual-new.png";
import benzene from '../../images/benzene.svg';
import man from '../../images/virtual/virtual-image.png';
import { Link } from "react-router-dom";

const VirtualSection = () => {
  return (
    <section className={classes.virtual_container}>
        <div className={classes.info_head}>
            <img src={Virtual} alt='new label'/>
            <h1>Elevate Your Learning with our <span>Virtual Classes</span></h1>
            <p>Learn with us from anywhere around the globe, our experienced tutors 
                are here to guide you on a journey of discovery, ensuring you acquire 
                valuable skills and knowledge that transcend borders:
            </p>
            <div className={classes.container_div}>
              <div className={classes.container_label}><img src={benzene} alt="benzene"/><span>Accessibility</span></div>
              <div className={classes.container_label}><img src={benzene} alt="benzene"/><span>Mentorship</span></div>
              <div className={classes.container_label}><img src={benzene} alt="benzene"/><span>Flexibility</span></div>
            </div>
            <Link to='/virtualLanding'>
              <button className={classes.more}>Learn more</button>
            </Link>
            
        </div>
        <div className={classes.image}>
          <img src={man} alt="man" />
        </div>
    </section>
  )
}

export default VirtualSection