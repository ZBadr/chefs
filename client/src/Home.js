import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import validator from 'validator';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';



// Styling for tiles
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 900,
    overflowY: 'auto',
  },
};

// Temporary seed data for view
const tilesData = [
  {
    img: 'http://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/17/02/subwayovenroastedchicken.jpg?itok=dGATL5JA',
    dish: 'Grilled Chicken Sandwich',
    ingredients: "Grilled Chicken Breast, Lettuce, Tomatoe, Onions, Mayonaise" ,
    rating: '4.7',
  },
  {
    img: 'http://images.media-allrecipes.com/images/58656.png',
    dish: 'Tasty burger',
    ingredients: "Ground Beef, Salt, Pepper, Cheddar Cheese, Lettuce, Tomatoe, Onions, Mayonaise, Ketchup, Bacon" ,
    rating: '5',
  },
  {
    img: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/l/2000/lasagna-formaggio.ashx?vd=20170302T173722Z&ir=1&width=2000&height=1125&crop=auto&hash=534EB35822BD2B7E21D92092F87F69F7DA575156',
    dish: 'Lasagna',
    ingredients: "Ground Beef, Onion, Mozzarella, Ricotta, Parmesan Cheese, Tomato Sauce, Lasagna Noodles" ,
    rating: '4.9',
  },
  {
    img: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
    dish: 'Pizza',
    ingredients: "Mozzarella, Oregano, Mozzarella, Dough, Parmesan Cheese, Tomato Sauce, Cheese, Mushrooms, Peppers" ,
    rating: '5',
  },
  {
    img: 'https://static1.squarespace.com/static/5685a06669492ea07bb9b05d/t/5702d1922b8ddeaf55815b1f/1459802521539/Angel+Food-+High+Res-6766.jpg?format=1500w',
    dish: 'Donuts',
    ingredients: "Yeast, Milk, Flour, Vanilla Extract, Eggs, Refined Sugar, Salt, Butter, Sugar Glaze, Chocolate Glaze",
    rating: '4.6',
  },
  {
    img: 'http://www.creativechinese.com/wp-content/uploads/2017/04/default-pasta.jpg',
    dish: 'Pasta',
    ingredients: "Penne Pasta, Olive Oil, Salt, Black Pepper, Minced Garlic, Mushrooms, Red Wine, Crushed Tomatoes, Basil, Parmesan Cheese" ,
    rating: '4.2',
  },
  {
    img: 'http://img.taste.com.au/3knWR1Qs/taste/2016/11/paella-14048-1.jpeg',
    dish: 'Paella',
    ingredients: "Olive Oil, Paprika, Oregano, Salt, Black pepper, Garlic, Red Pepper, Rice, Saffron Threads, Bay Leaf, Parsley, Chicken Stock, Lemons, Onion, Red Bell Pepper, Shrimp, Chorizo",
    rating: '4.7',
  },
  {
    img: 'http://i1.wp.com/paleonewbie1.objects.cdn.dream.io/wp-content/uploads/2016/09/paleo-newbie-lemon-herb-roasted-chicken-recipe-1266x850.jpg?fit=1030%2C692',
    dish: 'Roasted Chicken',
    ingredients: " Chicken, Salt, Black pepper, Onion Powder, Margarine, Rosemary",
    rating: '4.3',
  },
];



class Home extends Component {

state = {
    open: false,
    currentTile: null
  };

handleOpen = (tile) => () => {
    this.setState({
        open: true,
        currentTile: tile,   
    });
  };


handleClose = () => {
    this.setState({open: false, currentTile: null});
  };

  

  render() {

    const actions = [
      <FlatButton
        label="Back"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div className="Home">
          <div className="grid-list" style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader className="home-subheader">Featured Recipes </Subheader>
              {/*Looping and populating tiles starts here*/}
              {tilesData.map((tile) => (
                <GridTile
                  onTouchTap={this.handleOpen(tile)}
                  key={tile.img}
                  title={tile.dish}
                  subtitle={<span>Rating: <b>{tile.rating}</b></span>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
              {/*End of tile looping and populating*/}
            </GridList>
            <Dialog
                title={this.getDish()}
                actions={actions}
                modal={true}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >
                 {this.getIngredients()}<br/><br/>
                 {this.getRating()}<br/><br/>
            </Dialog>
          </div>  
      </div>
    );
  }

getDish = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.dish;
  }

getRating = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return 'Rating: ' + this.state.currentTile.rating;
  }

getIngredients = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return 'Ingredients: ' + this.state.currentTile.ingredients;
  }

}

export default Home;