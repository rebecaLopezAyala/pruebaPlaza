import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import withTabIndicator from 'decorators/TabIndicator';
import styles from './App.scss';
import { allProductsAsync } from "actions/login";
import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';
import CookiesConfiguration from 'functions/CookiesConfiguration';

@withTabIndicator
@connect(state => ({
}))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentWillMount(){
    const { dispatch } = this.props;
    
    const clientInfo = CookiesConfiguration.getCookie('clientInfo');
    if(clientInfo && clientInfo.jwt){
        const allProdRequest={
          clientId: clientInfo.clientId
        }
        dispatch(allProductsAsync(allProdRequest));
    }
  }

  render() {
    const { children } = this.props;
    
    return (
      <div>
        <div className={ styles.container }>   
          <div>
            { children }
          </div>
        </div>
      </div>  
    );
  }
}