import React, {Component} from 'react';

class Info extends Component {
  render() {
    return (
    <div>
      <section className="info">
       <img class="profilePicture" src="../images/09.jpg" alt="chefs" height="250" width="250"/>
       <ul>
        <li><div className="info-email">Email displayed here</div></li>
        <li><div className="info-address">Address displayed here</div></li>
        <li><div className="info-phone">Phone displayed here</div></li>
       </ul>
      </section>
    </div>
    );
  }
}

export default Info;