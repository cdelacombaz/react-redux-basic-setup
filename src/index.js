import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import Trivial from './components/Trivial';
import NotFound from './components/NotFound';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Layout from './components/Layout';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/trivial' component={Trivial} />
          <Route path='' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
