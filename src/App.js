import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import CourseDetail from "./pages/CourseDetail";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import GraduateAccelerator from "./pages/GraduateAccelerator";
import UndergraduateAccelerator from "./pages/UndergraduateAccelerator";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about-us" component={AboutUs} />

        <Route path="/course-detail" component={CourseDetail}/> 
        <Route path="/contact" component={Contact}/> 
        <Route path="/graduate-accelerator-track" component={GraduateAccelerator}/> 
        <Route path="/undergraduate-accelerator-track" component={UndergraduateAccelerator}/> 

        <Route path="/coming-soon" component={ComingSoon} />
      </Switch>
    </div>
  );
}

export default App;
