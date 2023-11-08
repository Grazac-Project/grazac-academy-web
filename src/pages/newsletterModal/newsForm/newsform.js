import classes from "./newsForm.module.css";
import NewsletterModal from "../newsletterModal";
// import Message from "../../../images/newsletter/message-1.svg";
import Message from "../../../images/newsletter/popup-envelope.png";
import Check from "../../../images/newsletter/check.svg";
import LoaderGif from "../../../images/svg/dashboard/loader.gif";
import { useState, useEffect } from "react";
import axios from "axios";
// import { ZohoAPI } from "../../../api/dashboard/apikit";

const Newsform = ({ setNews, setNewsMessage }) => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    firstname: "",
    email: "",
  });
  const [accessToken, setAccessToken] = useState('1000.818b566c6bd2786d36a6d2c9447bd96b.222ee6b71d0720fd89fcd5d044310c7e')
  const [config] = useState({
    client_id: '1000.WY20WPR3DXD78EM9PEJEZIU8D2H76N', // The client ID obtained from Zoho
    refresh_token: '1000.4a123ee284904de31c0140913804f232.08da0546c4fd73fdd95b6a029b7670ef', // The refresh token obtained from Zoho
    client_secret: '1987033df4d63deaaef0cecd0d4973260784601dd6', // The client secret obtained from Zoho
    grant_type: 'refresh_token', // Grant type for OAuth2
  })
  useEffect(() => {
    refreshToken()
  }, [])
  const refreshToken = async () => {
    try {
      const { data } = await axios.post('https://accounts.zoho.com/oauth/v2/token', {}, {
        params: config,
      });
      setAccessToken(`Zoho-oauthtoken ${data.access_token}`);
    } catch (e) {
      // Handle the error
      console.error(e);
    }
  };
  
  const addContact = async (firstName, lastName, username, domain) => {
    try {
      if (accessToken.length === 0) {
        await refreshToken();
      }
      console.log(firstName)
      console.log(lastName)
      console.log(username)
      console.log(domain)
      await axios.post(`https://campaigns.zoho.com/api/v1.1/json/listsubscribe?resfmt=JSON&listkey=3z66b420de9a15a54b5eaac9faf0317040ce77f9682ceecbb44e8569bfd024ea9e&contactinfo={First+Name%3A${firstName}%2CLast+Name%3A${lastName}%2CContact+Email%3A${username}%40${domain}}&source=String`,
       {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(res => console.log(res)).catch(err => console.log(err));
      setLoading(false);
    } catch (e) {
      if (e?.response?.status === 401) {
        const isTokenRetrieved = await refreshToken();
        if (isTokenRetrieved) {
          await addContact(firstName, lastName, username, domain);
        }
      }
      // Handle the error
      setLoading(false)
      console.error(e);
    }
  };

  function splitEmail(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      const domain = email.substring(atIndex + 1);
      return { username, domain };
    } else {
      // Handle the case where there is no "@" symbol in the email.
      return null;
    }
  }

  function splitFullName(fullName) {
    // Split the full name by space
    const nameParts = fullName.split(' ');
  
    if (nameParts.length >= 2) {
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' '); // Join any remaining parts as the last name
  
      return { firstName, lastName };
    } else {
      // Handle cases where there is no space to separate the first and last name.
      // You might want to return an error or handle it differently.
      return null;
    }
  }
  // let accessToken =''
  // config = {
  //     client_id: '1000.WY20WPR3DXD78EM9PEJEZIU8D2H76N', // The client ID obtained from Zoho
  //     refresh_token: '1000.a24961543757599de4a3820585263355.00c754c528829e5a53046db22a07b06d', // The refresh token obtained from Zoho
  //     client_secret: '1987033df4d63deaaef0cecd0d4973260784601dd6', // The client secret obtained from Zoho
  //     grant_type: 'refresh_token', // Grant type for OAuth2
  // }

  // const refreshToken = async () => {
  //   try {
  //     const {data} = await axios.post('https://accounts.zoho.com/oauth/v2/token', {}, {param: config})
  //     accessToken = `Zoho-oauthtoken ${data.access_token}` 
  //     return true
  //   } catch (error) {
  //     Sentry.captureException(e)
  //     return false
  //   }     
  // }

  // const createCampaign = async (payload) = {
  //   try {
  //     if(accessToken?.length === 0) {
  //       await refreshToken();
  //       await axios.post(`https://campaigns.zoho.com/api/v1.1/json/listsubscribe?resfmt=JSON&listkey=3z66b420de9a15a54b5eaac9faf0317040ce77f9682ceecbb44e8569bfd024ea9e&contactinfo=%7BFirst+Name%3A${firstName}%2CLast+Name%3A${lastName}%2CContact+Email%3A${username}9%40${domain}%7D`, {headers: {Authorization: `Zoho-oauthtoken ${accessToken}`, "Content-Type": "application/x-www-form-urlencoded"}})
  //     }
  //   } catch (error) {
  //     if(error?.response?.status === 401) {
  //       const isTokenRetrieved = await refreshToken()
  //       if (isTokenRetrieved) {
  //         await createCampaign()
  //       }
  //     }
  //   }
  // }

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
    const {username, domain} = splitEmail(payload.email)
    const {firstName, lastName} = splitFullName(payload.firstname)
    console.log(firstName)
    console.log(lastName)
    console.log(payload);
    try {
      setLoading(true);
      const res = await axios.post(
        `https://campaigns.zoho.com/api/v1.1/json/listsubscribe?resfmt=JSON&listkey=3z66b420de9a15a54b5eaac9faf0317040ce77f9682ceecbb44e8569bfd024ea9e&contactinfo=%7BFirst+Name%3A${firstName}%2CLast+Name%3A${lastName}%2CContact+Email%3A${username}9%40${domain}%7D`,
        // "https://users.go-mailer.com/api/contacts",
        // "https://lfgwtf-zgph.maillist-manage.net/weboptin.zc"
        // {
        //   email: payload.email,
        //   firstname: payload.firstname,
        // },
        {
          headers: {
            // Authorization: `Bearer ${key}`,
            // "content-type": "application/json",
            Authorization: `Zoho-oauthtoken 1000.83717d977d82caf6d52c122aae87be08.54e530c8eddb9206c628759fb7735447`,
            "Content-Type": "application/x-www-form-urlencoded",
            // "Access-Control-Allow-Origin": "*"
          },
        }
      )
      .then(res => console.log(res));
      console.log(res)
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
  const ZohoAPI = axios.create({
    // baseURL: 'https://api.grazacacademy.com/api/v1',
    baseURL: 'https://campaigns.zoho.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*"
    }
})
const joinCampaign = (trialURL) => {
  return ZohoAPI.post(trialURL)
  }

