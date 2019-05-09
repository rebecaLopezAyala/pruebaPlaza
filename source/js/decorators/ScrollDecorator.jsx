import React, { Component } from 'react';

export const withScroll = ComposedComponent => class ScrollDecorator extends Component {
  constructor() {
    super();

    this.state = {
      scrollPosition: this.getWindowScrollTop(),
    };

    this.handleInterval = this.handleInterval.bind(this);
    this.handleRequestAnimationFrame = this.handleRequestAnimationFrame.bind(this);
  }

  componentWillMount() {
    const interval = 30;
    this.intervalID = setInterval(this.handleInterval, interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.intervalID = null;
  }

  getWindowScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  handleInterval() {
    this.requestID = requestAnimationFrame(this.handleRequestAnimationFrame);
  }

  handleRequestAnimationFrame() {
    const { scrollPosition } = this.state;
    const newScrollPosition = this.getWindowScrollTop();

    if (newScrollPosition !== scrollPosition) {
      this.setState({
        scrollPosition: newScrollPosition,
      });
    }
  }

  render() {
    const { scrollPosition } = this.state;

    return (
      <ComposedComponent
        { ...this.props }
        scrollPosition={ scrollPosition }
      />
    );
  }
};
