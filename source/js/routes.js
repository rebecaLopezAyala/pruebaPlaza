import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { publicPath, routeCodes } from './common/routeConfig';

import Login from 'views/Login/index';
import Landing from 'views/Landing/index';
import Transfer from 'views/Transfer/index';
import Products from 'views/Products/index';
import NotFound from 'views/NotFound/index';
import App from 'views/App/index';

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Router path={ publicPath } component={ App }>
          <IndexRoute component={ Landing } />
          <Route path={ routeCodes.PRODUCTS } component={ Products } />
          <Route path={ routeCodes.TRANSFER } component={ Transfer } >
              <Route path={ routeCodes.TRANSFER_OWN } component={ Transfer } />
              <Route path={ routeCodes.TRANSFER_THIRD } component={ Transfer } />
          </Route>
          <Route path={ routeCodes.LOGIN } component={ Login } />
          <Route path='*' component={ NotFound } />
        </Router>
      </Router>
    );
  }
}
