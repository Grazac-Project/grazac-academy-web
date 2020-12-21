import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import GraduateAccelerator from "./pages/GraduateAccelerator";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/>
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={Signup} />
        
        <Route path="/gua" exact={true} component={GraduateAccelerator}/> 
        <Route path="/contact" exact={true} component={Contact}/> 
      </Switch>
    </div>
  );
}

export default App;
