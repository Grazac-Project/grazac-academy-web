import { useEffect, useRef, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const GraduateForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState("");
  const [amount, setAmount] = useState("");
  const [course, setCourse] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("");
  const [message, setMessage] = useState("");
  const [txref, setTxref] = useState("");
  const [fetchCourses, setFetched] = useState([]);
  const formInfo = useRef();
  const [showPayment, setShowPayment] = useState(true);

  useEffect(() => {
    document.title = "Join our Graduate Track - Grazac Academy";
    window.scrollTo(0, 0);
    const method = window.location.search.substring(9);
    if (method) {
      setPaymentPlan(method);
      setShowPayment(false);
    }
    fetch("https://grazacacademy.com/graduate/courses")
      .then((resp) => resp.json())
      .then((resp) => {
        setFetched(resp.data);
      })
      .catch((error) => {
        console.log(
          "An error occurred when fetching course details, refreshing..."
        );
        window.location.reload();
      });
  }, []);

  const courseChange = (e) => {
    setCourse(e.target.value);
    var rc = e.target.options[e.target.selectedIndex].dataset.index;
    setAmount(fetchCourses[rc].discounted_tuition);
  };

  const choosePlan = (e) => {
    if(e.target.value === 'installmental') {
      setAmount(105000);
    } else if(e.target.value === 'monthly') {
      setAmount(55000);
    } else {
      setAmount(200000);
    }
    setPaymentPlan(e.target.value);
  };

  const config = {
    public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
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
      title: "Grazac Graduate Accelerator Plan",
      description: `Payment for ${course} at Grazac Graduate Accelerator Plan`,
      logo: "https://grazac.com.ng/assets/images/favicon.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      handleFlutterPayment({
        callback: (response) => {
          if (response.status === "successful") {
            setTxref(response.tx_ref);
            //window.scroll(0, formInfo.current.offsetTop);
            document.querySelector(".form-info").textContent =
              "Submitting, please wait...";
            document
              .querySelector("#submit-btn")
              .setAttribute("disabled", "disabled");
            fetch("https://grazacacademy.com/graduate/register", {
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
                paymentPlan: paymentPlan,
                expectation: message,
                tuition: amount,
                tx_ref: txref,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.success === true) {
                  document.querySelector(".form-info").textContent =
                    "Your registration was successful, kindly check your mailbox for further details";
                  document.querySelector("#submit-btn").removeAttribute("disabled");
                  setFirstName("");
                  setLastName("");
                  setMessage("");
                  setPhone("");
                  setEmail("");
                  setCourse("");
                } else {
                  document.querySelector(".form-info").textContent = data.msg;
                  document.querySelector("#submit-btn").removeAttribute("disabled");
                }
              })
              .catch((err) => {
                document.querySelector(".form-info").textContent =
                  "Something went wrong, please try again";
                document.querySelector("#submit-btn").removeAttribute("disabled");
              });

              let formData = new FormData();
              formData.append("name", firstname);
              formData.append("email", email);
              axios
                .post("http://grazac.com.ng/newsletter/subscribe", formData, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((resp) => resp.data)
                .then((data) => {
                  if (data.success === true) {
                    console.log("Added to newsletter");
                  } else {
                    console.log("Not Added to newsletter");
                  }
                })
                .catch((err) => {
                  console.log(`An error occured, please try again ${err}`);
                });

          } else {
            alert('Payment not successful');
          }
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: (response) => {
          if (response === true){
            console.log(response);
            //Payment has been cancelled
            fetch("https://grazacacademy.com/graduate/register", {
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
                paymentPlan:paymentPlan,
                tuition: amount,
                expectation: message,
                status:"Attempted Payment"
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                console.log(data);
                if (data.success === true) {
                  setFirstName("");
                  setLastName("");
                  setMessage("");
                  setPhone("");
                  setEmail("");
                  setCourse("");
                } 
              })
              .catch((err) => {
                console.log(err)
              });
            }
        },
      });
    } else {
      alert("Please select a course");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="contact_layer">
          <div className="form_top">
            <div>
              <h1>Grazac Academy Graduate Accelerator</h1>
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
                    />
                  </div>
                  <div className="form-flexdiv-2">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="ex. john@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div>
                  <label>
                    Our classes will be on Monday, Wednesdays and Fridays, will
                    you be available? <span>*</span>
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
                  <label>
                    Kindly choose your preferred course <span>*</span>
                  </label>
                  <br />
                  <select
                    className="input"
                    onChange={courseChange}
                    required="required"
                  >
                    <option value="">---Choose course---</option>
                    {fetchCourses.map((item, index) => (
                      <option key={index} data-index={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {showPayment && (
                  <div>
                    <label>
                      Kindly choose your preferred payment plan <span>*</span>
                    </label>
                    <br />
                    <select
                      className="input"
                      onChange={choosePlan}
                      required="required"
                    >
                      <option value="">---Choose Plan---</option>
                      <option value="full">Full Payment</option>
                      <option value="installmental">Installmental Payment</option>
                      <option value="monthly">Monthly Payment</option>
                    </select>
                  </div>
                )}
                <div>
                  <label>Amount</label>
                  <br />
                  <p className="show-amount">
                    ₦{amount ? new Intl.NumberFormat().format(amount) : "0"}
                  </p>
                </div>
                {/* <div>
                  <label>
                    Kindly select a package. Our Part-time students have on-site
                    classes only on Saturdays.{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      className="radio-input"
                      id="full-time"
                      name="plan"
                      value="full-time"
                      checked={plan === "full-time"}
                      onChange={(e) => setPlan(e.target.value)}
                      required="required"
                    />
                    Full time
                  </label>
                  <label>
                    <input
                      type="radio"
                      className="radio-input"
                      id="part-time"
                      name="plan"
                      value="part-time"
                      checked={plan === "part-time"}
                      onChange={(e) => setPlan(e.target.value)}
                      style={{ marginLeft: "30px" }}
                      required="required"
                    />
                    Part time
                  </label>
                </div> */}
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
                <div>
                  <p>
                  <strong>Note:</strong> Intending corps member who are yet to be fully posted to Ogun State are advised to think twice as we currently don't offer refunds and we run physical classes
                  </p>
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

export default GraduateForm;
