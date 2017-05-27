import React, {Component} from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


class Info extends Component {
  render() {
    return (
    <div>
      <section className="info">
       <img className="profilePicture" src="../images/09.jpg" alt="chefs" height="250" width="250"/>
          <List className="list">
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
        {/*<div><div className="info-email">Email displayed here</div><button className="button">Edit Email</button></div>
        <div><div className="info-address">Address displayed here</div><button className="button">Edit Address</button></div>
        <div><div className="info-phone">Phone displayed here</div><button className="button">Edit Phone Number</button></div>*/}
      </section>
    </div>
    );
  }
}

export default Info;