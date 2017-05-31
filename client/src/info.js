import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Location from 'material-ui/svg-icons/communication/location-on';
import Name from 'material-ui/svg-icons/social/person-outline';




class Info extends Component {
  // Need state here to have info of logged in user to be able to grab their info and populate image & list
  render() {
    return (
    <div className="user-profile">
      <img className="user-profilePicture" src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" alt="chefs" height="250" width="250"/>
      <section>
       {/*List items start here*/}
          <List className="list">
            <ListItem primaryText={this.props.email} leftIcon={<Email />} />
            <ListItem primaryText={this.props.phoneNumber} leftIcon={<Phone />} />
            <ListItem primaryText={this.props.address} leftIcon={<Location />} />
          </List>
       {/*List items end here*/}
      </section>
    </div>
    );
  }
}

export default Info;