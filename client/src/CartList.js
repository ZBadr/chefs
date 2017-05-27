import React, {Component} from 'react';
import Cart from './Cart.js'
import Cal from './Calendar.js';
import CartAddress from './CartAddress.js';


class CartList extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

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
                return <Cart cartItems={item} />
              })}
              <tr>
                <th colSpan="3">TOTAL:</th>
                <th>7.50</th>
              </tr>
            </tbody>
          </table>
        <CartAddress />
        <Cal />
      </div>
    );
  }
}
export default CartList;