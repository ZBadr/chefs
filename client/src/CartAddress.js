import React, { Component } from 'react';

class CartAddress extends Component {

  render() {
    return (
      <div className="CartAddress">
        <div>
          <span>Same as home address?</span>
          <input type="checkbox" />
        </div>
        <input type="text" name="address1" placeholder="Address line 1" />
        <input type="text" name="address2" placeholder="Address line 2 (optional)" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="prov" placeholder="Province" />
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="postalCode" placeholder="Postal code" />
      </div>
    )
  }
}

export default CartAddress;


