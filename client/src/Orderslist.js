import React, {Component} from 'react';
import Order from './Order.js';

class Orderslist extends Component {
  render() {
    return (
      <div>
        <div className="order-summary">
            <Order />
        </div>
      </div>
    );
  }
}
export default Orderslist;