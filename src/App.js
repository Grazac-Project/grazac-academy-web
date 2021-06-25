import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import UndergraduateCourseDetail from "./pages/UndergraduateCourseDetail";
import GraduateCourseDetail from "./pages/GraduateCourseDetail";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

import GraduateAccelerator from "./pages/GraduateAccelerator";
import UndergraduateAccelerator from "./pages/UndergraduateAccelerator";
import UndergraduateCoursePayment from "./pages/UndergraduateCoursePayment";
import GraduateCoursePayment from "./pages/GraduateCoursePayment";
import LeadForm from "./pages/LeadForm";
import GraduateForm from "./pages/GraduateForm";
import UndergraduateForm from "./pages/UndergraduateForm";
import ComingSoon from "./pages/ComingSoon";
import InternshipForm from "./pages/InternshipForm";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about-us" component={AboutUs} />
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

        <Route path="/:name/coming-soon" component={ComingSoon} />
      </Switch>
    </div>
  );
};

export default App;
