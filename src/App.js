import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <MainMenu />
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/projects">
          {/* <Projects /> */}
        </Route>
        <Route path="/contact">
          {/* <Contact /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
