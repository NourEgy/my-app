import Home from "./pages/home"
import Navbar from "./Components/navbar"
import Contact from "./pages/Contact"

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
  
            <Route exact path="/" component={Home}/>
            <Route path="/Contact" component={Contact}/>
            
          </Switch>

        </div>

      </div>
</Router>
  );
}

export default App;
