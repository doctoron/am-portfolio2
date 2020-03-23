import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Error from './components/Error';
import Images from './components/Images';
// import logo from './logo.svg';
require('dotenv').config();

const path = process.env.PUBLIC_URL;

class App extends Component {
  render () {
    return (
      <Router basename={path}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={path + "/"} component={Portfolio} />
            <Route path={path + "/my-portfolio"} component={Portfolio} />
            <Route path={path + "/contact"} component={Contact} />
            <Route path={path + "/my-resume"} component={Resume} />
            <Route path={path + "/about"} component={About} />
            <Route path={path + "/images"} component={Images} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
