import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";
import Contactus from "./Components/Contactus";
import Appoinment from "./Components/Appoinment";
import Hero from "./Components/Hero";
import 'bootstrap/dist/css/bootstrap.css';






const App = () => {
  return (
      <>
      <Router>
        <Navbar/>
        
          <Switch>
            <Route path='/' component = {Home} exact> <Home/> </Route>
            <Route path='/about' component = {About} exact> <About/> </Route>
            <Route path='/services' component = {Services} exact> <Services/> </Route>
            <Route path='/appoinment' component = {Appoinment} exact> <Appoinment/> </Route>
            <Route path='/contactus' component = {Contactus} exact> <Contactus/> </Route>


          </Switch>
      </Router>
      </>
  );
}

export default App;
