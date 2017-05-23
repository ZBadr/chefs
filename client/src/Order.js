import React, {Component} from 'react';

class Order extends Component {
  render() {
    return (
      <div className="order">
        {/*need a loop to go through the number of recipes/items per order here*/}
        <span>Order Number</span>
        <div>Chef Name</div>
        <div>Order date/time</div>
          <ul>
            <li><a href="" className="recipe-link">Recipe 1 link and item price</a></li>
            <li><a href="" className="recipe-link">Recipe 2 link and item price</a></li>
          </ul>
        <div className="order-totalprice">Total order price</div>
      </div>
    );
  }
}

export default Order;
