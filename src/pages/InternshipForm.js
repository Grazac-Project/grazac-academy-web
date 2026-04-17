import { useEffect, useRef, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InternshipForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState("");
  const [amount, setAmount] = useState(40000);
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [fetchCourses, setFetched] = useState([]);
  const formInfo = useRef();

  useEffect(() => {
    document.title = "Internship Application - Grazac Academy";
    window.scrollTo(0, 0);
    fetch("https://grazacacademy.com/graduate/courses")
      .then((resp) => resp.json())
      .then((resp) => {
        setFetched(resp.data);
      })
      .catch((error) => {
        window.location.reload();
      });
  }, []);

  const config = {
    public_key: "FLWPUBK-b765ab41a14a9a8258992eafe205259f-X",

    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: phone,
      name: firstname + " " + lastname,
    },
    customizations: {
      title: "Grazac Internship",
      description: `Payment for ${course} at Grazac Internship`,
      logo: "https://grazac.com.ng/assets/images/favicon.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onSubmit = (e) => {
    e.preventDefault();
    if (availability === "1") {
      var elmnt = document.getElementById("form_top");
      elmnt.scrollIntoView();
      //window.scroll(0, formInfo.current.offsetTop);
      handleFlutterPayment({
        callback: (response) => {
          if (response.status === "successful") {
            document.querySelector(".form-info").textContent =
              "Submitting, please wait...";
            document
              .querySelector("#submit-btn")
              .setAttribute("disabled", "disabled");
            fetch("https://grazacacademy.com/undergraduate/intern", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                course: course,
                expectation: message,
                transaction_id: response.transaction_id,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.success === true) {
                  document.querySelector(".form-info").textContent =
                    "Your registration was successful, kindly check your mailbox for further details";
                  document
                    .querySelector("#submit-btn")
                    .removeAttribute("disabled");
                  setFirstName("");
                  setLastName("");
                  setMessage("");
                  setPhone("");
                  setEmail("");
                  setCourse("");
                } else {
                  document.querySelector(".form-info").textContent = data.msg;
                  document
                    .querySelector("#submit-btn")
                    .removeAttribute("disabled");
                }
              })
              .catch((err) => {
                document.querySelector(
                  ".form-info"
                ).textContent = `Your payment was successful but something wrong while saving your details. 
                Kindly mail us at hello@grazacacademy.com`;
                document
                  .querySelector("#submit-btn")
                  .removeAttribute("disabled");
              });
          }
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    } else {
      alert("You have to be available to register");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="contact_layer">
          <div className="form_top" id="form_top">
            <div>
              <h1>Grazac Internships.</h1>
              <p>
                We are bridging the gap between unemployment and entry-level
                jobs in the technology industry.
              </p>
            </div>
          </div>
          <div className="container" ref={formInfo}>
            <div className="form">
              <form onSubmit={onSubmit}>
                <div className="form-info">
                  Note: Fields with <span>*</span> are required
                </div>
                <div className="form-flexdiv">
                  <div className="form-flexdiv-1">
                    <label>
                      First Name <span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="ex. John"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required="required"
                    />
                  </div>
                  <div className="form-flexdiv-2">
                    <label>
                      Last Name <span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="ex. Doe"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-flexdiv">
                  <div className="form-flexdiv-1">
                    <label>
                      Mobile Number <span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="ex. 08133333333"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required="required"
                      pattern=".{11}"
                      title="Phone number is invalid"
                    />
                  </div>
                  <div className="form-flexdiv-2">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      className="input"
                      type="email"
                      placeholder="ex. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div>
                  <label>
                    Our classes will be on Tuesdays and Thursdays, will you be
                    available? <span>*</span>
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      className="radio-input"
                      id="yes"
                      name="availability"
                      value="1"
                      required="required"
                      checked={availability === "1"}
                      onChange={(e) => setAvailability(e.target.value)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      className="radio-input"
                      id="no"
                      name="availability"
                      value="0"
                      required="required"
                      checked={availability === "0"}
                      onChange={(e) => setAvailability(e.target.value)}
                      style={{ marginLeft: "30px" }}
                    />
                    No
                  </label>
                </div>
                <div>
                  <label>Course</label>
                  <br />
                  <p className="show-amount">Website Development</p>
                </div>
                <div>
                  <label>Amount</label>
                  <br />
                  <p className="show-amount">
                    ₦{new Intl.NumberFormat().format(amount)}
                  </p>
                </div>

                <div>
                  <label>
                    What do you expect at the end of this training?{" "}
                    <span>*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Say something ..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required="required"
                  />
                </div>
                <div className="form-privacy">
                  <button
                    className="download-brochure"
                    type="submit"
                    id="submit-btn"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipForm;
