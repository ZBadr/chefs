import React, {Component} from 'react';
import Cart from './Cart.js'

class CartList extends Component {
  render() {
    return (

      <div className="Cart">
        <span>Your Cart:</span>

        <table>
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

      </div>
    );
  }
}
export default CartList;