import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Rate from 'material-ui/svg-icons/editor/monetization-on';

class ChefsInfo extends Component {
  // Need state here to have info of logged in user to be able to grab their info and populate image & list
  render() {
    return (
    <div>
      <img className="profilePicture" src="http://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?size=338&ext=jpg" alt="chefs" height="250" width="250"/>
      <section>
       {/*List items start here*/}
          <List className="list">
            <ListItem primaryText="Email goes here" leftIcon={<Email />} />
            <ListItem primaryText="Phone goes here" leftIcon={<Phone />} />
            <ListItem primaryText="Hourly rate goes here" leftIcon={<Rate />} />
          </List>
       {/*List items end here*/}
      </section>
    </div>
    );
  }
}

export default ChefsInfo;