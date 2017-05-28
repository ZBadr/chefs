import React, {Component} from 'react';
import Cart from './Cart.js'
import Cal from './Calendar.js';
import CartAddress from './CartAddress.js';
import TimePicker from 'react-bootstrap-time-picker';


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
              return <Cart cartItems={item}/>
            })}
          <tr>
            <th colSpan="3">TOTAL:</th>
            <th>
              {this.props.cartItems.map( (item) => {
                return item.price * item.quantity;
              }).reduce(( x, y ) => { return x + y ; } )}
            </th>
          </tr>
          </tbody>
        </table>
        <div>
          <h1>Address</h1>
          <form>
            <CartAddress />
            <div>
              <h1>Delivery Time</h1>
              <TimePicker start="10:00" end="21:00" step={30} />
              <Cal />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CartList;