import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Book from 'material-ui/svg-icons/action/book';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import validator from 'validator';




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
    preparationTimeInMinutes: "",
    rating: '4.7',
  },
  {
    img: 'http://images.media-allrecipes.com/images/58656.png',
    dish: 'Tasty burger',
    ingredients: "Ground Beef, Salt, Pepper, Cheddar Cheese, Lettuce, Tomatoe, Onions, Mayonaise, Ketchup, Bacon" ,
    preparationTimeInMinutes: "",
    rating: '5',
  },
  {
    img: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/l/2000/lasagna-formaggio.ashx?vd=20170302T173722Z&ir=1&width=2000&height=1125&crop=auto&hash=534EB35822BD2B7E21D92092F87F69F7DA575156',
    dish: 'Lasagna',
    ingredients: "Ground Beef, Onion, Mozzarella, Ricotta, Parmesan Cheese, Tomato Sauce, Lasagna Noodles" ,
    preparationTimeInMinutes: "",
    rating: '4.9',
  },
  {
    img: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
    dish: 'Pizza',
    ingredients: "Mozzarella, Oregano, Mozzarella, Dough, Parmesan Cheese, Tomato Sauce, Cheese, Mushrooms, Peppers" ,
    preparationTimeInMinutes: "",
    rating: '5',
  },
  {
    img: 'https://static1.squarespace.com/static/5685a06669492ea07bb9b05d/t/5702d1922b8ddeaf55815b1f/1459802521539/Angel+Food-+High+Res-6766.jpg?format=1500w',
    dish: 'Donuts',
    ingredients: "Yeast, Milk, Flour, Vanilla Extract, Eggs, Refined Sugar, Salt, Butter, Sugar Glaze, Chocolate Glaze",
    preparationTimeInMinutes: "",
    rating: '4.6',
  },
  {
    img: 'http://www.creativechinese.com/wp-content/uploads/2017/04/default-pasta.jpg',
    dish: 'Pasta',
    ingredients: "Penne Pasta, Olive Oil, Salt, Black Pepper, Minced Garlic, Mushrooms, Red Wine, Crushed Tomatoes, Basil, Parmesan Cheese" ,
    preparationTimeInMinutes: "",
    rating: '4.2',
  },
  {
    img: 'http://img.taste.com.au/3knWR1Qs/taste/2016/11/paella-14048-1.jpeg',
    dish: 'Paella',
    ingredients: "Olive Oil, Paprika, Oregano, Salt, Black pepper, Garlic, Red Pepper, Rice, Saffron Threads, Bay Leaf, Parsley, Chicken Stock, Lemons, Onion, Red Bell Pepper, Shrimp, Chorizo",
    preparationTimeInMinutes: "",
    rating: '4.7',
  },
  {
    img: 'http://i1.wp.com/paleonewbie1.objects.cdn.dream.io/wp-content/uploads/2016/09/paleo-newbie-lemon-herb-roasted-chicken-recipe-1266x850.jpg?fit=1030%2C692',
    dish: 'Roasted Chicken',
    ingredients: " Chicken, Salt, Black pepper, Onion Powder, Margarine, Rosemary",
    rating: '4.3',
  },
];

