import React, {Component} from 'react';


class Cart extends Component {

  handleDecreaseQuant = (e) => {
    this.props.changeQuant = -1
  }

  handleIncreaseQuant = (e) => {
    this.props.changeQuant = +1
  }
  render() {

    let subTotal = this.props.cartItems.quantity * this.props.cartItems.price;

    return (

      <tr className="cartItem">
        <td className="cartItemName">{this.props.cartItems.name}</td>
        <td className="cartItemQuant">
          <button name="decrease-quantuty" onClick={this.handleDecreaseQuant}>&minus;</button>
          {this.props.cartItems.quantity}
          <button name="increase-quantity" onClick={this.handleIncreaseQuant}>+</button>
        </td>
        <td className="cartItemPrice">{this.props.cartItems.price}</td>
        <td className="cartItemSubtotal">{subTotal}</td>
      </tr>

    );
  }
}
export default Cart;