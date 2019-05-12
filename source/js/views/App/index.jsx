import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import withTabIndicator from 'decorators/TabIndicator';
import styles from './App.scss';




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


  render() {
    const { children, render } = this.props;
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