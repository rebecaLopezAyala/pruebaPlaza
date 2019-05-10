import React from 'react';
import styles from './Loader.scss';
import loadergif from '../../../../public/images/loaderGif.gif';
import bankLogo from '../../../../public/images/bank-logo-blue.png';

export default () => {
  return (
    <div className={ styles.loaderWrapper }>
      <div className={ styles.bankLogo }>
        <img src={ `${ bankLogo }` } alt='loading...' />
      </div>
      <div className={ styles.loadergif }>
        <img src={ `${ loadergif }` } alt='loading...' />
      </div>
    </div>
  );
}