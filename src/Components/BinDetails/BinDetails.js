import React, { Component } from 'react'
import logo from '../../assets/shelfie-logo.png'
import { Link } from 'react-router-dom'
import './BinDetails.css'
import axios from 'axios'

export default class BinDetails extends Component {
  state = {
    product_id: 0,
    product_name: '',
    product_price: 0.00,
    product_image: '',
    readOnly: true
  }

  componentDidMount = async () => {
    try {
    
      const { shelf, bin } = this.props.match.params
      const { data: binDetails } = await axios.get(`/api/${shelf}/${bin}/details`)
      this.setState({ product_id: binDetails.product_id, product_name: binDetails.product_name, product_price: binDetails.product_price, product_image: binDetails.product_image })
    } catch (err) {
      console.error('componentDidMount failed in BinDetails.js:', err)
    }
  }

  editBinDetails = async () => {
    try {
      const {product_id, product_name, product_price, product_image} = this.state
      const { data: binDetails } = await axios.patch(`/api/product/${product_id}`, {product_name, product_price, product_image})
      this.setState({ readOnly: !this.state.readOnly, product_id: binDetails.product_id, product_name: binDetails.product_name, product_price: binDetails.product_price, product_image: binDetails.product_image })
    } catch(err) {
      console.error('editBinDetails failed in BinDetails.js:', err)
    }
  }

  handleInput (key, value) {
    this.setState({[key]: value })
  }

  render() {
    return (
      <div>
        <nav id='bin-nav-bar'>
          <Link to='/' id='bin-nav-bar-left'>
            <img id='shelf-nav-bar-logo' src={logo} alt='logo' />
          </Link>
          <Link to={`/${this.props.match.params.shelf}`} id='bin-nav-bar-mid'>
              <p id='bin-nav-bar-mid-text'>Shelf {this.props.match.params.shelf}</p>
          </Link>
          <p>Bin {this.props.match.params.bin}</p>
        </nav >
        <div id='bin-details-page'>
          <div id='bin-details'>
            <img id='product-image' src={this.state.product_image} alt={this.state.product_name} width='250px' />
            <section id='bin-details-mid'>
              <p className='bin-input-type'>Name</p>
              <input className='bin-input' onChange={e => this.handleInput('product_name', e.target.value)} value={this.state.product_name} readOnly={this.state.readOnly} />
              <p className='bin-input-type' >Price</p>
              <div id='price-details'>
              <input className='bin-input-price' id='bin-input' onChange={e => this.handleInput('product_price', e.target.value)} value={this.state.product_price} readOnly={this.state.readOnly} />
              <p id='dollar-sign'>$</p>
              </div>
              {!this.state.readOnly ?
              <div>
              <p className='bin-input-type'>Image URL</p>
              <input className='bin-input' onChange={e => this.handleInput('product_image', e.target.value)} value={this.state.product_image}/>
              </div>
              : null}
              <div id='bin-controls'>
                {this.state.readOnly ? <button className='bin-button' onClick={() => this.setState({ readOnly: !this.state.readOnly })}>EDIT</button>
                  : <button className='bin-button-save' onClick={() => this.editBinDetails()}>SAVE</button>}
                <button className='bin-button'>DELETE</button>
              </div>
            </section>
          </div>
        </div>
      </div >
    )
  }
}