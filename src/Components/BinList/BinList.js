import React, { Component } from 'react'
import logo from '../../assets/shelfie-logo.png'
import './BinList.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class BinList extends Component {
  state = {
    bins: []
  }


  componentDidMount = async () => {
    try {
      const { data: bins } = await axios.get(`/api/bins/${this.props.match.params.shelf}`)
      this.setState({ bins })
    } catch (err) {
      console.error('componentDidMount failed in BinList.js:', err)
    }
  }

  render() {
    const bins = this.state.bins.map(e => {
      return (
        <div>
          {e.product_name && e.product_price ?
            <Link to={`/${this.props.match.params.shelf}/${e.bin}`}>
              <div className='bin-full'>
                <p className='bin-full-text'>Bin {e.bin}</p>
              </div>
            </Link>
            :
            <Link to={`/add/${this.props.match.params.shelf}/${e.bin}`}>
              <div className='bin-empty'>
                <p className='bin-empty-text'>+ Add Inventory</p>
              </div>
            </Link>
          }
        </div>
      )
    })
    return (
      <div>
        <nav id='shelf-nav-bar'>
          <Link to='/' id='shelf-nav-bar-left'>
            <img id='shelf-nav-bar-logo' src={logo} alt='logo' />
          </Link>
          <p>Shelf {this.props.match.params.shelf}</p>
        </nav>
        <section id='bin-section'>
          {bins}
        </section>
      </div>
    )
  }
}