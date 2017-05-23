import React, {Component} from 'react';
import Cart from './Cart.js'
import Cal from './Calendar.js';
import CartAddress from './CartAddress.js';

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
            <CartAddress />
            <div>
              <h1>Delivery Time</h1>
              <Cal />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CartList;