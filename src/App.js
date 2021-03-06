import React, { Fragment } from 'react';
import './App.scss';
import './stylesheets/Header.scss';
import './stylesheets/BurgerMenu.scss';
import './stylesheets/MainMenu.scss';
import './stylesheets/BigWords.scss';
import './stylesheets/About.scss'
import './stylesheets/TypeWriter.scss';
import './stylesheets/Projects.scss';
import './stylesheets/Contact.scss';
import './stylesheets/Footer.scss';

import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';

function App() {
  return (
    <Fragment>
      <Header />
      <BurgerMenu />
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
