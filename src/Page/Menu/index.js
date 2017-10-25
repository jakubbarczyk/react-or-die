import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.scss';

/**
 * Menu component
 */
const Menu = () => (
  <nav className={styles.menu}>
    <NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
    <NavLink to="/about" activeClassName={styles.selected}>About</NavLink>
  </nav>
);

export default Menu;
