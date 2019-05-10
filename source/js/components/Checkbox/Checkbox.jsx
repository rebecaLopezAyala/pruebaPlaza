import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Checkbox.scss';

export default class Checkbox extends Component {
  static propTypes = {
    wrapperClass: PropTypes.string,
    labelClass: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    changeHandler: PropTypes.func,
    keyPressHandler: PropTypes.func,
    checkBoxClass: PropTypes.string,
    disabled: PropTypes.bool,
    cursorAuto: PropTypes.bool,
    selected: PropTypes.bool,
  }

  getId() {
    const { id } = this.props;

    return id || new Date().getTime();
  }

  render() {
    const {
      wrapperClass,
      labelClass,
      changeHandler,
      label,
      checkBoxClass,
      disabled,
      cursorAuto,
      keyPressHandler,
      selected,
    } = this.props;

    const id = this.getId();

    const shouldHaveAutoCursor = cursorAuto ? { 'cursor': 'auto' } : { 'cursor': 'pointer' };

    return (
      <div className={ cx(styles.wrapper, wrapperClass) }>
        <input
          className={ styles.input }
          type='checkbox'
          id={ id }
          onChange={ changeHandler }
          disabled={ disabled }
          checked={ selected }
        />
        <label // eslint-disable-line
          tabIndex={ 0 }
          htmlFor={ id }
          className={ checkBoxClass }
          onKeyPress={ keyPressHandler }
          style={ shouldHaveAutoCursor }
        >
          <span />
        </label>
        <label className={ cx(styles.label, labelClass) } htmlFor={ id }>
          <p
            dangerouslySetInnerHTML={ { __html: label } } // eslint-disable-line
          />
        </label>
      </div>
    );
  }
}
