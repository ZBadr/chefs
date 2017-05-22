import React, {Component} from 'react';


class Cart extends Component {
  render() {
    return (
      <tr className="cartItems">
          <td className="cartItemName">Young Chow Fried Rice</td>
          <td className="cartItemQuant">1</td>
          <td className="cartItemPrice">7.50</td>
          <td className="cartItemSubtotal">7.50</td>
      </tr>
    );
  }
}
export default Cart;