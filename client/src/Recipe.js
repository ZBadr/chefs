import React from 'react';

const Recipe = ({match}) => (
  <div>
    <h3>{match.params.recipeId}</h3>
  </div>
)

export default Recipe;