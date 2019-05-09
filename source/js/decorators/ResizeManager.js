const BREAKPOINT = {
  '--xs-viewport': '(min-width:0px)',
  '--sm-viewport': '(min-width:768px)',
  '--md-viewport': '(min-width:1024px)',
  '--lg-viewport': '(min-width:1280px)',
  '--xl-viewport': '(min-width:1400px)',
  '--xxl-viewport': '(min-width:1700px)',
  '--portrait': '(orientation: portrait)',
  '--landscape': '(orientation: landscape)',
};

export const getBreakpoint = () => {
  let breakpoint;

  if (window.matchMedia(BREAKPOINT['--xxl-viewport']).matches) {
    breakpoint = 'xxl';
  } else if (window.matchMedia(BREAKPOINT['--xl-viewport']).matches) {
    breakpoint = 'xl';
  } else if (window.matchMedia(BREAKPOINT['--lg-viewport']).matches) {
    breakpoint = 'lg';
  } else if (window.matchMedia(BREAKPOINT['--md-viewport']).matches) {
    breakpoint = 'md';
  } else if (window.matchMedia(BREAKPOINT['--sm-viewport']).matches) {
    breakpoint = 'sm';
  } else if (window.matchMedia(BREAKPOINT['--xs-viewport']).matches) {
    breakpoint = 'xs';
  }

  return breakpoint;
};

export default function () {
  const subs = {};

  const getOrientation = () => {
    let orientation;

    if (window.matchMedia(BREAKPOINT['--landscape']).matches) {
      orientation = 'landscape';
    } else if (window.matchMedia(BREAKPOINT['--portrait']).matches) {
      orientation = 'portrait';
    }

    return orientation;
  };

  const windowObject = {
    breakpoint: getBreakpoint(),
    dimensions: {
      x: window.innerWidth,
      y: window.innerHeight,
    },
  };

  let ticking = false;

  return {
    addBreakpointListeners() {
      window.addEventListener('resize', () => this.requestTick());
    },

    removeBreakpointListeners() {
      window.removeEventListener('resize', () => this.requestTick());
    },

    setBreakpoint() {
      windowObject.breakpoint = getBreakpoint();
    },

    getCurrentBreakpoint() {
      return getBreakpoint();
    },

    setOrientation() {
      windowObject.orientation = getOrientation();
    },

    getCurrentOrientation() {
      return getOrientation();
    },

    setDimensions() {
      windowObject.dimensions = {
        x: window.innerWidth,
        y: window.innerHeight,
      };
    },

    getCurrentDimensions() {
      return windowObject.dimensions;
    },

    publish(breakpoint, orientation, dimensions) {
      Object.keys(subs).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(subs, key)) {
          subs[key](breakpoint, orientation, dimensions);
        }
      });
    },

    subscribe(key, fn) {
      subs[key] = fn;
    },

    unsubscribe(key) {
      delete subs[key];
    },

    requestTick() {
      if (!ticking) {
        requestAnimationFrame(() => this.onResize());
        ticking = true;
      }
    },

    onResize() {
      this.setDimensions();
      this.setBreakpoint();
      this.setOrientation();
      this.publish(windowObject.breakpoint, windowObject.orientation, windowObject.dimensions);

      ticking = false;
    },
  };
}
