import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isOutsideClick } from 'common/util';

export default OutsideClick => class OutsideClickDecorator extends Component {

  static propTypes = {
    outsideClickHandler: PropTypes.func,
  }

  constructor() {
    super();

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('click', this.handleOutsideClick);
    }, 50);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick(event) {
    const { outsideClickHandler } = this.props;
    if (isOutsideClick(event, this.outsideClickControlWrapper) && outsideClickHandler) {
      outsideClickHandler();
    }
  }

  render() {
    return (
      <div ref={ node => this.outsideClickControlWrapper = node }>
        <OutsideClick
          { ...this.props }
        />
      </div>
    );
  }
};
