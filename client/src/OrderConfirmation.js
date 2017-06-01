import React, {Component} from 'react';
import './OrderConfirmation.css';
import CartAddress from './CartAddress.js';

class OrderConfirmation extends Component {
  render() {
    return (

      <div className="orderConfirmation">
          <section className="names">
              <div>Name: Client name goes here</div>
              <div>Chef: Chef name goes here</div>
          </section>
          <section className="orderItems">
                <div id="items">Item 1</div><div id="prices"> Price 1  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                <div id="items">Item 2</div><div id="prices"> Price 2  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                <div id="items">Item 3</div><div id="prices"> Price 3  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                <span id="prices">Total Price</span>
          </section>
          <section className="address">
              <h1>Address</h1>
              <div>
                <input type="button" value="Same as home address" onClick={this.handleButtonClick} />
              </div>

              {this.state.displayForm ? null : <h1>{this.state.address}</h1>}

              {this.state.displayForm ?
                <div className="input-address">
                  <input type="text" name="address1" placeholder="Address line 1" />
                  <input type="text" name="address2" placeholder="Address line 2 (optional)" />
                  <input type="text" name="city" placeholder="City" />
                  <input type="text" name="prov" placeholder="Province" />
                  <input type="text" name="country" placeholder="Country" />
                  <input type="text" name="postalCode" placeholder="Postal code" />
                </div>
                :
                null
              }
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
