const isProduction = process.env.NODE_ENV === 'production';

module.exports = require('./logger-exports').default; // eslint-disable-line global-require
if (isProduction) {
  module.exports = null;
} else {
  module.exports = require('./logger-exports').default; // eslint-disable-line global-require
}
