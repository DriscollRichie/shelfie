import React, { Component } from 'react'
import './ShelfList.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/shelfie-logo.png'

export default class ShelfList extends Component {
  render() {
    return (
      <div className='shelf-page'>
        <nav id='nav-bar'>
          <section id='nav-bar-content'>
            <img src={logo} alt='logo' id='logo' />
            <h1 id='nav-bar-title'>SHELFIE</h1>
          </section>
        </nav>
        <Link to='/A'>
          <div className='shelf'>
            <p className='shelf-text'>Shelf A</p>
          </div>
        </Link>
        <Link to='/B'>
          <div className='shelf'>
            <p className='shelf-text'>Shelf B</p>
          </div >
        </Link>
        <Link to='/C'>
          <div className='shelf'>
            <p className='shelf-text'>Shelf C</p>
          </div>
        </Link>
        <Link to='/D'>
          <div className='shelf'>
            <p className='shelf-text'>Shelf D</p>
          </div>
        </Link>
      </div>
    )
  }
}