const tilesData1 = [
  {
    img: 'http://www.youthvillage.co.za/wp-content/uploads/2014/11/Food-safety-hygiene-training1.jpg',
    name: 'Jill Johnson',
    hourlyWage: '45' ,
    rating: '5',
  },
  {
    img: 'https://static01.nyt.com/images/2011/12/14/dining/14MAMA_SPAN/14MAMA-jumbo.jpg',
    name: 'Mama Chef',
    hourlyWage: '60' ,
    rating: '4.7',
  },
  {
    img: 'http://cdn.abclocal.go.com/content/wtvd/images/cms/automation/images/1301472_1280x720.jpg',
    name: 'Brandon Figs',
    hourlyWage: '35' ,
    rating: '4.6',
  },
  {
    img: 'http://newyork.peninsula.com/en/~/media/Images/New-York/06_DiscoverTheHotel/A_HotelMoments/Chef-Sam-1074-2.ashx',
    name: 'Jason Wayat',
    hourlyWage: '40' ,
    rating: '4.5',
  },
  {
    img: 'https://cdn.shutterstock.com/shutterstock/videos/5893457/thumb/1.jpg?i10c=img.resize(height:160)',
    name: 'Sun Lee',
    hourlyWage: '55' ,
    rating: '4.7',
  },
  {
    img: 'https://media.mnn.com/assets/images/2014/11/Chef1.jpg.653x0_q80_crop-smart.jpg',
    name: 'Emily Shank',
    hourlyWage: '35' ,
    rating: '5',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sushi_chef_Masayoshi_Kazato_02.JPG/1200px-Sushi_chef_Masayoshi_Kazato_02.JPG',
    name: 'Shimizu Marimoto',
    hourlyWage: '40' ,
    rating: '4.1',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Achatz.jpeg/1200px-Achatz.jpeg',
    name: 'Dustin John',
    hourlyWage: '45' ,
    rating: '4.9',
  },
  {
    img: 'http://i.huffpost.com/gen/1462286/images/o-FEMALE-CHEF-facebook.jpg',
    name: 'Emelia Rodriguez',
    hourlyWage: '55' ,
    rating: '4.9',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Achatz.jpeg/1200px-Achatz.jpeg',
    name: 'Alexandra Cross',
    hourlyWage: '45' ,
    rating: '4.9',
  },
];



