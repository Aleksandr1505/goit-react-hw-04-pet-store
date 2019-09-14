import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import PetsPage from './PetsPage/PetsPage';
import PetPage from './PetPage/PetPage';
import Nav from './NavLink/NavLink';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/pets/:id" exact component={PetPage} />
        <Route path="/pets" exact component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
