import { Link } from "react-router-dom";

const PrimaryBtn = (props) => {
  return(
    <Link to={props.link} style={{textDecoration: "none"}}>
      <div className="nav__btn">
        <div className={["nav__btn--text ", "nav__btn--text", props.yellow ? "--yellow" : ""].join("")}>
          { props.children }
        </div>
      </div>
    </Link>
  );
}

export default PrimaryBtn;