class VerticalLinearStepper extends React.Component {

// state and click functions
  state = {
    finished: false,
    stepIndex: 0,
    open: false,
    currentTile: null,
    result: [],
    chefResult: []
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
    console.log('stepIndex in handleNext: ' , stepIndex);
    if (stepIndex === 0) {
      let cartItems = this.props.getCartItems;
      let query = [];
      cartItems.forEach((item) => {
        query.push(item.recipeName);
      });
      // let query = this.props.getCartItems.split(",");
      let oReq = new XMLHttpRequest(),
          method = "GET",
          url = `/findChefByRecipes?search=${encodeURIComponent(query)}`;
      oReq.open(method, url);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      const self=this;
      oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          let result = JSON.parse(oReq.responseText)
          let updatedResults = self.state.chefResult.concat(result);//THIS IS THE SEARCH RESULT OBJECT
          self.setState({chefResult: updatedResults});
        }else if(oReq.status === 400){
          return self.setState({noResult: true});
        }
      };
      oReq.send();
      console.log ("after Oreq.send")
      this.setState({
        stepIndex: 1
      })
    }
    
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
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

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      // buttons for step process
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Send Order' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  handleSearchByIngredients = (e) => {
    if (e.key === 'Enter'){
      
      let query = document.getElementById('search-by-ingredients').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByIngredients: true});
      }else{
          let oReq = new XMLHttpRequest(),
              method = "GET",
              url = `/searchByIngredients?search=${query}`;
          oReq.open(method, url);
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          const self=this;
          oReq.onreadystatechange = function () {
            if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
              let result = JSON.parse(oReq.responseText)
              let updatedResults = self.state.result.concat(result);//THIS IS THE SEARCH RESULT OBJECT
              self.setState({result: updatedResults});
            }else if(oReq.status === 400){
              return self.setState({noResult: true});
            }
          };
          oReq.send();
      }
      e.target.value = "";//Clears search field
    }
  }

  handleSearchByDish = (e) => { //THIS FINDS CHEF BY DISH
    if (e.key === 'Enter'){

      let query = document.getElementById('search-by-dish').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByDish: true});
      } else {
          let oReq = new XMLHttpRequest(),
              method = "GET",
              url = `/searchByRecipes?search=${query}`;
          oReq.open(method, url);
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          const self=this;
          oReq.onreadystatechange = function () {
            if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
              let result = JSON.parse(oReq.responseText)
              let updatedResults = self.state.result.concat(result);
              self.setState({result: updatedResults});
            }else if(oReq.status === 400){
              return self.setState({noResult: true});
            }
          };
          oReq.send();
      }
      e.target.value = "";//Clears search field
    }
  }

  handleAddToCart = () => {
    this.props.changeCartItems(this.state.currentTile);
  }

  render() {
    const {finished, stepIndex} = this.state;
    //Action buttons for dialog pop-up when clicking tiles
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Select"
        //label={<IconButton><ShoppingCart color="white" /></IconButton>}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAddToCart}
      />
    ];

    return (
      // Background image, width and height of stepper set here
      <div className="stepper-background" style={{maxWidth: 1400, maxHeight: 1400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            {/*First step starts here*/}
            <StepLabel>Select Dishes</StepLabel>
            <StepContent>
              {/*Search fields for dishes */}
                <div>
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
                {/*Section for recipe/dish tile styling and creation*/}
              <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    >
                    <Subheader id="sub">Dishes</Subheader>
                    {/*Looping and populating tiles starts here*/}
                    {this.state.result.map((tile) => (
                        <GridTile
                            onTouchTap={this.handleOpen(tile)}
                            key={tile.img}
                            title={tile.dish}
                            subtitle={<span>Rating: <b>{tile.rating}</b></span>}
                            >
                            <img src={tile.img} />
                        </GridTile>
                        ))}
                        {/*End of recipe/dish tile looping and populating*/}
                    </GridList>
                    {/*Information populated into recipe/dish tiles */}
                    <Dialog
                        title={this.getName()}
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                       
                        {/*{this.getIngredients()}}<br/><br/>
                        {this.getPrepMinutes()}<br/><br/>
                        {this.getCookingMinutes()}<br/><br/>*/}
                      
                        {/*{this.getIntolerances()}
                        {this.getCuisine()}*/}
                    </Dialog>
                    {/*Information populating for recipes/dishes ends here*/}
                </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          {/*First step (dish selection) ends, second step (chef selection) begins*/}
          <Step>
            <StepLabel>Select Chef</StepLabel>
            {/*Section for chef tile styling and creation*/}
            <StepContent>
              <div style={styles.root}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}
                        >
                        <Subheader id="sub">Chefs </Subheader>
                    {/*Looping and populating tiles starts here*/}
                        {this.state.chefResult.map((tile) => (
                            <GridTile
                                onTouchTap={this.handleOpen(tile)}
                                key={tile.img}
                                title={tile.name}
                                subtitle={<span>Rating <b>{tile.rating}</b></span>}
                                actionIcon={<IconButton><Book color="white" /></IconButton>}
                                >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                    {/*End of chef tile looping and populating*/}
                    </GridList>
                    {/*Information populated into chef tiles */}
                    <Dialog
                        title={this.getName()}
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                       {/*{this.getFirstName()}<br/><br/>
                       {this.getLastName()}<br/><br/>*/}
                    </Dialog>
                   {/*Information populating for chef tiles ends here*/}
                </div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          {/*Step 2 (chef selection) ends here and step 3 (order confirmation and sending) starts here*/}
          <Step>
            <StepLabel>Review & send order </StepLabel>
            <StepContent>
              <div className="orderConfirmation">
                    <section className="names">
                        <div>Name: Client name goes here</div>
                        <div>Chef: Chef name goes here</div>
                    </section>
                    <section className="orderItems">
                        <div id="items">Item 1</div><div id="prices"> Time 1  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                        <div id="items">Item 2</div><div id="prices"> Time 2  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                        <div id="items">Item 3</div><div id="prices"> Time 3  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                        <span id="prices">Total Price</span>
                    </section>
                    <section className="address">
                        <div>Street/Apartment Address: </div>
                        <div>City: </div>
                        <div>Province: </div>
                        <div>Postal Code: </div>
                    </section>
                    <section className="timeAndDate">
                        <div>Time: </div>
                        <div>Date: </div>
                    </section>
                    <section className="comments">
                        <form action="/OrderConfirmation" method="post">
                            <div>
                              <textarea name="com" id="com" placeholder="Place any comments about the order here">
                              </textarea>
                            </div>
                        </form>
                    </section>
                </div>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {/*end of step process*/}
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            Your order has been sent!
          </p>
          //Insert code to redirect to home page after 3 second delay here
        )}
      </div>
    );
  }
// functions for populating tile data
getName = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.recipeName;
  }

getName = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.name;
  }

getLastName = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.lastName;
  }

getPrepMinutes = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Prep Time: " + this.state.currentTile.preparationTimeInMinutes + " minutes";
  }

getCookingMinutes = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Cooking Time: " + this.state.currentTile.cookingTimeInMinutes + " minutes";
  }

getIntolerances = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Intolerances: " + this.state.currentTile.intolerances.join(", ");
  }

getCuisine = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Cuisine: " + this.state.currentTile.cuisine.join(", ");
  }

getIngredients = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Ingredients: " + this.state.currentTile.ingredients;
  }



}

export default VerticalLinearStepper;