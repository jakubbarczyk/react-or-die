import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Page from './Page';
import Home from './Home';
import About from './About';
import '../favicon.png';

/**
 * App component
 */
const App = () => (
  <BrowserRouter>
    <Page>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Page>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
