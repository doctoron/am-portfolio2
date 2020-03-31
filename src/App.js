import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Error from './components/Error';
import Images from './components/Images';

class App extends Component {
  render () {
    return (
      <Router basename="/">
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />
            <Route path="/images" component={Images} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
