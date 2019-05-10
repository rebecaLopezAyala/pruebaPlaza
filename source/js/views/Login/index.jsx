import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoginAsync } from "actions/login";
import classNames from 'classnames';
import styles from './Login.scss';
import bankLogo from '../../../../public/images/bank-logo.png';
import showPass from '../../icons/showPass.png'
import hidePass from '../../icons/hidePass.png'
import { Link } from 'react-router';
import Checkbox from 'components/Checkbox/Checkbox';
import Loader from 'components/Loader/Loader';
import FormValidator from '../../validators/form';
import moment from 'moment';

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
      forgotPassword:false,
      showConfirmPassState:false,
    }
    
    this.formValidator = new FormValidator();

    this.forgotPassword = this.forgotPassword.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(getLoginAsync());
  }

  changeImage(type){
    if(type == 'password'){
      this.setState({
        showPassState: !this.state.showPassState
      })
    }else{
      this.setState({
        showConfirmPassState: !this.state.showConfirmPassState
      })
    }
  }

  forgotPassword(){
    this.setState({
      forgotPassword:true
    })
  }

  
  onKeyPress(e, type) {
      let valid = false;

      switch(type){
        case 'username':
          valid = this.formValidator.validateUsername(e.key);
        break;
        case 'password':
          valid = this.formValidator.validatePassword(e.key);
        break
        default: valid = true;
      }
      
      if (!valid) {
        e.stopPropagation();
        e.preventDefault();
      }
  }


  render() {
    const { login } = this.props;
    const { forgotPassword, showPassState, showConfirmPassState } = this.state;

    const userName = login && login.label && login.label.find(item=>{ return item.id == 'userLabel' });
    const password = login && login.label && login.label.find(item=>{ return item.id == 'passwordLabel' });
    const button = login && login.label && login.label.find(item=>{ return item.id == 'buttonLabel' });
    const createbutton = login && login.label && login.label.find(item=>{ return item.id == 'createNewAccount' });
    const forgotPasswordLabel = login && login.label && login.label.find(item=>{ return item.id == 'forgotPasswordLink' });
    const newPassword = login && login.label && login.label.find(item=>{ return item.id == 'newPassword' });
    const confirmPassword = login && login.label && login.label.find(item=>{ return item.id == 'confirmPassword' });
    const rememberMe = login && login.label && login.label.find(item=>{ return item.id == 'rememberMe' });

    return login && login.title ?
            (<div className={styles.background}>
              <div className={styles.loginDiv}>
                <div className = { styles.titleDiv }>
                  <img className = { styles.imageDiv } src= { bankLogo }/>
                  <h1 className={styles.title}> { login.title} </h1>
                </div>
                <form className= { styles.formStyle }>             
                  <label> { userName && userName.value } </label>
                  <input 
                      type="text" 
                      id="fname" 
                      onKeyPress={ (event)=>this.onKeyPress(event, 'username') }
                      placeholder={ userName && userName.value }/>
                  <label>{ !forgotPassword ? password && password.value : newPassword && newPassword.value }</label>
                  <div
                        style={{position:'relative'}}>
                    <input 
                        type={ showPassState ? 'text' : 'password' } 
                        style={{position:'relative'}}
                        onKeyPress={ (event)=>this.onKeyPress(event, 'password') }
                        placeholder= { !forgotPassword ? password && password.value : newPassword && newPassword.value }/>
                    <div  
                      className={ styles.passwordInput }
                      onClick={ ()=>this.changeImage('password') }
                      style={ { backgroundImage: `url(${ this.state.showPassState ? hidePass : showPass })`}}></div>
                  </div>
                  { forgotPassword &&
                    <div>
                      <label>{ confirmPassword && confirmPassword.value }</label> 
                        <div
                            style={{position:'relative'}}>
                            <input 
                              type={ showConfirmPassState ? 'text' : 'password' } 
                              style={{position:'relative'}}
                              onKeyPress={ (event)=>this.onKeyPress(event, 'password') }
                              placeholder= { confirmPassword && confirmPassword.value }/>
                            <div  
                              className={ styles.passwordInput }
                              onClick={ ()=>this.changeImage('confirmPassword') }
                              style={ { backgroundImage: `url(${ this.state.showConfirmPassState ? hidePass : showPass })`}}></div>
                        </div>
                    </div>
                  }
                  {rememberMe &&
                    <Checkbox 
                      wrapperClass= { styles.checkbox }
                      labelClass={ styles.label }
                      label={ rememberMe.value }
                    />}
                  <div className = { styles.wrapperDiv }>
                    <div className = { styles.buttonDiv }>
                      <button > { button && button.value } </button>
                      {!forgotPassword && <button > { createbutton && createbutton.value } </button>}
                    </div>
                    <Link
                      onClick={ ()=>this.forgotPassword() }
                    >{ forgotPasswordLabel && forgotPasswordLabel.value }</Link>
                  </div>
                </form>
              </div>
            </div>): <Loader/>;
  }
}
