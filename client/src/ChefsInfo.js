import React, {Component} from 'react';

class ChefsInfo extends Component {
  render() {
    return (
    <div>
      <section className="chefsinfo">
       <img class="profilePicture" src="../images/09.jpg" alt="chefspic" height="250" width="250"/>
        <p className="chefsinfo-description">Description and cooking background displayed here</p><button className="button">Edit Description</button>
        <div className="chefsinfo-rate">Hourly rate displayed here</div><button className="button">Edit Rate</button>
        <div className="chefsinfo-email">Email displayed here</div><button className="button">Edit Email</button>
        <div className="chefsinfo-phone">Phone displayed here</div><button className="button">Edit Phone Number</button>
      </section>
    </div>
    );
  }
}

export default ChefsInfo;