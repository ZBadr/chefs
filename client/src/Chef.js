import React from 'react';

const Chef = ({match}) => (
  <div>
    <h3>{match.params.chefId}</h3>
  </div>
)

export default Chef;