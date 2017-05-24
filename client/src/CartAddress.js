import React, { Component } from 'react';

class CartAddress extends Component {

  constructor(props) {
    super();
    this.state = {
      useHomeAddress: false
    }
  }

  handleAddressChange = (event) => {
    this.setState({useHomeAddress: !this.state.useHomeAddress});
    console.log("Change!")
  }

  render() {

    let output = this.state.useHomeAddress ?
      "Put the address of the user here." :
      (
        <div>
        <input type="text" name="address1" placeholder="Address line 1" />
        <input type="text" name="address2" placeholder="Address line 2 (optional)" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="prov" placeholder="Province" />
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="postalCode" placeholder="Postal code" />
        </div>
      );

    return (
      <div className="CartAddress">
        <div>
          <span>Same as home address?</span>
          <input type="checkbox" onChange={this.handleAddressChange}/>
        </div>
        { output }
        </div>
    )
  }
}

export default CartAddress;


