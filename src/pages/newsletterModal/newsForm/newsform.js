import classes from "./newsForm.module.css";
import NewsletterModal from "../newsletterModal";
// import Message from "../../../images/newsletter/message-1.svg";
import Message from "../../../images/newsletter/popup-envelope.png";
import Check from "../../../images/newsletter/check.svg";
import LoaderGif from "../../../images/svg/dashboard/loader.gif";
import { useState } from "react";
import axios from "axios";

const Newsform = ({ setNews, setNewsMessage }) => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    firstname: "",
    email: "",
  });
  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const key = process.env.REACT_APP_API_KEY;
  console.log(key);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      setLoading(true);
      const res = await axios.post(
        "https://users.go-mailer.com/api/contacts",
        // "https://lfgwtf-zgph.maillist-manage.net/weboptin.zc"
        {
          email: payload.email,
          firstname: payload.firstname,
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
            "content-type": "application/json",
          },
        }
      );
      console.log(res.data);
      setNewsMessage(res.data.payload.exist);
      setLoading(false);
      if (res.status === 200) {
        setNews("newsResponse");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <>
      <NewsletterModal setNews={setNews}>
        <form className={classes.main} onSubmit={handleSubmit}>
          <div className={classes.formImage}>
            <img src={Message} alt="message" />
          </div>
          <div className={classes.formInput}>
            <div>
              <h2>Become an Insider to</h2>
              {benefits.map((item, i) => (
                <p key={i}>
                  <img src={Check} alt="icon" />
                  {item}
                </p>
              ))}
            </div>
            <label>
              <input
                type="text"
                required
                name="firstname"
                value={payload.firstname}
                placeholder="Your name"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="email"
                required
                name="email"
                value={payload.email}
                placeholder="Your email"
                onChange={handleChange}
              />
            </label>
            <button
              disabled={
                payload.firstname.length < 2 ||
                payload.email.length < 3 ||
                loading
              }
            >
              {loading ? <img src={LoaderGif} alt="Loading" /> : "Submit"}
            </button>
          </div>
        </form>
      </NewsletterModal>
    </>
  );
};

export default Newsform;

const benefits = [
  "Be a part of our journey",
  "Get early access to insights & opportunities in tech",
  "Get all the support you need to thrive as a person & as a Techie",
];
