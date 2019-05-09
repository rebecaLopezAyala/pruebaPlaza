import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { publicPath, routeCodes } from './common/routeConfig';
import Login from 'views/Login/index';

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
          <Route path={ routeCodes.LOGIN } component={ Login } />
      </Router>
    );
  }
}
