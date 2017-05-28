import React from 'react';

const Recipe = ({match}) => (
  <div>
    <div>
      <h3>{match.params.recipeId}</h3>
    </div>
    <div>
      <img src="http://www.kawalingpinoy.com/wp-content/uploads/2014/12/yang-chow-fried-rice-1.jpg" alt="Food Pic"/>
    </div>
    <div>
      <p>
        Ingredients: 
      </p>
    </div>
    <div>
      <p> 
        Equipment needed:
      </p>
    </div>
    <div>
      <p> 
        Prep time and cooking steps:
      </p>
    </div>
    <div>
      <p> 
        Cuisines/dishes(belongs to):
      </p>
    </div>
    <div>
      <p> 
        Food restrictions and allergies:
      </p>
    </div>
     <div>
      <button type="button">Add dish to order</button>
    </div>
  </div>

)

export default Recipe;