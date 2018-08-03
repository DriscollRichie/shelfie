import React, { Component } from 'react'
import logo from '../../assets/shelfie-logo.png'
import './BinList.css';
import { Link } from 'react-router-dom'

export default class Shelf extends Component {
  render() {
    return (
      <div>
        <nav id='shelf-nav-bar'>
          <Link to='/' id='shelf-nav-bar-left'>
              <img id='shelf-nav-bar-logo' src={logo} alt='logo' />
          </Link>
          <p>Shelf {this.props.match.params.shelf}</p>
        </nav>
      </div>
    )
  }
}