import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import validator from 'validator';

// Styling for tiles
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 300,
    overflowY: 'auto',
  },
};

// Temporary seed data for view
const tilesData = [
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

const tilesData1 = [
  {
    img: 'http://www.youthvillage.co.za/wp-content/uploads/2014/11/Food-safety-hygiene-training1.jpg',
    name: 'Jill',
    rating: '5',
  },
  {
    img: 'https://static01.nyt.com/images/2011/12/14/dining/14MAMA_SPAN/14MAMA-jumbo.jpg',
    name: 'Mama Chef',
    rating: '4.7',
  },
  {
    img: 'http://cdn.abclocal.go.com/content/wtvd/images/cms/automation/images/1301472_1280x720.jpg',
    name: 'Chef1',
    rating: '4.6',
  },
  {
    img: 'http://newyork.peninsula.com/en/~/media/Images/New-York/06_DiscoverTheHotel/A_HotelMoments/Chef-Sam-1074-2.ashx',
    name: 'Chef2',
    rating: '4.5',
  },
  {
    img: 'https://cdn.shutterstock.com/shutterstock/videos/5893457/thumb/1.jpg?i10c=img.resize(height:160)',
    name: 'Chef3',
    rating: '4.7',
  },
  {
    img: 'https://media.mnn.com/assets/images/2014/11/Chef1.jpg.653x0_q80_crop-smart.jpg',
    name: 'Chef4',
    rating: '5',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sushi_chef_Masayoshi_Kazato_02.JPG/1200px-Sushi_chef_Masayoshi_Kazato_02.JPG',
    name: 'Chef5',
    rating: '4.1',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Achatz.jpeg/1200px-Achatz.jpeg',
    name: 'Chef6',
    rating: '4.9',
  },
];

class Home extends Component {


  constructor (props) {
    super(props);
    this.state = {
      emptySearchByIngredients: false,
      emptySearchByChef: false,
      emptySearchByDish: false,
      noResult: false,
      result: []
    };
  }

  handleSearchByDish = (e) => { //THIS FINDS CHEF BY DISH
    if (e.key === 'Enter'){
      this.setState({result: []}); //THIS CLEARS OLD SEARCH RESULT BEFORE NEW SEARCH
      let query = document.getElementById('search-by-dish').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByDish: true});
      }else{
          let oReq = new XMLHttpRequest(),
              method = "POST",
              url = "/searchByRecipes";
          oReq.open(method, url);
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          const self=this;
          oReq.onreadystatechange = function () {
            if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
              let result = JSON.parse(oReq.responseText)
              let updatedResults = self.state.result.concat(result[0].email);
              self.setState({result: updatedResults});
            }else if(oReq.status === 400){
              return self.setState({noResult: true});
            }
          };
          oReq.send(`search=${encodeURIComponent(query)}`);
      }
      e.target.value = "";//Clears search field
    }
  }

  handleSearchByIngredients = (e) => {
    if (e.key === 'Enter'){
      this.setState({result: []}); //THIS CLEARS OLD SEARCH RESULT BEFORE NEW SEARCH
      let query = document.getElementById('search-by-ingredients').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByIngredients: true});
      }else{
          let oReq = new XMLHttpRequest(),
              method = "POST",
              url = "/searchByIngredients";
          oReq.open(method, url);
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          const self=this;
          oReq.onreadystatechange = function () {
            if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
              let result = JSON.parse(oReq.responseText)
              let updatedResults = self.state.result.concat(result[0].name);//THIS IS THE SEARCH RESULT OBJECT
              self.setState({result: updatedResults});
            }else if(oReq.status === 400){
              return self.setState({noResult: true});
            }
          };
          oReq.send(`search=${encodeURIComponent(query)}`);
      }
      e.target.value = "";//Clears search field
    }
  }

  handleSearchByChefs = (e) => {
    if (e.key === 'Enter'){
      this.setState({result: []}); //THIS CLEARS OLD SEARCH RESULT BEFORE NEW SEARCH
      let query = document.getElementById('search-by-chefs').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByChefs: true});
      }else{
          let oReq = new XMLHttpRequest(),
              method = "POST",
              url = "/searchByChefs";
          oReq.open(method, url);
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          const self=this;
          oReq.onreadystatechange = function () {
            if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
              let result = JSON.parse(oReq.responseText)
              let updatedResults = self.state.result.concat(result[0].name);//THIS IS THE SEARCH RESULT OBJECT
              self.setState({result: updatedResults});
            }else if(oReq.status === 400){
              return self.setState({noResult: true});
            }
          };
          oReq.send(`search=${encodeURIComponent(query)}`);
      }
      e.target.value = ""; //Clear search field
    }
  }

  render() {
    return (
      <div className="Home">
        <div className="searchboxes">
          <div className="search-dish">
            <TextField
                id="search-by-dish"
                hintText="Search by dish"
                onKeyPress={this.handleSearchByDish}
              /><br />
              <br />
            <TextField
                id="search-by-ingredients"
                hintText="Search by ingredients"
                onKeyPress={this.handleSearchByIngredients}
              /><br />
          </div>
          <div className="search-chef">
            <TextField id="search-by-chefs" hintText="Search by chef" onKeyPress={this.handleSearchByChefs}/><br />
          </div>
          </div>

          {this.state.noResult ? <h1>No result</h1> : <h1>{this.state.result}</h1>}

          <div style={styles.root}>
            <GridList
              cellHeight={100}
              style={styles.gridList}
            >
              <Subheader >Featured Recipes </Subheader>
              {/*Looping and populating tiles starts here*/}
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.dish}
                  subtitle={<span>Rating: <b>{tile.rating}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
              {/*End of tile looping and populating*/}
            </GridList>
          </div>
          <Link to = "/recipe">
            <h5>More recipes</h5>
          </Link>




         <div style={styles.root}>
            <GridList
              cellHeight={100}
              style={styles.gridList}
            >
              <Subheader>Featured Chefs </Subheader>
        {/*Looping and populating tiles starts here*/}
              {tilesData1.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.name}
                  subtitle={<span>Rating <b>{tile.rating}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
        {/*End of tile looping and populating*/}
            </GridList>
          </div>
          <Link to = "/chef">
            <h5>More chefs</h5>
          </Link>
      </div>
    );
  }
}

export default Home;