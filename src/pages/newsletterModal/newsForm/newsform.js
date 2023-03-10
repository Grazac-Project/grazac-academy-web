import classes from "./newsForm.module.css";
import NewsletterModal from "../newsletterModal";
import Message from "../../../images/newsletter/message-1.svg";

const Newsform = ({ setNews }) => {
  return (
    <>
      <NewsletterModal setNews={setNews}>
        <form className={classes.main}>
          <div className={classes.formImage}>
            <img src={Message} alt="message" />
          </div>
          <div className={classes.formInput}>
            <div>
              <h2>Subscribe to our newsletter</h2>
              <p>
                Subscribe to our newsletter to receive exclusive offers, latest
                news and updates.
              </p>
            </div>
            <label>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <input type="email" placeholder="Your email" />
            </label>
            <button onClick={() => setNews("newsResponse")}>Submit</button>
          </div>
        </form>
      </NewsletterModal>
    </>
  );
};

export default Newsform;
