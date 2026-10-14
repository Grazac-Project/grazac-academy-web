import classes from "./newsForm.module.css";
import NewsletterModal from "../newsletterModal";
// import Message from "../../../images/newsletter/message-1.svg";
import Message from "../../../images/newsletter/popup-envelope.png";
import Check from "../../../images/newsletter/check.svg";
import LoaderGif from "../../../images/svg/dashboard/loader.gif";
import { useState } from "react";
// import { zohoSubmit } from "../../../api/dashboard/data";
import { newsForm } from "../../../api/dashboard/data";
import { ToastContainer, toast } from "react-toastify";

const Newsform = ({ setNews, setNewsMessage }) => {
  const [loading, setLoading] = useState(false);
  const [thanks, setThanks] = useState(true);
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(payload);

    setLoading(true);
    newsForm(payload)
      .then((res) => {
        // console.log(res);
        if (res.status === 201) {
          setNews("newsResponse");
          setThanks(false);
        }
      })
       .catch((error) => {
      setLoading(false);
      // console.log(error);
      const errMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errMsg);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <NewsletterModal setNews={setNews}>
        <ToastContainer />
        {thanks ? (
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
                  name="firstName"
                  value={payload.firstName}
                  placeholder="First Name "
                  onChange={handleChange}
                />
                {/* <input
                type="text"
                required
                name='FIRSTNAME'
                placeholder="Your name"
              /> */}
              </label>
              <label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={payload.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                {/* <input
                type="text"
                required
                name='FIRSTNAME'
                placeholder="Your name"
              /> */}
              </label>
              <label>
                <input
                  type="email"
                  required
                  name="email"
                  value={payload.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {/* <input
                type="email"
                required
                name="CONTACT_EMAIL"
                placeholder="Your email"
              /> */}
              </label>
              <button
                disabled={
                  // payload.fullName.length < 2 ||
                  payload.email.length < 3 || loading
                }
              >
                {/* <button
              type="submit"
            > */}
                {loading ? <img src={LoaderGif} alt="Loading" /> : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <newsResponse />
        )}
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
