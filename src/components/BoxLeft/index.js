import React, { Component } from 'react';
import logo from '../../assets/img/logo-tc.png'
import {Boxleft} from './styles'


export default class BoxLeft extends Component {
  render() {
    return (
        <Boxleft>
        <img src={logo} alt="logo" />
        </Boxleft>
    
        )
  }
}
