import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoginAsync } from "actions/login";
import classNames from 'classnames';
import styles from './Login.scss';
import bankLogo from '../../../../public/images/bank-logo.png';

@connect(state => ({
  login: state.login.get('login'),
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
  
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(getLoginAsync());
  }

  render() {
    const { login } = this.props;
    debugger;

    const userName = login && login.label && login.label.find(item=>{ return item.id == 'userLabel' });
    const password = login && login.label && login.label.find(item=>{ return item.id == 'passwordLabel' });
    const button = login && login.label && login.label.find(item=>{ return item.id == 'buttonLabel' });

    return login && login.title ?
            (<div className={styles.background}>
              <div className={styles.loginDiv}>
                <div className = { styles.titleDiv }>
                  <img className = { styles.imageDiv } src= { bankLogo }/>
                  <h1 className={styles.title}> { login.title} </h1>
                </div>
                <form className= { styles.formStyle }>             
                  <label for="fname"> { userName && userName.value } </label>
                  <input type="text" id="fname" name="firstname" placeholder={ userName && userName.value }/>
                  <label for="lname">{ password && password.value }</label>
                  <input type="text" id="lname" name="lastname" placeholder= { password && password.value }/>
                  <button > { button && button.value } </button>
                </form>
              </div>
            </div>):null/*: <Loader/>*/;
  }
}