const tokenRefreshHandler = () => {
  axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.4a123ee284904de31c0140913804f232.08da0546c4fd73fdd95b6a029b7670ef&client_id=1000.WY20WPR3DXD78EM9PEJEZIU8D2H76N&client_secret=1987033df4d63deaaef0cecd0d4973260784601dd6&grant_type=refresh_token')
      .then(res => {
        setAccessToken(res.access_token)
      })
}
setInterval(tokenRefreshHandler, 3600000)

  const handleSubmit2 = (e) => {
    e.preventDefault()
    setLoading(true);
    const {username, domain} = splitEmail(payload.email)
    const {firstName, lastName} = splitFullName(payload.firstname)
    addContact(firstName, lastName, username, domain)
    // const trialURL = `https://campaigns.zoho.com/api/v1.1/json/listsubscribe?resfmt=JSON&listkey=3z66b420de9a15a54b5eaac9faf0317040ce77f9682ceecbb44e8569bfd024ea9e&contactinfo={First+Name%3A${firstName}%2CLast+Name%3A${lastName}%2CContact+Email%3A${username}%40${domain}}&source=String`
    // joinCampaign(trialURL)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    // ZohoAPI.POST(`/api/v1.1/json/listsubscribe?resfmt=JSON&listkey=3z66b420de9a15a54b5eaac9faf0317040ce77f9682ceecbb44e8569bfd024ea9e&contactinfo=%7BFirst+Name%3A${firstName}%2CLast+Name%3A${lastName}%2CContact+Email%3A${username}%40${domain}%7D`)
    
  }

  return (
    <>
      <NewsletterModal setNews={setNews}>
        <form className={classes.main} onSubmit={handleSubmit2}>
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
                placeholder="Your email"
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
                payload.firstname.length < 2 ||
                payload.email.length < 3 ||
                loading
              }
            >
            {/* <button
              type="submit"
            > */}
              {loading ? <img src={LoaderGif} alt="Loading" /> : "Submit"}
            </button>
          </div>
          {/* <input type="hidden" id="fieldBorder" value="" />
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
					<span style={{display: "none"}} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span> */}
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
