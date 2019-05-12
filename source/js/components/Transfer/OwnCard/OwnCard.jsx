import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { connect } from 'react-redux';
import styles from './OwnCard.scss';
import { getTransfer } from "actions/transfer";
import CookiesConfiguration from 'functions/CookiesConfiguration';
import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';

@connect(state => ({
    transfer: state.transfer.get('transfer'),
    allProducts: state.login.get('allProducts'),
}))
export default class OwnCard extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        thirdCard: PropTypes.bool
    }

    constructor(props){
        super(props);

        this.state = {
            form:{
                originAccount:'',
                destinationAccount:'',
                amount: 0.0
            }
          }
    }


  render() {
    const { transfer, thirdCard } = this.props;
    const { form } = this.state;

    const originAccount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'originAccount' });
    const destinationAccount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'destinationAccount' });
    const amount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'amount' });
      
    return transfer && transfer.title ? (
      <div >
        <h1 className={styles.title }>{ thirdCard ? transfer.titleThird : transfer.title } </h1>
        <div className= { styles.formStyle }>             
            <label> { originAccount && originAccount.value } </label>
            <select 
                placeholder={ originAccount  && originAccount.value }
                value = { form.originAccount }/>
            <label> { destinationAccount && destinationAccount.value } </label>
            <select 
                placeholder={ destinationAccount  && destinationAccount.value }
                value = { form.destinationAccount }/>
                
            <label> { amount && amount.value } </label>
            <input 
                placeholder={ amount  && amount.value }
                value = { form.amount }/>
            <div style={{'text-align': 'center'}}>
                <button >{ transfer.button }</button>
                <a>{ transfer.link }</a>
            </div>
        </div>
      </div>
    ): <Loader/>;
  }
}
