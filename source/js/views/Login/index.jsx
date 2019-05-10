import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getLoginAsync from "actions/login";

@connect(state => ({
  login: state.login.get('login'),
}))

export default class AboutLifemiles extends Component {
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
    return <div>HOLAAAA</div>;
  }
}
