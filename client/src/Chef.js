import React from 'react';

const Chef = ({match}) => (
  <div>
    <div>
      <h3>{match.params.chefId}</h3>
    </div>
    <div>
      <img src="http://media.safebee.com/assets/images/2015/4/chef%20tips.jpg.838x0_q67_crop-smart.jpg" alt="Chef Pic"/>
    </div>
    <div>
      Chef name:
    </div>
    <div>
      <p> 
      Chef description/background:
      </p>
    </div>
    <div>
      Hourly rate:
    </div>
    <div>
      <p> 
      Associated cuisines/dishes:
      </p>
    </div>
     <div>
      <button type="button">Select Chef</button>
    </div>
  </div>
)

export default Chef;