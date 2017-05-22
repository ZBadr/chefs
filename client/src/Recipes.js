import React from 'react';
import {
  Link
} from 'react-router-dom'

const Recipes = ({match}) => (
  <div>
    <h2>Recipes</h2>
      <div>
        <Link to = {`${match.url}/youngchowfriedrice`}>
          Young Chow Fried Rice
        </Link>
      </div>
      <div>
        <Link to = {`${match.url}/filetmignon`}>
          Filet Mignon
        </Link>
      </div>
      <div>
        <Link to = {`${match.url}/foiegrasburger`}>
          Foie gras Burger
        </Link>
      </div>
  </div>
)

export default Recipes;