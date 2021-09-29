import './App.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect, 
} from "react-router-dom"; 

import Home from "./Home/pages/home"
import Carrito from "./Carrito/pages/carrito"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Carrito" exact>
          <Carrito />
        </Route>
        <Redirect to="/" />

      </Switch> 

    </Router>
    
  );
}

export default App;
