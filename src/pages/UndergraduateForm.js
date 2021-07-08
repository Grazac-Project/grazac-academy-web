import { useEffect, useRef, useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const UndergraduateForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [institutionlist, setInstitutionlist] = useState([]);
  const [availability, setAvailability] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [txref, setTxref] = useState("");
  const [fetchCourses, setFetched] = useState([]);
  const [amount, setAmount] = useState(0);

  const formInfo = useRef();

  useEffect(() => {
    document.title = "Join our Undergraduate Track - Grazac Academy";
    window.scrollTo(0, 0);
    fetch("https://grazacacademy.com/undergraduate/courses")
      .then((resp) => resp.json())
      .then((resp) => {
        setFetched(resp.data);
      })
      .catch((error) => {
        console.log(
          "An error occurred when fetching course details, refreshing..."
        );
        console.log(error)
        //window.location.reload();
      });

      //endpoint to fetch all institutions
      fetch("https://grazacacademy.com/undergraduate/institutions")
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setInstitutionlist(resp.data);
        })
        .catch((error) => {
          console.log(
            "An error occurred when fetching all institutions, refreshing..."
          );
          console.log(error)
        });
  }, []);

  const courseChange = (e) => {
    setCourse(e.target.value);
    var rc = e.target.options[e.target.selectedIndex].dataset.index;
    setAmount(fetchCourses[rc].discounted_tuition);
  };

  const config = {
    public_key: 'FLWPUBK-006bdc82ad878f1518af32f44af6478f-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phonenumber: phone,
      name: firstname + " " + lastname,
    },
    customizations: {
      title: 'Grazac Undergraduate Accelerator Plan',
      description: `Payment for ${course} at Grazac Undergraduate Accelerator Plan`,
      logo: 'https://grazac.com.ng/assets/images/favicon.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onSubmit = () => {
    if (amount) {
      handleFlutterPayment({
        callback: (response) => {
            if (response.status === 'successful') {
              setTxref(response.tx_ref);
              //window.scroll(0, formInfo.current.offsetTop);
              document.querySelector(".form-info").textContent =
                "Submitting, please wait...";
              document
                .querySelector("#submit-btn")
                .setAttribute("disabled", "disabled");
              fetch("https://grazacacademy.com/undergraduate/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  firstname: firstname,
                  lastname: lastname,
                  email: email,
                  phone: phone,
                  institution: institution,
                  course: course,
                  expectation: message,
                  tuition: amount,
                  tx_ref: txref,
                }),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  console.log(data);
                  if (data.success === true) {
                    document.querySelector(".form-info").textContent =
                      "Your registration was successful, kindly check your mailbox for further details.";
                    document.querySelector("#submit-btn").removeAttribute("disabled");
                    setFirstName("");
                    setLastName("");
                    setMessage("");
                    setPhone("");
                    setEmail("");
                    setInstitution("");
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
                .post("https://grazac.com.ng/newsletter/subscribe", formData, {
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
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      });

    } else {
      alert("Kindly select a course");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="contact_layer">
          <div className="form_top" ref={formInfo}>
            <div>
              <h1>Grazac Academy Undergraduate Accelerator</h1>
              <p>
                Classes are on-site and will only
                be on weekends.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="form">
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
                    maxLength="30"
                    placeholder="ex. John"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-flexdiv-2">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input
                    className="input"
                    type="text"
                    maxLength="30"
                    placeholder="ex. Doe"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
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
                    maxLength="11"
                    placeholder="ex. 08133333333"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-flexdiv-2">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    className="input"
                    type="email"
                    maxLength="30"
                    placeholder="ex. john@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>
                  Select your institution <span>*</span>
                </label>
                <br />
                <select
                  className="input"
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                >
                  <option>---Choose institution---</option>
                  {institutionlist.length ? (
                    institutionlist.map((item, index) =>  (
                    <option value={item.ref} key={index}>{item.name}</option>)))
                    :(<option>Loading Institutions ...</option>)}
                </select>
              </div>
              <div>
                <label>
                  Our classes will be on Weekends, will you be available ?{" "}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    className="radio-input"
                    id="yes"
                    name="availability"
                    value="1"
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
                <select className="input" onChange={courseChange}>
                  <option>---Choose course---</option>
                  {fetchCourses.map((item, index) => (
                    <option key={index} data-index={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Amount</label>
                <br />
                <p className="show-amount">
                  ₦{amount ? new Intl.NumberFormat().format(amount) : "0"}
                </p>
              </div>
              <div>
                <label>
                  What do you expect at the end of this training? <span>*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write something"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-privacy">
                <a
                  href="#v"
                  className="download-brochure"
                  onClick={onSubmit}
                  id="submit-btn"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UndergraduateForm;
