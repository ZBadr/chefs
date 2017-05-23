import React, {Component} from 'react';


class Cart extends Component {
  render() {
    return (

      <tr className="cartItem">
        <td className="cartItemName">{this.props.cartItems.name}</td>
        <td className="cartItemQuant">{this.props.cartItems.quantity}</td>
        <td className="cartItemPrice">{this.props.cartItems.price}</td>
        <td className="cartItemSubtotal">STILL MISSING</td>
      </tr>

    );
  }
}
export default Cart;