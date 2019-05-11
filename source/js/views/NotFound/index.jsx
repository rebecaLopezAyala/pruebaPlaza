import styles from './NotFound.scss';
import bankLogo from '../../../../public/images/bank-logo-blue.png';
import React, { Component } from 'react';

export default class Login extends Component {
  render() {  
    return (
      <div>
        <div className={ styles.loaderWrapper }>
          <div className={ styles.bankLogo }>
            <img src={ `${ bankLogo }` } alt='loading...' />
          </div>
          <div className={ styles.loadergif }>
            <p>404 - NOT FOUND</p>
            <p>Lo sentimos mucho la página solicitada no fue encontrada.</p>
          </div>
        </div>
      </div>
    );
  }
}
