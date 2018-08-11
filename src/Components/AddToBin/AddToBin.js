import React, { Component } from 'react'
import './AddToBin.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/shelfie-logo.png'
import axios from 'axios'

export default class AddToBin extends Component {
  state = {
    product_name: '',
    product_price: '0.00',
    product_image: '',
  }

  addToBin = async () => {
    try {
      const { product_id, product_name, product_price, product_image } = this.state
      const {shelf, bin} = this.props.match.params
      const { data: binDetails } = await axios.post(`/api/newProduct/${shelf}/${bin}`, { product_name, product_price, product_image })
      this.props.history.push(`/${shelf}/${bin}`)
    } catch (err) {
      console.error('addToBin failed in BinDetails.js:', err)
    }
  }

  handleInput(key, value) {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div>
        <nav id='add-bin-nav-bar'>
          <Link to='/' id='bin-nav-bar-left'>
            <img id='shelf-nav-bar-logo' src={logo} alt='logo' />
          </Link>
          <Link to={`/${this.props.match.params.shelf}`} id='bin-nav-bar-mid'>
            <p id='bin-nav-bar-mid-text'>Shelf {this.props.match.params.shelf}</p>
          </Link>
          <p id='add-bin-text'>Add to Bin {this.props.match.params.bin}</p>
        </nav >
        <div id='bin-details-page'>
          <div id='bin-details'>
            <section id='bin-details-mid'>
              <p className='bin-input-type'>Name</p>
              <input className='bin-input' onChange={e => this.handleInput('product_name', e.target.value)} value={this.state.product_name} placeholder='add product name...'/>
              <p className='bin-input-type' >Price</p>
              <div id='price-details'>
                <input className='bin-input-price' id='bin-input' onChange={e => this.handleInput('product_price', e.target.value)} value={this.state.product_price}/>
                <p id='dollar-sign'>$</p>
              </div>
              <p className='bin-input-type'>Image URL</p>
              <input className='bin-input' onChange={e => this.handleInput('product_image', e.target.value)} value={this.state.product_image} placeholder='paste image url...'/>
            <div id='add-bin-controls'>
              <button id='bin-button-add' onClick={() => this.addToBin()}>+ Add Inventory</button>
            </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}