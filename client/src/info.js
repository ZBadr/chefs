import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Location from 'material-ui/svg-icons/communication/location-on';



class Info extends Component {
  // Need state here to have info of logged in user to be able to grab their info and populate image & list
  render() {
    return (
    <div>
      <img className="profilePicture" src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" alt="chefs" height="250" width="250"/>
      <section>
       {/*List items start here*/}
          <List className="list">
            <ListItem primaryText="Email goes here" leftIcon={<Email />} />
            <ListItem primaryText="Phone goes here" leftIcon={<Phone />} />
            <ListItem primaryText="Address goes here" leftIcon={<Location />} />
          </List>
       {/*List items end here*/}
      </section>
    </div>
    );
  }
}

export default Info;