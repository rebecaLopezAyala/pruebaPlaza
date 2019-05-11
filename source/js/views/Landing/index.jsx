import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoginAsync, signInAsync } from "actions/login";
import Loader from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';
import styles from './Landing.scss';

@connect(state => ({
  login: state.login.get('login'),
  signIn: state.login.get('signIn'),
}))

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.object,
    dispatch: PropTypes.func
  }
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  


  render() {
      
    return (<div className={ styles.wrapper }>
                <Menu/>
                <div style={{'text-align': 'center'}}>
                    <img src={'https://image.flaticon.com/sprites/new_packs/349220-credit-cards.png'}/>
                </div>
            </div>);
  }
}
