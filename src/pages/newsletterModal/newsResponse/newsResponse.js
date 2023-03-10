import NewsletterModal from "../newsletterModal";
import classes from "./newsResponse.module.css";
import Message from "../../../images/newsletter/message-2.svg";
import { Link } from "react-router-dom";

const NewsResponse = ({ setNews }) => {
  return (
    <NewsletterModal setNews={setNews}>
      <div className={classes.main}>
        <img src={Message} alt="" />
        <div>
          <h2>Thank you for subscribing to our newsletter!</h2>
          <span>We promise not to spam!</span>
          <Link>Try another email instaed</Link>
        </div>
      </div>
    </NewsletterModal>
  );
};

export default NewsResponse;
