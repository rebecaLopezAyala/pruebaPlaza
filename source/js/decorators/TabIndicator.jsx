import React, { Component } from 'react';

const TAB_KEY_CODE = 9;

const TAB_CLASS = 'hasTabbed';

const withTabIndicator = ComposedComponent => class TabDecorator extends Component {
  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.htmlClassList = document.querySelector('html').classList;
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    this.htmlClassList.remove(TAB_CLASS);
    this.htmlClassList = null;

    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('mousedown', this.handleClick);
  }

  handleKeyDown(e) {
    if (e.keyCode === TAB_KEY_CODE) {
      this.htmlClassList.add(TAB_CLASS);
    }
  }

  handleClick() {
    this.htmlClassList.remove(TAB_CLASS);
  }

  render() {
    return (
      <ComposedComponent { ...this.props } />
    );
  }
};

export default withTabIndicator;
