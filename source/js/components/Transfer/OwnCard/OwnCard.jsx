import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { connect } from 'react-redux';
import styles from './OwnCard.scss';
import { Link } from 'react-router';
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
        const originAccountOptions =  this.getOptions();
        this.state = {
            originAccountOptions:originAccountOptions ? originAccountOptions :  null,
            form: this.getCleanForm(true)
          }

        this.getOptions = this.getOptions.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.getCleanForm = this.getCleanForm.bind(this);
    }

    getCleanForm(initial){
        if(initial){
            return {
                        originAccount:'',
                        destinationAccount:'',
                        amount: 0.0
                    }
        }else {
            this.setState({
                form:{
                    originAccount:'',
                    destinationAccount:'',
                    amount: 0.0
                }
            })
        }
    }

    componentWillUpdate(prevProps){
        const { allProducts } = this.props;

        if(prevProps.allProducts != allProducts && allProducts.accounts){
            const originAccountOptions =  this.getOptions();
            this.setState({
                originAccountOptions
            })
        }
    }

    onChangeSelect(e, option){
        this.setState({
            form:{
                ...this.state.form,
                [option]:e.target.value
            }
        })
    }

    getOptions(){
        const { allProducts } = this.props;
        
        let newAccount = [];

        allProducts && allProducts.accounts && allProducts.accounts.map(item=>{
          if(item.IDCategory == 'CREDITCARD' || item.IDCategory == "PERSONAL"){
              item.allProducts.map(value => {
                  newAccount.push(value.title);
              })
          } 
        })
    
        return  newAccount
      }

  renderOptions(options){
      debugger;
    return options && options.map((optionItem, index) =>{
            return <option key={ index } value={ index }>{ optionItem }</option>}
    )
  }

  render() {
    const { transfer, thirdCard, allProducts } = this.props;
    const { form, originAccountOptions } = this.state;

    const originAccount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'originAccount' });
    const destinationAccount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'destinationAccount' });
    const amount = transfer && transfer.labels && transfer.labels.find(item=>{ return item.id == 'amount' });

    return transfer && transfer.title ? (
      <div >
        <h1 className={styles.title }>{ thirdCard ? transfer.titleThird : transfer.title } </h1>
        <div className= { styles.formStyle }>             
            <label> { originAccount && originAccount.value } </label>
            <select 
                value = { form.originAccount }
                onChange= { (e)=>{ this.onChangeSelect(e, 'originAccount')}}>
                <option hidden value={ -1 }>{ originAccount  && originAccount.value }</option>
                { originAccountOptions && this.renderOptions(originAccountOptions)}
            </select>  
            <label> { destinationAccount && destinationAccount.value } </label>
            <select  
                value = { form.destinationAccount } 
                onChange= { (e)=>{ this.onChangeSelect(e, 'destinationAccount')}}>>
                <option hidden value={ -1 }>{ destinationAccount  && destinationAccount.value }</option>
                { originAccountOptions && this.renderOptions(originAccountOptions)}
            </select>  
            <label> { amount && amount.value } </label>
            <input 
                placeholder={ amount  && amount.value }
                onChange= { (e) => this.onChangeSelect(e, 'amount') }
                value = { form.amount }/>
            <div style={{'text-align': 'center'}}>
                <button >{ transfer.button }</button>
                <Link onClick = { ()=>this.getCleanForm() }>{ transfer.link }</Link>
            </div>
        </div>
      </div>
    ): <Loader/>;
  }
}
