import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "../utils";

const ComingSoon = () => {
  const { name } = useParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    window.scroll(0, 0);
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    document.querySelector("#subscribe-btn").setAttribute('disabled', 'disabled');
    document.querySelector("#subscribe-btn").textContent='Please Wait..';
    fetch('http://emails.grazac.com.ng/newsletter/subscribe', {
        method: 'POST',
        CORS:'no-cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:"Subscriber",
            email:email
        })
    })
    .then(resp => resp.json())
    .then(data => {
        if(data.success === true){
          document.querySelector("#subscribe-btn").removeAttribute('disabled');
          document.querySelector("#subscribe-btn").textContent='Subscribe';
          console.log('Added to newsletter')
        }else{
            alert('An error occured, please try again');
            document.querySelector("#subscribe-btn").removeAttribute('disabled');
            document.querySelector("#subscribe-btn").textContent='Subscribe';
        }
            
        
    })
    .catch(err => {
            alert('An error occured, please try again');
            document.querySelector("#subscribe-btn").removeAttribute('disabled');
            document.querySelector("#subscribe-btn").textContent='Subscribe';
    })
  }

  return (
    <div className="coming">
      <div className="coming__hero">
        <Navbar />

        <div className="coming__container">
          <div className="coming__container--left">
            <div>
              <h3>COMING SOON</h3>
              <h1>Get notified when we launched</h1>

              <form>
                  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <button onClick={onSubmit}  id="subscribe-btn" >Subscribe</button>
              </form>
            </div>
          </div>
          <div className={cn("coming__container--right", `coming__container--right-${name}`)}>&nbsp;</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ComingSoon;