import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';



class Order extends Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return (
      <div className="order"> Orders
      <Divider />
        {/*need a loop to go through the number of recipes/items per order here*/}
      <details>
        <summary className="orderNumberCollapse">Order Number
          <div className="orderNumberActive">Status</div>
          </summary>
          <section className="orderDetails">
            <div>{this.props.orderItem}</div>
            <div>Chef Name</div>
            <div>Address</div>
            <div>Order date/time</div>
            <div>Order Items:</div>
            {/*Code for modal starts here*/}
              <div onClick={this.handleClick}>
                <RaisedButton label="Recipe" />
                {
                  this.state.isShowingModal &&
                  <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                      <h1>Recipe Name</h1>
                      <p>Recipe description: </p>
                      <p>Recipe ingredients: </p>
                      <p>Recipe equipment: </p>
                      <p>Recipe cuisines/dishes: </p>
                    </ModalDialog>
                  </ModalContainer>
                }
                {/*Code for modal ends here*/}
              </div>
              <br/>
            <div className="order-totalprice">Total order price</div>
          </section>
        </details>
        <details>
        <summary className="orderNumberCollapse">Order Number
          <div className="orderNumberActive">Status</div>
          </summary>
          <section className="orderDetails">
            <div>Client Name</div>
            <div>Chef Name</div>
            <div>Address</div>
            <div>Order date/time</div>
            <div>Order Items:</div>
            {/*Code for modal starts here*/}
              <div onClick={this.handleClick}>
                <RaisedButton label="Recipe" />
                {
                  this.state.isShowingModal &&
                  <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                      <h1>Recipe Name</h1>
                      <p>Recipe description: </p>
                      <p>Recipe ingredients: </p>
                      <p>Recipe equipment: </p>
                      <p>Recipe cuisines/dishes: </p>
                    </ModalDialog>
                  </ModalContainer>
                }
                {/*Code for modal ends here*/}
              </div>
              <br/>
            <div className="order-totalprice">Total order price</div>
          </section>
        </details>
      </div>
    );
  }
}

export default Order;
