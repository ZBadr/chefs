import React from 'react';
import {
  Link
} from 'react-router-dom'

const Chefs = ({match}) => (
  <div>
    <h2>Chefs</h2>
      <div>
        <Link to = {`${match.url}/gordonramsay`}>
          Gordon Ramsay
        </Link>
      </div>
      <div>
        <Link to = {`${match.url}/jamieoliver`}>
          Jamie Oliver
        </Link>
      </div>
      <div>
        <Link to = {`${match.url}/susurlee`}>
          Susur Lee
        </Link>
      </div>
  </div>
)

export default Chefs;