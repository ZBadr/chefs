import React, {Component} from 'react';

class Info extends Component {
  render() {
    return (
    <div>
      <section className="info">
       <img class="profilePicture" src="../images/09.jpg" alt="chefs" height="250" width="250"/>
        <div className="info-email">Email displayed here</div><button className="button">Edit Email</button>
        <div className="info-address">Address displayed here</div><button className="button">Edit Address</button>
        <div className="info-phone">Phone displayed here</div><button className="button">Edit Phone Number</button>
      </section>
    </div>
    );
  }
}

export default Info;