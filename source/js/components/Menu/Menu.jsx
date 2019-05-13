import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Menu.scss';
import { menuItems } from 'constants/menu'
import classNames from 'classnames';

export default class Menu extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props);

    this.state = {
      menuClone: menuItems,
      checkIfActive:false
    }
    this.checkIfActive = this.checkIfActive.bind(this);
  }

  
  checkIfActive(mainRoute, subMenu) {
    let isActive = false;
    let rootUrl = '';

    if(subMenu){
      if(window.location.pathname.split('/')[2]){
        rootUrl = location.pathname.split('/')[2];
      }
    }else
        if(window.location.pathname.split('/')[1]){
          rootUrl = location.pathname.split('/')[1];
        }


    if (mainRoute.indexOf(rootUrl) >= 0 && rootUrl !== '') {
      isActive = true;
    }

    return isActive;
  }


  renderItems(){
    const { menuClone } = this.state;
      return menuClone.map((value, key)=>{
         const isActive = this.checkIfActive(value.item.link);
        const active = classNames(
          {[styles.active]: isActive}
        );
        return  ( 
                      <li id={ key} >
                        <a className={ active} href={value.item.link}> {value.item.title} </a>
                      </li>
                  )
      })
  }

  renderSubMenu(){
    const { menuClone } = this.state;
    return menuClone.map((value, key)=>{
      const isActive = this.checkIfActive(value.item.link);
      return  isActive && value.subMenuItems && this.renderSubItems(value.subMenuItems)
    })
    
  }

  renderSubItems(subItems){
    return <ul> 
            {subItems.map((item, key)=> {
              const isActive = this.checkIfActive(item.link, true);
              const active = classNames(
                {[styles.active]: isActive}
              );
              
              return (<li id={key}>
                          <a className = { active } href={ item.link }>{ item.title }</a>
                      </li>)})}
           </ul>
  }

  render() {    
    return (
      <div className = { styles.wrapper }>
        <ul>
            { this.renderItems() }
        </ul>
        <div className = { styles.subMenu }>
            { this.renderSubMenu() }
        </div>
      </div>
    );
  }
}
