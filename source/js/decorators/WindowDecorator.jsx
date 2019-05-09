import React, { Component } from 'react';
import { getRandomKey } from 'common/util';
import resizeManager from './ResizeManager';


const ResizeManager = resizeManager();

const withWindow = ComposedComponent => class WindowDecorator extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      breakpoint: ResizeManager.getCurrentBreakpoint(),
      orientation: ResizeManager.getCurrentOrientation(),
      dimensions: ResizeManager.getCurrentDimensions(),
      key: getRandomKey(),
    };
  }

  componentDidMount() {
    ResizeManager.addBreakpointListeners();

    ResizeManager.subscribe(this.state.key, (breakpoint, orientation, dimensions) => {
      const newState = {};

      if (this.state.breakpoint !== breakpoint) {
        newState.breakpoint = breakpoint;
      }

      if (this.state.orientation !== orientation) {
        newState.orientation = orientation;
      }

      if (this.state.dimensions !== dimensions) {
        newState.dimensions = dimensions;
      }

      this.setState(newState);
    });
  }

  componentWillUnmount() {
    ResizeManager.unsubscribe(this.state.key);
    ResizeManager.removeBreakpointListeners();
  }

  render() {
    return (
      <ComposedComponent
        { ...this.props }
        breakpoint={ this.state.breakpoint }
        orientation={ this.state.orientation }
        dimensions={ this.state.dimensions }
      />
    );
  }
};

export default withWindow;
