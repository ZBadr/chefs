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
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
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
        currentTile: tile,
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
      this.setState({result: []}); //THIS CLEARS OLD SEARCH RESULT BEFORE NEW SEARCH
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
      this.setState({result: []}); //THIS CLEARS OLD SEARCH RESULT BEFORE NEW SEARCH
      let query = document.getElementById('search-by-dish').value;
      if (validator.isEmpty(query)) {
          return this.setState({emptySearchByDish: true});
      }else{
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
                            key={tile.imageUrl}
                            title={tile.recipeName}
                            subtitle={<span>Rating: <b>{tile.rating}</b></span>}
                            >
                            <img src={tile.imageUrl} />
                        </GridTile>
                        ))}
                        {/*End of recipe/dish tile looping and populating*/}
                    </GridList>
                    {/*Information populated into recipe/dish tiles */}
                    <Dialog
                        title={this.getDish()}
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                        {/*{this.getIngredients()}
                        {this.getPrepMinutes()}
                        {this.getCookingMinutes()}
                        {this.getIntolerances()}
                        {this.getCuisine()}*/}
                        {this.getRating()}
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
                        {this.getRating()}
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
                        <div id="items">Item 1</div><div id="prices"> Price 1  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                        <div id="items">Item 2</div><div id="prices"> Price 2  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
                        <div id="items">Item 3</div><div id="prices"> Price 3  </div><div id="servingstext"> Servings: <button>&minus;</button> 2 <button >+</button></div><br/>
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
getDish = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.recipeName;
  }

getRating = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return 'Rating: ' + this.state.currentTile.rating;
  }

getName = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return this.state.currentTile.name;
  }

getPrepMinutes = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Prep Time: " + this.state.currentTile.preparationMinutes;
  }

getCookingMinutes = () => {
      if (!this.state.currentTile) {
          return 'Test Content';
      }
      return "Cooking Time: " + this.state.currentTile.cookingMinutes;
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
      return "Ingredients: " + this.state.currentTile.ingredients.join(", ");
  }



}

export default VerticalLinearStepper;