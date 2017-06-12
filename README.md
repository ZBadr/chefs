# HomeCooked
HomeCooked is designed to help busy people reduce food waste and eat healthy by providing a platform where users can book chefs to come to their homes and cook for them using user-supplied ingredients.<br />
This app is built with React.js, Express.js, Knex.js, and PostgreSQL.

## Getting Started
1. Fork and Clone the project
2. Open a tab in your terminal and change directory to the project folder
3. Run `npm install`
4. Start up the Express server `node index.js`
5. Once the server is up and running at `localhost:3000`, open another tab and change directory to `client` and run `npm install`
6. Start up the app: `npm start` and then answer `yes` to `Would you like to run the app on another port instead?`. The app will be running on `localhost:3001`.

## Log in/sign up
HomeCooked only provides service to registered users, which can be divided into two types: Chefs and consumers. Consumer login/signup page is accessible by clicking on "Login" in the navigation bar, while chef login/signup page is accessible through "Chef Registration".

## Profile pages
Once a user logs in or signs up successfully, the user profile page will be rendered. Chef and consumer profile pages display similar information such as name, phone number, and email. Bottom of the page shows active and completed orders. Details of each order will be available as soon as the user clicks on an order number.

## Placing an order
The order process is in 3 steps: Selecting dish, selecting chef, and then check out. The order page is accessible from the navbar after consumers log in.

### Selecting a dish
To select dish, consumers have the options to search dish by ingredients they have, as well as by the name of the dish. Search results will be displayed in tiles, and details of each dish are available in a pop-up window that is accessible when a tile is clicked. Dishes can be added to cart by clicking "SELECT" in the pop-up window.

### Selecting a chef
Based on the dishes selected in the previous step, HomeCooked shows a list of chefs who are capable of cooking those dishes. Details of each chef is also accessible when a tile is clicked, and selection can also be made inside the pop-up window.

### Check out
Once the dishes and chef are selected, a summary of the order will be shown on the checkout page. Below the order summary, consumers are required to fill in information such as address (if different from home address), phone number, date, and time. After filling in the information, clicking on "Place Order" will submit the current order and the process ends here.

## Planned updates
### Stripe payment

## Team
HomeCooked is a project by the following students from the April 2017 cohort at Lighthouse Labs Toronto
Ziad Ahmed https://github.com/ZBadr<br/>
Billy Chang https://github.com/billyhw<br/>
Ken Lee https://github.com/kchylee<br/>
