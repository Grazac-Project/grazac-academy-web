import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import UndergraduateCourseDetail from "./pages/UndergraduateCourseDetail";
import GraduateCourseDetail from "./pages/GraduateCourseDetail";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import GraduateAccelerator from "./pages/GraduateAccelerator";
import UndergraduateAccelerator from "./pages/UndergraduateAccelerator";
import LeadForm from "./pages/LeadForm";
import GraduateForm from "./pages/GraduateForm";
import UndergraduateForm from "./pages/UndergraduateForm";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about-us" component={AboutUs} />

        <Route path="/course-detail-undergraduate" exact={true} component={UndergraduateCourseDetail}/>
        <Route path="/course-detail-graduate" exact={true} component={GraduateCourseDetail}/> 
        <Route path="/contact" exact={true} component={Contact}/> 
        <Route path="/graduate-accelerator-plan" exact={true} component={GraduateAccelerator}/> 
        <Route path="/undergraduate-accelerator-plan" exact={true} component={UndergraduateAccelerator}/>
        <Route path="/graduate-form" exact={true} component={GraduateForm}/> 
        <Route path="/undergraduate-form" exact={true} component={UndergraduateForm}/> 
        <Route path="/lead" exact={true} component={LeadForm}/> 

        <Route path="/:name/coming-soon" component={ComingSoon} />
      </Switch>
    </div>
  );
}

export default App;
