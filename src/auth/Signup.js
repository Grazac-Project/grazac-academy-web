import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import PrimaryBtn from "../components/PrimaryBtn";
import Grazac from "../images/grazac.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] =  useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  
  const handleEmailChange = e => {
    e.preventDefault();
    setEmail(e.target.value)

    if (!email) setEmailErr("");
    let err = validEmailRegex.test(e.target.value) ? "" : "please enter a valid email address";
    setEmailErr(err);
  }

  const handlePasswordChange = e => {
    e.preventDefault();
    setPassword(e.target.value)
  }

  return(
    <div className="auth">
      <div className="auth__body">
        <div className="auth__hero">
          <img src={Grazac} alt="grazac" />
        </div>

        <div className="auth__form">
          <div className="auth__form--container">
            <h1>Create Account</h1>

            <form className="form">
              <div className="form__group">
                <label for="email">Email address</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} className={cn("form__input", {"form__input--err": emailErr})}/>
              </div>

              <div className="form__group--half">
                <div className="form__group">
                  <label for="phone">Phone </label>
                  <input type="email" id="email" value={phone} onChange={e => setPhone(e.target.value)} className={cn("form__input")}/>
                </div>

                <div className="form__group">
                  <label for="gender">Gender</label>
                    <select id="cars" className="form__input" onChange={e => setGender(e.target.value)}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="">I'm not sure</option>
                    </select>
                </div>
              </div>

              <div className="form__group">
                <label for="pass">Password</label>
                <input type="password" id="pass" value={password} onChange={handlePasswordChange} className="form__input"/>
              </div>

              <Link className="form__link">Forgot password?</Link>

              <button type="submit" className="form__btn">
                <PrimaryBtn>Create Account</PrimaryBtn>
              </button>
            </form>

            <div className="auth__line">
              <div>&nbsp;</div>
              <span>or</span>
              <div>&nbsp;</div>
            </div>
          </div>

          <div className="auth__btns">
            <Link className="auth__btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.43236 12.0862L3.7362 14.6851L1.19174 14.7389C0.431322 13.3285 0 11.7148 0 9.99997C0 8.34175 0.403276 6.77802 1.11811 5.40112H1.11866L3.38394 5.81643L4.37627 8.06812C4.16858 8.67362 4.05537 9.32361 4.05537 9.99997C4.05545 10.734 4.18842 11.4373 4.43236 12.0862Z" fill="#FBBB00"/>
                <path d="M19.824 8.1322C19.9389 8.73712 19.9988 9.36183 19.9988 10.0003C19.9988 10.7162 19.9235 11.4146 19.7801 12.0882C19.2933 14.3805 18.0213 16.3821 16.2593 17.7986L16.2587 17.798L13.4055 17.6524L13.0017 15.1316C14.1709 14.4459 15.0846 13.3728 15.5659 12.0882H10.2188V8.1322H15.644H19.824Z" fill="#518EF8"/>
                <path d="M16.2593 17.798L16.2599 17.7985C14.5462 19.176 12.3693 20.0002 9.99953 20.0002C6.19134 20.0002 2.88041 17.8716 1.19141 14.7392L4.43203 12.0865C5.27651 14.3403 7.45066 15.9447 9.99953 15.9447C11.0951 15.9447 12.1215 15.6486 13.0022 15.1315L16.2593 17.798Z" fill="#28B446"/>
                <path d="M16.3818 2.30216L13.1423 4.95431C12.2308 4.38455 11.1533 4.05541 9.99894 4.05541C7.39237 4.05541 5.17756 5.7334 4.37538 8.06802L1.11773 5.40102H1.11719C2.78146 2.19228 6.13415 0 9.99894 0C12.4253 0 14.65 0.864285 16.3818 2.30216Z" fill="#F14336"/>
              </svg>

              Google
            </Link>

            <Link className="auth__btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1908 0H1.80916C0.81 0 0 0.81 0 1.80916V18.1908C0 19.19 0.81 20 1.80916 20H18.1908C19.19 20 20 19.19 20 18.1908V1.80916C20 0.81 19.19 0 18.1908 0ZM6.18885 17.2693C6.18885 17.5601 5.95314 17.7958 5.66236 17.7958H3.4212C3.13042 17.7958 2.89471 17.5601 2.89471 17.2693V7.8745C2.89471 7.58372 3.13042 7.34801 3.4212 7.34801H5.66236C5.95314 7.34801 6.18885 7.58372 6.18885 7.8745V17.2693ZM4.54178 6.46241C3.36592 6.46241 2.41267 5.50916 2.41267 4.3333C2.41267 3.15743 3.36592 2.20419 4.54178 2.20419C5.71764 2.20419 6.67089 3.15743 6.67089 4.3333C6.67089 5.50916 5.7177 6.46241 4.54178 6.46241ZM17.901 17.3117C17.901 17.5791 17.6843 17.7958 17.417 17.7958H15.012C14.7447 17.7958 14.528 17.5791 14.528 17.3117V12.905C14.528 12.2476 14.7208 10.0243 12.81 10.0243C11.3279 10.0243 11.0272 11.5461 10.9669 12.2291V17.3117C10.9669 17.5791 10.7502 17.7958 10.4828 17.7958H8.15681C7.88948 17.7958 7.67272 17.5791 7.67272 17.3117V7.83209C7.67272 7.56476 7.88948 7.34801 8.15681 7.34801H10.4828C10.7501 7.34801 10.9669 7.56476 10.9669 7.83209V8.65173C11.5164 7.82696 12.3332 7.19037 14.0722 7.19037C17.9231 7.19037 17.901 10.7881 17.901 12.7648V17.3117Z" fill="#0077B7"/>
              </svg>

              Linkedln
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;