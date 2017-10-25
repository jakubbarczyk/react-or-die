import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = ({ onClick, children }) => (
  <button className={styles.btn} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

export default Button;
