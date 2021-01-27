import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


const UndergraduateForm = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [institution, setInstitution] = useState('');
    const [availability, setAvailability] = useState('');
    const [course, setCourse] = useState('');
    const [ message, setMessage ] = useState('');
    const [fetchCourses, setFetched] = useState([]);
    const [amount, setAmount] = useState('');

    const config = {
        public_key: 'FLWPUBK-006bdc82ad878f1518af32f44af6478f-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
          phonenumber: phone,
          name: firstname+" "+lastname,
        },
        customizations: {
          title: 'Grazac Undergraduate Accelerator Plan',
          description: `Payment for ${course} at Grazac Undergraduate Accelerator Plan`,
          logo: 'https://grazac.com.ng/assets/images/favicon.png',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);

    useEffect(() => {
        document.title = 'Join our Undergraduate Track - Grazac Academy';
        window.scrollTo(0,0);
        fetch('https://grazacacademy.com/courses/undergraduate',)
            .then(resp => resp.json())
            .then(resp => {
                setFetched(resp.data);
                console.log(resp.data)
            })
            .catch(error => {
                console.log('An error occured')
            })
    }, []);

    const courseChange = (e) => {
        setCourse(e.target.value)
        //console.log(e.target.dataset.index)
        var rc = e.target.options[e.target.selectedIndex].dataset.index;
        setAmount( fetchCourses[rc].discounted_tuition );
    }

    const onSubmit = () => {
        if(amount){
            console.log(availability);
            handleFlutterPayment({
                callback: (response) => {
                   if (response.status === 'successful') {
                       fetch('https://grazacacademy.com/undergraduate/register', {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                firstname:firstname,
                                lastname:lastname,
                                email:email,
                                phone:phone,
                                institution:institution,
                                availability:availability,
                                course:course,
                                expectation:message,
                                package:'Full time',
                                tx_ref: response.tx_ref
                            })
                       })
                   };
                    closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => {},
            });
        } else {
            alert('Please select a course');
        }
    }

    return(
        <div>
            <Navbar/>
            <div>
                <div className="contact_layer">
                    <div className="form_top">
                        <div>
                            <h1>Grazac Academy Undergraduate Accelerator</h1>
                            <p>Our training starts very soon in FUNAAB, why not register now.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="form">
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>First Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. John" value={firstname} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Last Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. Doe" value={lastname} onChange={e => setLastName(e.target.value)}  />
                                </div>
                            </div>
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>Mobile Number  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. 08133333333" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Email  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
                                </div>
                            </div>
                            <div>
                                <label>Select your institution  <span>*</span></label><br/>
                                <select className="input" onChange={e => setInstitution(e.target.value)}>
                                    <option>---Choose institution---</option>
                                    <option>Federal University of Agriculture, Abeokuta (FUNAAB)</option>
                                    <option>Federal College of Education, Osiele Abeokuta (FCE)</option>
                                    <option>Olabisi Onabanjo University (AGO-IWOYE)</option>
                                    <option>Olabisi Onabanjo University (IBOGUN)</option>
                                    <option>University of Ibadan (UI)</option>
                                    <option>Obafemi Awolowo University (OAU)</option>
                                </select>
                            </div>
                            <div>
                                <label>Our classes will be on Weekends, will you be available ? </label><br/>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="yes"
                                    name="availability"
                                    value="1"
                                    checked={availability === "1"}
                                    onChange={(e) => setAvailability(e.target.value)}
                                />Yes</label>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="no"
                                    name="availability"
                                    value="0"
                                    checked={availability === "0"}
                                    onChange={(e) => setAvailability(e.target.value)}
                                    style={{marginLeft:'30px'}}
                                />No</label>
                            </div>
                            <div>
                                <label>Kindly choose your preferred course  <span>*</span></label><br/>
                                <select className="input" onChange={courseChange}>
                                    <option>---Choose course---</option>
                                    {
                                        fetchCourses.map((item,index) => (
                                            <option key={index} data-index={index}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label>Amount</label><br/>
                                <p className="show-amount">
                                    ₦{
                                        (amount) ? new Intl.NumberFormat().format(amount) : '0'
                                    }
                                </p>
                            </div>
                            <div>
                                <label>What do you expect at the end of this training?  <span>*</span></label>
                                <textarea  type="text" placeholder="Write something" value={message} onChange={e => setMessage(e.target.value)}  />
                            </div>
                            <div className="form-privacy" >
                                <a className="download-brochure" onClick={onSubmit}>Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UndergraduateForm;