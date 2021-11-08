import {
  useState,
  useRef,
  lazy,
  Suspense,
} from "react";
import "./scss/main.css";
import { Switch, Route, Redirect } from "react-router-dom";
import GraduateAccelerator from "./pages/GraduateAccelerator";
import ComingSoon from "./pages/ComingSoon";
import { LoaderContext } from "./context";
import Loader from "./components/Loader";
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = lazy(() => {
  return import("./pages/Landing");
});

const About = lazy(() => {
  return import("./pages/AboutUs");
});

const UndergraduateAccelerator = lazy(() => {
  return import("./pages/UndergraduateAccelerator");
});

const UndergraduateCourseDetail = lazy(() => {
  return import("./pages/UndergraduateCourseDetail");
});

const GraduateCourseDetail = lazy(() => {
  return import("./pages/GraduateCourseDetail");
});

const Faq = lazy(() => {
  return import("./pages/Faq");
});

const Contact = lazy(() => {
  return import("./pages/Contact");
});


const GraduateForm = lazy(() => {
  return import("./pages/GraduateForm");
});

const UndergraduateForm = lazy(() => {
  return import("./pages/UndergraduateForm");
});

const InternshipForm = lazy(() => {
  return import("./pages/InternshipForm");
});

const Hire = lazy(() => {
  return import("./pages/Hire");
});

const Profile = lazy(() => {
  return import("./pages/Profile");
});

const Project = lazy(() => {
  return import("./pages/Project");
});

const Join = lazy(() => {
  return import("./pages/Join");
});

const SignUp = lazy(() => {
  return import("./pages/graduateCohort/auth/SignUp");
});

const Login = lazy(() => {
  return import("./pages/graduateCohort/auth/Login");
});

const Forgot = lazy(() => {
  return import("./pages/graduateCohort/auth/ForgotPassword");
});

const Reset = lazy(() => {
  return import("./pages/graduateCohort/auth/ResetPassword");
});

const MailSent = lazy(() => {
  return import("./pages/graduateCohort/auth/MailSent");
});

const VerifyMail = lazy(() => {
  return import("./pages/graduateCohort/auth/VerifyMail");
});

const AccountCreated = lazy(() => {
  return import("./pages/graduateCohort/auth/AccountCreated");
});

const DashBoardHome = lazy(() => {
  return import("./pages/graduateCohort/dashboard/Main");
});


const App = () => {
  const [show, setShow] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const app = useRef();

  return (
    <LoaderContext.Provider value={{ show, setShow }}>
      {/* {show && <Loader />} */}

      <Suspense fallback={<Loader />}>
        <div ref={app} className="App" style={{ overflow: "hidden" }}>
          <Switch>
            {/* authentication pages */}
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={Forgot} />
            <Route path="/resetPassword" component={Reset} />
            <Route path="/mail-sent" component={MailSent} />
            <Route path="/account-created" component={AccountCreated} />
            <Route path="/verification" component={VerifyMail} />

            {/* Graduate dashboard */}
            <Route path="/dashboard" component={DashBoardHome} />

            {/* main pages */}
            <Route path="/" exact component={LandingPage}>
              {/* <Redirect to="/join"/>  */}
            </Route>
            {/* <Route path="/join" component={Join}/> */}
            <Route path="/about-us" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={Faq} />

            {/* Courses (both graduate and undergraduate) and internship */}
            <Route path="/course-detail-undergraduate" component={UndergraduateCourseDetail} />
            <Route path="/course-detail-graduate" component={GraduateCourseDetail} />
            {/* <Route path="/graduate-accelerator-plan" component={GraduateAccelerator} />
            <Route path="/undergraduate-accelerator-plan" component={UndergraduateAccelerator}/>
            <Route path="/graduate-form" component={GraduateForm} />
            <Route path="/undergraduate-form" component={UndergraduateForm} />
            <Route path="/internship" component={InternshipForm} /> */}

            {/*   hire pages */}
            <Route path="/hire" component={Hire} />
            <Route path="/profile" component={Profile} />
            <Route path="/project" component={Project} />

            {/* Coming soon page */}
            {/* <Route path="/:name/coming-soon" component={ComingSoon} /> */}
          </Switch>
        </div>
      </Suspense>
    </LoaderContext.Provider>
  );
};

export default App;
