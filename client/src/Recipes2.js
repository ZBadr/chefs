import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 700,
    height: 700,
    overflowY: 'auto'
  }
};

const tilesData2 = [
  {
    img: 'https://static.wixstatic.com/media/c7a832_cecad3872fc34102a5bf3da44997d1e5~mv2.jpg',
    dish: 'Breakfast',
    rating: '4.7',
  },
  {
    img: 'http://images.media-allrecipes.com/images/58656.png',
    dish: 'Tasty burger',
    rating: '5',
  },
  {
    img: 'http://static.kidspot.com.au/cm_assets/613/italian_690x414-20150330021113.jpg~q75,dx720y432u1r1gg,c--.jpg',
    dish: 'Italian',
    rating: '4.9',
  },
  {
    img: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
    dish: 'Pizza',
    rating: '5',
  },
  {
    img: 'https://static1.squarespace.com/static/5685a06669492ea07bb9b05d/t/5702d1922b8ddeaf55815b1f/1459802521539/Angel+Food-+High+Res-6766.jpg?format=1500w',
    dish: 'Donuts',
    rating: '4.6',
  },
  {
    img: 'http://www.creativechinese.com/wp-content/uploads/2017/04/default-pasta.jpg',
    dish: 'Pasta',
    rating: '4.2',
  },
  {
    img: 'http://www.theseafoodbar.com/Restaurants/seafoodbar/img/web/Seafoodbar_BAR7177.jpg',
    dish: 'Seafood',
    rating: '4.7',
  },
  {
    img: 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    dish: 'Chicken',
    rating: '4.3',
  },
];



class Recipes2 extends Component {

state = {
    open: false,
    currentTile: null
    
  };

handleOpen = (tile) => () => {
    this.setState({
        open: true,
        currentTile: tile
        
    });

  };

handleClose = () => {
    this.setState({open: false, currentTile: null});
  };

  render() {
      const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Add to cart"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div style={styles.root}>
        <GridList
        cellHeight={180}
        style={styles.gridList}
        >
        <Subheader >Recipes</Subheader>
        {tilesData2.map((tile) => (
                <GridTile
                    onTouchTap={this.handleOpen(tile)}
                    key={tile.img}
                    title={tile.dish}
                    subtitle={<span>Rating: <b>{tile.rating}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                    <img src={tile.img} />
                </GridTile>
        ))}
        </GridList>
        <Dialog
            title={this.getDish()}
            actions={actions}
            modal={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            
            
            {/*<span>{this.state.currentTile.dish} </span>*/}
            
            {/*{this.getContent()}*/}
            {this.getRating()}
        </Dialog>
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
}

export default Recipes2;