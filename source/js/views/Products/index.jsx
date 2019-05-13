import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import withTabIndicator from 'decorators/TabIndicator';
import styles from './Products.scss';
import { allProductsAsync } from "actions/login";
import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';
import Menu from 'components/Menu/Menu';
import CookiesConfiguration from 'functions/CookiesConfiguration';

@withTabIndicator
@connect(state => ({
    signIn: state.login.get('signIn'),
    allProducts: state.login.get('allProducts'),
}))
export default class App extends Component {
  static propTypes = {
      dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentWillMount(){
    const { dispatch } = this.props;
    
    const clientInfo = CookiesConfiguration.getCookie('clientInfo');
    if(clientInfo && clientInfo.jwt){
        const allProdRequest={
          clientId: clientInfo.clientId
        }
        dispatch(allProductsAsync(allProdRequest));
    }else {
      browserHistory.push(routeCodes.LANDING)
    }
  }

  renderItems(allProducts){
    const arraySize = allProducts && allProducts.accounts && allProducts.accounts.length;
    return allProducts && allProducts.accounts.map((item, key)=>{
      return (  <div>
                    <h1>{ item.categoryTitle }</h1>
                    {this.renderSubItems(item.allProducts)}
                    { arraySize-1 > key? <div className={styles.linea}/> : null}
                </div>
      );
    });
  }

  renderSubItems(subItems){
    return subItems && subItems.map(item=>{
       return(<div>
                  <p className = { styles.titleProductStyle }>{item.title}</p>
                  <p className={ styles.descStyle }>{item.desc}</p>
              </div>
       )
    })
  }

  render() {
    const { allProducts } = this.props;
    return allProducts && allProducts.accounts ? (
      <div className={ styles.wrapper }>
        <Menu/>
        <div className = { styles.wrapperForm }>
          <h1 className= { styles.globalTitle }>{ allProducts.title }</h1>
          <div className= { styles.formStyle }>
            { this.renderItems(allProducts) }
          </div>
        </div>
      </div>  
    ):<Loader/>;
  }
}