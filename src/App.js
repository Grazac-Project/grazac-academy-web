import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import GraduateAccelerator from "./pages/GraduateAccelerator";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        
        <Route path="/gua" component={GraduateAccelerator}/> 
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
