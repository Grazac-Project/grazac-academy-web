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
        {/* <form className={classes.main} onSubmit={handleSubmit}> */}
        <form className={classes.main} action="https://lfgwtf-zgph.maillist-manage.net/weboptin.zc" target="_zcSignup" id="zcampaignOptinForm">
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
              {/* <input
                type="text"
                required
                name="firstname"
                value={payload.firstname}
                placeholder="Your name"
                onChange={handleChange}
              /> */}
              <input
                type="text"
                required
                name='FIRSTNAME'
                placeholder="Your name"
              />
            </label>
            <label>
              {/* <input
                type="email"
                required
                name="email"
                value={payload.email}
                placeholder="Your email"
                onChange={handleChange}
              /> */}
              <input
                type="email"
                required
                name="CONTACT_EMAIL"
                placeholder="Your email"
              />
            </label>
            {/* <button
              disabled={
                payload.firstname.length < 2 ||
                payload.email.length < 3 ||
                loading
              }
            > */}
            <button
              type="submit"
            >
              {loading ? <img src={LoaderGif} alt="Loading" /> : "Submit"}
            </button>
          </div>
          <input type="hidden" id="fieldBorder" value="" />
					<input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
					<input type="hidden" id="emailReportId" name="emailReportId" value="" />
					<input type="hidden" id="formType" name="formType" value="QuickForm" />
					<input type="hidden" name="zx" id="cmpZuid" value="12ee5d37f" />
					<input type="hidden" name="zcvers" value="3.0" />
					<input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
					<input type="hidden" id="mode" name="mode" value="OptinCreateView" />
					<input type="hidden" id="zcld" name="zcld" value="1103e99bf48afca6b" />
					<input type="hidden" id="zctd" name="zctd" value="1103e99bf48ad93c1" />
					<input type="hidden" id="document_domain" value="" />
					<input type="hidden" id="zc_Url" value="lfgwtf-zgph.maillist-manage.net" />
					<input type="hidden" id="new_optin_response_in" value="0" />
					<input type="hidden" id="duplicate_optin_response_in" value="0" />
					<input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
					<input type="hidden" id="zc_formIx" name="zc_formIx" value="3z1628e59b3d0e88d9bf23ecc688d4c54cc4568eb023b0f0d80eefa1351371035e" />
					<input type="hidden" id="viewFrom" value="URL_ACTION" />
					<span style={{display: "none"}} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
					<span style={{display: "none"}} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
					{/* <span style={{display: "none"}} id="dt_LASTNAME">1,false,1,Last Name,2</span> */}
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
