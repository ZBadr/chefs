import React, {Component} from 'react';
import Cart from './Cart.js'
import Calendar from './Calendar.js';

class CartList extends Component {
  render() {
    return (

      <div className="Cart">
        <h1>Your Order:</h1>

        <table className="orderSummary">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub-Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map( (item) => {
              return <Cart cartItems={item}/>
            })}
          <tr>
            <th colSpan="3">TOTAL:</th>
            <th>7.50</th>
          </tr>
          </tbody>
        </table>


        <div>
          <h1>Address</h1>
          <form>
            <h3>Same as home address?</h3>
              <input type="checkbox" />
              <input type="text" name="address1" placeholder="Address line 1" />
              <input type="text" name="address2" placeholder="Address line 2 (optional)" />
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="prov" placeholder="Province" />
              <input type="text" name="country" placeholder="Country" />
              <input type="text" name="postalCode" placeholder="Postal code" />
          </form>
        </div>

        <div>
          <h1>Delivery Time</h1>

            <Calendar />

        </div>
      </div>
    );
  }
}
export default CartList;