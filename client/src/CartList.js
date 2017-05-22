import React, {Component} from 'react';
import Cart from './Cart.js'

class CartList extends Component {
  render() {
    return (
      // <main className="cartList">
      <div className="Cart">
        <span>Your Cart:</span>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sub-Total</th>
          </tr>
            <Cart />
          <tr>
            <th colspan="3">TOTAL:</th>
            <th>7.50</th>
          </tr>
        </table>
      </div>
        // {this.props.route.cartItems.map( (item) => {
        //   return <Cart itemName={item.name} itemQuantity={item.quant} itemPrice={item.price}/>
        // })}
      // </main>
    );
  }
}
export default CartList;