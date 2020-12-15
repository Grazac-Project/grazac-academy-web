import "./scss/main.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";

import GraduateAccelerator from "./pages/GraduateAccelerator";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/> 
        
        <Route path="/gua" exact={true} component={GraduateAccelerator}/> 
      </Switch>
    </div>
  );
}

export default App;
