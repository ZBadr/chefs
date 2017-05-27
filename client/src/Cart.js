import React, {Component} from 'react';


class Cart extends Component {

  handleDecreaseQuant = (e) => {
    this.props.changeQuant = -1
  }

  handleIncreaseQuant = (e) => {
    this.props.changeQuant = +1
  }
  render() {
    return (

      <tr className="cartItem">
        <td className="cartItemName">{this.props.cartItems.name}</td>
        <td className="cartItemQuant">
          <button name="decrease-quantuty" onClick={this.handleDecreaseQuant}>&minus;</button>
          {this.props.cartItems.quantity}
          <button name="increase-quantity" onClick={this.handleIncreaseQuant}>+</button>
        </td>
        <td className="cartItemPrice">{this.props.cartItems.price}</td>
        <td className="cartItemSubtotal">STILL MISSING</td>
      </tr>

    );
  }
}
export default Cart;