import { Link } from "react-router-dom";

const PrimaryBtn = (props) => {
  return(
    <Link to={props.link} style={{textDecoration: "none"}}>
      <div className="nav__btn">
        <div className={["nav__btn--text ", "nav__btn--text", props.yellow ? "--yellow" : ""].join("")}>
          { props.children }
        </div>
        <div className={["nav__btn--arrow ", "nav__btn--arrow", props.yellow ? "--yellow" : ""].join("")}>
          <svg className="arrow" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7708 4.42915C19.7706 4.42891 19.7704 4.42863 19.7701 4.42839L15.688 0.234836C15.3821 -0.0793172 14.8875 -0.0781481 14.5831 0.237578C14.2787 0.553264 14.2799 1.06387 14.5857 1.37806L17.3265 4.19355H0.78125C0.349765 4.19355 0 4.5546 0 5C0 5.4454 0.349765 5.80645 0.78125 5.80645H17.3264L14.5857 8.62194C14.2799 8.93613 14.2787 9.44674 14.5831 9.76242C14.8875 10.0782 15.3822 10.0793 15.688 9.76516L19.7702 5.57161C19.7704 5.57137 19.7706 5.57109 19.7709 5.57085C20.0769 5.25561 20.0759 4.74335 19.7708 4.42915Z" fill="white"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default PrimaryBtn;