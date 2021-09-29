import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect, 
} from "react-router-dom"; 

import Home from "./Home/pages/home"
import Carrito from "./Carrito/pages/carrito"
import Header from "./Shared/header"

function App() {
  return (
    <Router>
      <Header/>
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
