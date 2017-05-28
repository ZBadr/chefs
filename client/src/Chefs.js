/*import React from 'react';
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
)*/


import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 700,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://clipart-library.com/images/8iGbMRGjT.jpg',
    title: 'Breakfast',
    dish: 'jill111',
  },
  {
    img: 'http://images.media-allrecipes.com/images/58656.png',
    title: 'Tasty burger',
    dish: 'pashminu',
  },
  {
    img: 'http://static.kidspot.com.au/cm_assets/613/italian_690x414-20150330021113.jpg~q75,dx720y432u1r1gg,c--.jpg',
    title: 'Italian',
    dish: 'Danson67',
  },
  {
    img: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
    title: 'Pizza',
    dish: 'fancycrave1',
  },
  {
    img: 'https://static1.squarespace.com/static/5685a06669492ea07bb9b05d/t/5702d1922b8ddeaf55815b1f/1459802521539/Angel+Food-+High+Res-6766.jpg?format=1500w',
    title: 'Donuts',
    dish: 'Hans',
  },
  {
    img: 'http://www.creativechinese.com/wp-content/uploads/2017/04/default-pasta.jpg',
    title: 'Pasta',
    dish: 'fancycravel',
  },
  {
    img: 'http://www.theseafoodbar.com/Restaurants/seafoodbar/img/web/Seafoodbar_BAR7177.jpg',
    title: 'Seafood',
    dish: 'jill111',
  },
  {
    img: 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    title: 'Chicken',
    dish: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Chefs = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Recipes</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.dish}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Chefs;