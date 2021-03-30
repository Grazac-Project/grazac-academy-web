import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useParams } from "react-router-dom";

const UndergraduateCoursePayment = () => {
  const { id } = useParams();
  const [ payment, setPayment ] = useState(true);
  const [ plan, setPlan ] = useState('');
  const [ amount, setAmount ] = useState(150000);
  const [ fetched, setFetched ] = useState({
    firstname: '',
    lastname: '',
    email: '',
    tuition: '',
    course: ''
  });

  useEffect(() => {
    document.title = 'Payment - Grazac Academy'
    fetch(`https://grazacacademy.com/graduate/registration/details/${id}`)
    .then(resp => resp.json())
    .then(data => {
      setFetched(data.data)
      if(data.data.tx_ref.length) {
        document.querySelector(".form-info").textContent = "You have completed your registration";
        setPayment(false);
      }
    })
    .catch(err => {
      document.querySelector(".form-info").textContent = "Something went wrong, refreshing...";
      window.location.reload();
      document.querySelector("#form-btn").setAttribute('disabled', 'disabled');
    })
  }, []);

  useEffect(_ => {
    if(plan === 'full') {
      setAmount(150000);
      setPayment(true);
    } else if(plan === 'installment') {
      setAmount(40000);
      setPayment(true);
    } else if(plan === 'income-split') {
      setAmount(50000);
      setPayment(true);
    } else {
      setPayment(false);
    }
  }, [plan])

  const config = {
    public_key: 'FLWPUBK-006bdc82ad878f1518af32f44af6478f-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: fetched.email,
      phonenumber: fetched.phone,
      name: fetched.firstname + " " + fetched.lastname,
    },
    customizations: {
      title: 'Grazac Graduate Accelerator Plan',
      description: `Payment for ${fetched.course} at Grazac Graduate Accelerator Plan`,
      logo: 'https://grazac.com.ng/assets/images/favicon.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onSubmit = () => {
    if(payment) {
      handleFlutterPayment({
        callback: (response) => {
            if (response.status === 'successful') {
                fetch("https://grazacacademy.com/graduate/registration/update", {
                  method: 'POST',
                  headers: {
                  'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    firstname: fetched.firstname,
                    email: fetched.email,
                    course: fetched.course,
                    tx_ref: response.tx_ref,
                    id: id,
                    plan: plan
                  })
                })
                .then(resp => resp.json())
                .then(data => {
                  if(data.success === true) {
                    document.querySelector(".form-info").textContent = "Your payment was successful.";
                  }
                })
            };
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      });
    } else {
      alert('You have completed your registration');
    }
  }

  return (
    <div>
      <Navbar/>
        <div>
          <div className="contact_layer">
            <div className="form_top">
              <div>
                <h1>Payment</h1>
              </div>
              </div>
              <div className="container">
                <div className="form">
                  <div className="form-info">Click on Pay Now to pay.</div>
                  <div className="form-flexdiv">
                    <div className="form-flexdiv-1" >
                      <label>First Name  <span>*</span></label>
                      <input className="input" type="text" maxLength="30" readOnly value={fetched.firstname} style={{textTransform: "capitalize"}}/>
                    </div>
                      <div className="form-flexdiv-2">
                          <label>Last Name  <span>*</span></label>
                          <input className="input" type="text" maxLength="30" readOnly value={fetched.lastname} style={{textTransform: "capitalize"}}/>
                      </div>
                    </div>
                      <div className="form-flexdiv">
                          <div className="form-flexdiv-1" >
                              <label>Mobile Number  <span>*</span></label>
                              <input className="input" type="text" maxLength="11" readOnly value={fetched.phone}/>
                          </div>
                          <div className="form-flexdiv-2">
                              <label>Email  <span>*</span></label>
                              <input className="input" type="email" maxLength="30" readOnly value={fetched.email}/>
                          </div>
                      </div>
                      <div>
                          <label>Kindly choose your preferred course  <span>*</span></label><br/>
                          <input className="input" type="text" readOnly value={fetched.course}/>
                      </div>
                      <div>
                          <label>Amount</label><br/>
                          <p className="show-amount">
                              ₦{ new Intl.NumberFormat().format(fetched.tuition) }
                          </p>
                      </div>

                      <div>
                          <label>Select payment plan</label><br/>
                          <label style={{marginRight:'30px'}}><input
                              type="radio"
                              className="radio-input"
                              id="full-time"
                              name="plan"
                              value="full"
                              checked={plan === "full"}
                              onChange={(e) => setPlan(e.target.value)}
                              style={{marginRight:'5px'}}
                          /> Full (One-Off Payment)</label>
                          <label><input
                              type="radio"
                              className="radio-input"
                              id="part-time"
                              name="plan"
                              value="installment"
                              checked={plan === "installment"}
                              onChange={(e) => setPlan(e.target.value)}
                          /> ₦40,000 * 4 Installment Payment</label>
                          <label><input
                              type="radio"
                              className="radio-input"
                              id="part-time"
                              name="plan"
                              value="income-split"
                              checked={plan === "income-split"}
                              onChange={(e) => setPlan(e.target.value)}
                          /> ₦50,000 upfront + 15% Split Income</label>
                      </div>
                     
                      <div className="form-privacy" >
                        <a className="download-brochure" onClick={onSubmit} id="form-btn">Pay Now</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default UndergraduateCoursePayment;