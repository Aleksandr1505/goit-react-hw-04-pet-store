import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

const activeStyle = { color: 'white' };

const Nav = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          className={styles.listItem}
          exact
          activeStyle={activeStyle}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={styles.listItem}
          activeStyle={activeStyle}
          to="/pets"
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          className={styles.listItem}
          activeStyle={activeStyle}
          to="/about"
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};
export default Nav;
