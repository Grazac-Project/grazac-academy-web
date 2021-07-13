import {
  createContext,
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from "react";
import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
// import LandingPage from "./pages/Landing";
// import Login from "./auth/Login";
// import Signup from "./auth/Signup";

// import UndergraduateCourseDetail from "./pages/UndergraduateCourseDetail";
// import GraduateCourseDetail from "./pages/GraduateCourseDetail";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import Faq from "./pages/Faq";

// import GraduateAccelerator from "./pages/GraduateAccelerator";
// import UndergraduateAccelerator from "./pages/UndergraduateAccelerator";
// import UndergraduateCoursePayment from "./pages/UndergraduateCoursePayment";
// import GraduateCoursePayment from "./pages/GraduateCoursePayment";
// import LeadForm from "./pages/LeadForm";
// import GraduateForm from "./pages/GraduateForm";
// import UndergraduateForm from "./pages/UndergraduateForm";
import ComingSoon from "./pages/ComingSoon";
// import InternshipForm from "./pages/InternshipForm";

import { LoaderContext } from "./context";
import Loader from "./components/Loader";

const LandingPage = lazy(() => {
  return import("./pages/Landing");
});

const About = lazy(() => {
  return import("./pages/AboutUs");
});

const GraduateAccelerator = lazy(() => {
  return import("./pages/GraduateAccelerator");
});
const UndergraduateAccelerator = lazy(() => {
  return import("./pages/UndergraduateAccelerator");
});

const UndergraduateCoursePayment = lazy(() => {
  return import("./pages/UndergraduateCoursePayment");
});

const Login = lazy(() => {
  return import("./auth/Login");
});

const Signup = lazy(() => {
  return import("./auth/Signup");
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

const GraduateCoursePayment = lazy(() => {
  return import("./pages/GraduateCoursePayment");
});

const LeadForm = lazy(() => {
  return import("./pages/LeadForm");
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

const App = () => {
  const [show, setShow] = useState(true);

  const app = useRef();

  return (
    <LoaderContext.Provider value={{ show, setShow }}>
      {/* {show && <Loader />} */}

      <Suspense fallback={<Loader />}>
        <div ref={app} className="App" style={{ overflow: "hidden" }}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about-us" component={About} />
            <Route path="/faq" component={Faq} />

            <Route
              path="/course-detail-undergraduate"
              component={UndergraduateCourseDetail}
            />
            <Route
              path="/course-detail-graduate"
              component={GraduateCourseDetail}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/graduate-accelerator-plan"
              component={GraduateAccelerator}
            />
            <Route
              path="/undergraduate-accelerator-plan"
              component={UndergraduateAccelerator}
            />
            <Route path="/graduate-form" component={GraduateForm} />
            <Route path="/undergraduate-form" component={UndergraduateForm} />
            {/* <Route
          path="/undergraduate/payment/:id"
          component={UndergraduateCoursePayment}
        /> */}
            {/* <Route path="/graduate/payment/:id" component={GraduateCoursePayment} /> */}
            <Route path="/lead" component={LeadForm} />
            <Route path="/internship" component={InternshipForm} />
            <Route path="/hire" component={Hire} />

            <Route path="/:name/coming-soon" component={ComingSoon} />
          </Switch>
        </div>
      </Suspense>
    </LoaderContext.Provider>
  );
};

export default App;
