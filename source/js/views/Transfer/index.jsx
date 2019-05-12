import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import withTabIndicator from 'decorators/TabIndicator';
import styles from './Transfer.scss';
import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';
import Menu from 'components/Menu/Menu';
import OwnCard from 'components/Transfer/OwnCard/OwnCard';
import CookiesConfiguration from 'functions/CookiesConfiguration';
import { getTransfer } from "actions/transfer";

@withTabIndicator
@connect(state => ({
    allProducts: state.login.get('allProducts'),
    transfer: state.transfer.get('transfer'),
}))
export default class App extends Component {
  static propTypes = {
      dispatch: PropTypes.func,
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
        dispatch(getTransfer());
    }else {
      browserHistory.push(routeCodes.LANDING)
    }
}

  render() {
    const { transfer } = this.props;
    const ownCard = window.location.pathname.indexOf('ownCard') > 0;
    const thirdCard = window.location.pathname.indexOf('thirdCard') > 0;

    return !transfer.asyncLoading ? (
      <div className={ styles.wrapper }>
        <Menu/>
        <div className = { styles.wrapperForm }>
          { ownCard && <OwnCard/>}
          { thirdCard && <OwnCard thirdCard={true} />}
        </div>
      </div>  
    ): <Loader/>;
  }
}