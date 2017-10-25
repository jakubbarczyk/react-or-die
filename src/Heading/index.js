import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.scss';

const Heading = ({ level, children }) => (
  React.createElement(`h${level}`, { className: styles.h }, children)
);

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.string.isRequired
};

Heading.defaultProps = {
  level: 1
};

export default Heading;
