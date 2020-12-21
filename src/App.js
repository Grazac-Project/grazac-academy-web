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

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about-us" component={AboutUs} />

        <Route path="/course-detail" exact={true} component={CourseDetail}/> 
        <Route path="/contact" exact={true} component={Contact}/> 
        <Route path="/gga" exact={true} component={GraduateAccelerator}/> 
        <Route path="/gua" exact={true} component={UndergraduateAccelerator}/> 
      </Switch>
    </div>
  );
}

export default App;
