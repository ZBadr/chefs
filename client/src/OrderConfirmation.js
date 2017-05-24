import React, {Component} from 'react';
import './OrderConfirmation.css';

class OrderConfirmation extends Component {
  render() {
    return (
      
      <div className="orderConfirmation">
          <section className="names">
              <div>Name: Client name goes here</div>
              <div>Chef: Chef name goes here</div>
          </section>
          <section className="orderItems">
                <span id="items">Item 1</span><span id="prices"> Price 1 </span><form action=""/><input type="checkbox" name="itemConfirmation" value="Yes"/>Yes<br/>
                <span id="items">Item 2</span><span id="prices"> Price 2 </span><form action=""/><input type="checkbox" name="itemConfirmation" value="Yes"/>Yes<br/>
                <span id="items">Item 3</span><span id="prices"> Price 3 </span><form action=""/><input type="checkbox" name="itemConfirmation" value="Yes"/>Yes<br/>
                <span id="prices">Total Price</span>
          </section>
          <section className="address">
              <div>Street/Apartment Address: </div>
              <div>City: </div>
              <div>Province: </div>
              <div>Postal Code: </div>
          </section>
          <section className="timeAndDate">
              <div>Time: </div>
              <div>Date: </div>
          </section>
          <section className="comments">
              <form action="/OrderConfirmation" method="post">
                    <div>
                        <textarea name="com" id="com" placeholder="Place any comments about the order here">
                        </textarea>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
          </section>
      </div>
    );
  }
}

export default OrderConfirmation;
