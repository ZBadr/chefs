import React, {Component} from 'react';

class Info extends Component {
  render() {
    return (
    <div>
      <section className="info">
       <img class="profilePicture" src="../images/09.jpg" alt="chefs" height="250" width="250"/>
        <div className="info-email">Email displayed here</div>
        <div className="info-address">Address displayed here</div>
        <div className="info-phone">Phone displayed here</div>
      </section>
    </div>
    );
  }
}

export default Info;