import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Heading from '~/Heading';
import Comments from './Comments';
import comments from './reducers';

/**
 * Home component
 */
const Home = () => (
  <section>
    <Heading level={2}>Home</Heading>
    <Provider store={createStore(comments)}>
      <Comments />
    </Provider>
  </section>
);

export default Home;
