import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "../utils";
import axios from "axios";

const ComingSoon = () => {
  const { name } = useParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    document
      .querySelector("#subscribe-btn")
      .setAttribute("disabled", "disabled");
    document.querySelector("#subscribe-btn").textContent = "Please Wait..";

    let formData = new FormData();

    formData.append("name", "Subscriber");
    formData.append("email", email);
    axios
      .post("http://emails.grazac.com.ng/newsletter/subscribe", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => resp.data)
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          document.querySelector("#subscribe-btn").removeAttribute("disabled");
          document.querySelector("#subscribe-btn").textContent = "Subscribe";
          alert("You have successfully subscribed");
          console.log(data);
        } else {
          document.querySelector("#subscribe-btn").removeAttribute("disabled");
          document.querySelector("#subscribe-btn").textContent = "Subscribe";
          alert(data.msg);
        }
      })
      .catch((err) => {
        alert(`An error occured, please try again ${err}`);
        document.querySelector("#subscribe-btn").removeAttribute("disabled");
        document.querySelector("#subscribe-btn").textContent = "Subscribe";
      });
  };

  return (
    <div className="coming">
      <Navbar />
      <div className="coming__hero">

        <div className="coming__container">
          <div className="coming__container--left">
            <div>
              <h3>COMING SOON</h3>
              <h1>Get notified when we launched</h1>

              <form>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={onSubmit} id="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div
            className={cn(
              "coming__container--right",
              `coming__container--right-${name}`
            )}
          >
            &nbsp;
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
