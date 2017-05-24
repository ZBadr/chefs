import React, {Component} from 'react';


class Cart extends Component {
  render() {

    let subTotal = this.props.cartItems.quantity * this.props.cartItems.price;

    return (

      <tr className="cartItem">
        <td className="cartItemName">{this.props.cartItems.name}</td>
        <td className="cartItemQuant">{this.props.cartItems.quantity}</td>
        <td className="cartItemPrice">{this.props.cartItems.price}</td>
        <td className="cartItemSubtotal">{subTotal}</td>
      </tr>

    );
  }
}
export default Cart;