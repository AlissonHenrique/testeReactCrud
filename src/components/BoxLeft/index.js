import React, { Component } from 'react';
import logo from '../../assets/img/logo-tc.png'
import { Boxleft } from './styles'
import { Link } from 'react-router-dom';

export default class BoxLeft extends Component {
  render() {
    return (
      <Boxleft>
        <img src={logo} alt="logo" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Lista</Link>
          </li>
          <li>
            <Link to="/edit">Adicionar</Link>
          </li>
        </ul>
      </Boxleft>

    )
  }
}
