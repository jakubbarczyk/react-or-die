import React from 'react';
import PropTypes from 'prop-types';
import Heading from '~/Heading';
import Menu from './Menu';
import styles from './page.scss';

const Page = ({ children }) => (
  <div className={styles.page}>
    <Heading level={1}>React or Die</Heading>
    <Menu />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
