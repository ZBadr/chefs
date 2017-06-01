import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Rate from 'material-ui/svg-icons/editor/monetization-on';
import Name from 'material-ui/svg-icons/social/person-outline';

class ChefsInfo extends Component {
  // Need state here to have info of logged in user to be able to grab their info and populate image & list
  render() {
    return (
    <div className="chef-profile">
      <div className="chef-profilePicture">
        <img src="http://img.freepik.com/free-vector/coloured-chefdesign_1152-73.jpg?size=338&ext=jpg" alt="chefs" height="250" width="250"/>
      </div>
       {/*List items start here*/}
       <div className="chef-list">
          <List>
            <ListItem primaryText={this.props.firstName} leftIcon={<Name />} />
            <ListItem primaryText={this.props.email} leftIcon={<Email />} />
            <ListItem primaryText={this.props.phoneNumber} leftIcon={<Phone />} />
            <ListItem primaryText={this.props.hourlyRate} leftIcon={<Rate />} />
          </List>
        </div>
       {/*List items end here*/}
      <div className="description">
          <p>
            <strong>Description: </strong>
            {this.props.description}
          </p>
       </div>
    </div>
    );
  }
}

export default ChefsInfo;