import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <MainMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
