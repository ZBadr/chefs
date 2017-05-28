import React, { Component } from 'react';
import Client from './Client.js';

class CartAddress extends Component {

  constructor(props){
    super(props);
    this.state = {
      address: '',
      displayForm: true
    };
  }

  handleButtonClick = (e) => {
    if (this.state.displayForm === true){
      Client.getAddress( (address) => {
        this.setState({
          address: address,
          displayForm: false
        });
      });
    }else{
      Client.getAddress( (address) => {
        this.setState({
          displayForm: true
        });
      });
    }
  }

  render() {
    return (
      <div className="CartAddress">
      <h1>Address</h1>
        <div>
          <input type="button" value="Same as home address" onClick={this.handleButtonClick} />
        </div>

        {this.state.displayForm ? null : <h1>{this.state.address}</h1>}

        {this.state.displayForm ?
          <div className="input-address">
            <input type="text" name="address1" placeholder="Address line 1" />
            <input type="text" name="address2" placeholder="Address line 2 (optional)" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="prov" placeholder="Province" />
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="postalCode" placeholder="Postal code" />
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default CartAddress;

