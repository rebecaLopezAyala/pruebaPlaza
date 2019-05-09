import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  about: state.about.get('about'),
}))

export default class AboutLifemiles extends Component {
  static propTypes = {
    about: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }
  

  render() {
    return <div>HOLAAAA</div>;
  }
}
