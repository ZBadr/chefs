const fs = require('fs');
const knex = require('knex');
const randomName = require('node-random-name');
const randomWords = require('random-words');
const loremIpsum = require('lorem-ipsum');
const americanNames = require('american-sounding-names');
let recipeObj;

fs.readFile('./jsonfile.json', 'utf8', function readFileCallBack(err, data) {
    if (err) {
        console.log(err); // lazy error handling
    } else {
        recipeObj = JSON.parse(data).body.recipes;
    }
});

let chefPics = [
"https://www.singaporeair.com/saar5/images/flying-withus/dining/culinarypanel-popup-6.jpg",
"https://ak2.picdn.net/shutterstock/videos/1070362/thumb/1.jpg",
"https://ak3.picdn.net/shutterstock/videos/4431710/thumb/2.jpg?i10c=img.resize(height:160)",
"http://pathwaytoaus.com/wp-content/uploads/2014/12/cafe-dupont-chef-at-the-dupont-circle-hotel_gallery_image.jpg",
"http://www.sceltedigusto.it/public/wp-content/uploads/2014/09/ferrarese4.jpg",
"https://assets.entrepreneur.com/content/16x9/822/20151204155248-successful-business-owner-franchising-franchises-cafe-coffee-shop-small-entrepreneur-restaurant-manager-barista.jpeg",
"https://www.thestar.com/content/dam/thestar/life/2015/10/14/kitchen-temp-chefs-unite-for-suckling-pigs-and-a-good-cause/gallery-8.jpg.size.custom.crop.890x650.jpg",
"http://www.twincities.com/wp-content/uploads/2017/02/jackriebel-thelexington3.jpg",
"http://storage.edmontonsun.com/v1/dynamic_resize/sws_path/suns-prod-images/1297763719353_ORIGINAL.jpg?quality=80&size=650x",
"https://www.washingtonian.com/wp-content/uploads/2017/01/Mintwood-Chef-994x661.jpg",
"https://www.thestar.com/content/dam/thestar/life/food_wine/2016/07/02/keep-cool-with-strawberry-gazpacho/chef.jpg.size.custom.crop.1086x724.jpg",
"http://d1060ja7433lis.cloudfront.net/z2WHDmdCZC/cmsimg_1445443431.jpg",
"https://i.ytimg.com/vi/dCUcNRW0slU/maxresdefault.jpg",
"https://i.ytimg.com/vi/BD6yq7qLZWE/maxresdefault.jpg",
"http://www.oakgrillnb.com/images/category/bg/chef.jpg",
"http://c961e5b3cfec3ee8a7b3-ba9ddeb7c07a078a6ea139396b9a3c8c.r88.cf1.rackcdn.com/lps/assets/u/Alessandro-Frassica-Cantinino-del-Gallia-Cooking-class-Panini-Wine-Cellar-Excelsior-hotel-gallia.jpg",
"http://queensfingerhotel.com/uploads/image/Tuy%E1%BB%83n%20d%E1%BB%A5ng/tuyen-dung-bep-chinh.jpg",
"https://i.mycdn.me/image?id=848944733718&t=0&plc=WEB&tkn=*JJe22c-v8B01Z6LPovopwgHC9Wk",
"https://awscloudfront.kempinski.com/1225/hotel-indonesia-kempinski-jakarta_chef-3.jpg;width=1920;height=1080;mode=crop;anchor=middlecenter;autorotate=true;quality=90;scale=both;progressive=true;encoder=freeimage",
"https://media-cdn.tripadvisor.com/media/photo-s/0b/ac/cb/54/chef-at-signatures-restaurant.jpg",
"https://awscloudfront.kempinski.com/1223/hotel-indonesia-kempinski-jakarta_chef-2.jpg;width=1920;height=1080;mode=crop;anchor=middlecenter;autorotate=true;quality=90;scale=both;progressive=true;encoder=freeimage",
"http://good-know.com/images_2/76936293.jpg",
"https://fthmb.tqn.com/xzqaHH6OgLr9ia8qu7MThOZgon0=/960x0/filters:no_upscale()/about/88860530-58a474543df78c4758638884.jpg",
"http://www.thecanadiandaily.ca/wp-content/uploads/2014/02/Executive-Chef-Sharanjit-Kahlon-preparing-a-meals-at-the-Original-Tandoori-Kitchen.jpg",
"http://images1.laweekly.com/imager/u/original/6561604/michael_cimarusti_in_kitchen_horizontal_.jpg",
"http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_7361_TP-LANSHU-CHEN-finedininglovers.jpg",
"http://i.huffpost.com/gen/1462286/images/o-FEMALE-CHEF-facebook.jpg",
"http://i.huffpost.com/gen/1275428/images/o-FEMALE-CHEF-facebook.jpg",
"http://www.indiannewsandtimes.com/wp-content/uploads/2015/08/female-chef-800x533.jpg",
"http://i.huffpost.com/gen/1282658/images/h-FEMALE-CHEF-628x314.jpg",
"http://cdn2.thegrindstone.com/wp-content/uploads/2012/06/1V87vePHn1Uf9aLuRFFDIB19B3G-640x360.jpg",
"http://lizaamericashost.com/wp-content/uploads/2013/04/lize-women-chef-featured.jpg",
"https://munchies-images.vice.com/wp_upload/Dominique-Crenn-in-the-kitchen.jpg?crop=0.9216374269005848xw:1xh;center,center&resize=1050:*",
"http://cnnphilippines.com/incoming/s06k1p-Gaita-Fores_CNNPH.png/alternates/FREE_640/Gaita-Fores_CNNPH.png",
"https://d1hekt5vpuuw9b.cloudfront.net/assets/article/9f235955f02fdb3672bcd3cba7d3da50_nancy-fuller-kitchen-580x326_featuredImage.jpg",
"http://files.hotel-sommerer.at/files/cto_layout/media/Contentbilder/innen/OMA.jpg",
"https://previews.123rf.com/images/serezniy/serezniy1301/serezniy130105155/21537468-Young-woman-chef-cooking-cake-in-kitchen-Stock-Photo-chef.jpg",
"http://cdn.skim.gs/image/upload/v1456339717/msi/female-chef-cooking-horiz_l179zv.jpg",
"https://static01.nyt.com/images/2011/12/14/dining/14MAMA_SPAN/14MAMA-jumbo.jpg",
"http://nebula.wsimg.com/cbc166c3c91f0b568e939e2f6e2f470f?AccessKeyId=1DFD76A372E9E8616F12&disposition=0&alloworigin=1",
"http://topyaps.com/wp-content/uploads/2013/12/Specializing-in-More-Than-One-World-Cuisine-Is-Always-A-Plus.jpg",
"http://i.huffpost.com/gen/1385464/images/o-FEMALE-CHEF-facebook.jpg",
"http://media.onsugar.com/files/2011/03/13/3/192/1922195/9e9b5b170f7cc052_86542206.preview.jpg",
"http://www.reluctantgourmet.com/wp-content/uploads/2016/04/i_female_chef_5.jpg",
"http://revenginemarketing.com/wp-content/uploads/2017/03/Dollarphotoclub_87207262.jpg",
"http://www.goodfood.com.au/content/dam/images/g/t/x/k/8/o/image.related.wideLandscape.940x529.gtxj9a.png/1485921430828.jpg",
"http://ftnnews.com/images/stories/insan/tz/Chef_Vicky-Lau.jpg",
"http://www.gourmetfoodreview.com/recipegourmet/wp-content/uploads/2015/02/woman-chef.jpg",
"http://youqueen.com/wp-content/uploads/2013/01/female-chef.jpg",
"http://www.japantimes.co.jp/wp-content/uploads/2015/07/p16-ito-sushi-c-20150706.jpg"
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chef_recipes').del()
    .then(() => { return knex('recipe_dietaryrestrictions').del() })
    .then(() => { return knex('recipe_intolerances').del() })
    .then(() => { return knex('order_recipes').del() })
    .then(() => { return knex('orders').del() })
    .then(() => { return knex('recipe_ingredients').del() })
    .then(() => { return knex('recipe_equipments').del() })
      .then(() => { return knex('ingredients').del() })
      .then(() => { return knex('recipes').del() })
      .then(() => { return knex('chefs').del() })
      .then(() => { return knex('users').del() })
        .then(() => {
          let recipeArr = [];
          for (i = 0; i < recipeObj.length; i++) {
            recipeArr.push(
              knex('recipes').insert([{ id: i+1,
              name: recipeObj[i].title,
              imageUrl: recipeObj[i].image,
              cookingTimeInMinutes: recipeObj[i].cookingMinutes,
              preparationTimeInMinutes: recipeObj[i].preparationMinutes,
              readyTimeInMinutes: recipeObj[i].readyInMinutes,
              cuisine: recipeObj[i].cuisines.length > 0 ? recipeObj[i].cuisines[recipeObj[i].cuisines.length-1] : "not available from API",
              cookingSteps: recipeObj[i].instructions.slice(0,255)
              }]))
          }
          return Promise.all(recipeArr);
        })
        .then(() => {
          const getIngredients = function(recipeObj) {
            return recipeObj.extendedIngredients.map(x => {return {
              name: x.name,
              amount: x.amount,
              measuringUnit: x.unit
            } ;})
          }
          let tmp = recipeObj.map(getIngredients).map((x) => {return x.map((y)=>{return y.name})})
          tmp = [].concat.apply([], tmp)
          let uniqueElements = []
          tmp.forEach((x) => {
            if (uniqueElements.indexOf(x) === -1) uniqueElements.push(x);
          })
          let ingredientsArr = [];
          for (i = 0; i < uniqueElements.length; i++) {
            ingredientsArr.push(
              knex('ingredients').insert([{ id: i+1,
              name: uniqueElements[i]}])
              )
          }
          return Promise.all(ingredientsArr);
        })
        .then(() => {
          let chefsArr = []
          for (let i = 0; i < 50; i++) {
            // last  = randomName({last: true});
            let obj = { id: i+1,
                // firstName: randomName({random: Math.random, first: true}),
                // lastName: randomName({random: Math.random, last: true}),
                // description: randomWords({ min: 10, max: 30 }).join(" "),
                firstName: americanNames.first({gender: i < 25? 'male' : 'female'}),
                lastName: americanNames.last(),
                description: loremIpsum({ count: 1, units: 'sentences' }),
                phoneNumber: Math.round(Math.random()*1e10),
                hourlyRateInCents: Math.round(Math.random()*1e4),
                imageUrl: chefPics[i]
            }
            obj.email = obj.firstName + obj.lastName + '@gmail.com';
            obj.password = obj.firstName + obj.lastName;
            // obj.imageUrl = obj.firstName + obj.lastName + '.jpg';
            chefsArr.push(obj)
          }
          return chefsArr;
        })
        .then((res) => {
          return knex('chefs').insert(res);
        })
        .then(() => {
          let usersArr = []
          for (i = 0; i < 50; i++) {
            // last  = randomName({last: true});
            let obj = { id: i+1,
                firstName: randomName({random: Math.random, first: true, gender: "female" }),
                lastName: randomName({random: Math.random, last: true}),
                phoneNumber: Math.round(Math.random()*1e10),
                address: loremIpsum({ count: 1, units: 'sentences' }),
                stripeToken: null
            }
            obj.email = obj.firstName + obj.lastName + '@gmail.com';
            obj.password = obj.firstName + obj.lastName;
            obj.imageUrl = obj.firstName + obj.lastName + '.jpg';
            usersArr.push(obj)
          }
          return usersArr;
        })
        .then((res) => {
          return knex('users').insert(res);
        })
        .then(() => {
          let recipe_ingredientsArr = [];
          for (i = 0; i < recipeObj.length; i++) {
            for (j = 0; j < recipeObj[i].extendedIngredients.length; j++) {
              recipe_ingredientsArr.push(
                knex('recipe_ingredients').insert([{
                recipeID: knex.select("id").from("recipes").where("name",recipeObj[i].title),
                ingredientID: knex.select("id").from("ingredients").where("name",recipeObj[i].extendedIngredients[j].name),
                amount: recipeObj[i].extendedIngredients[j].amount,
                measuringUnit: recipeObj[i].extendedIngredients[j].unitLong
              }])
              )
            }
          }
          return Promise.all(recipe_ingredientsArr);
        })
        .then(() => {
          let recipe_intolerancesArr = [];
          for (i = 0; i < recipeObj.length; i++) {
            if (recipeObj[i].glutenFree) {
              recipe_intolerancesArr.push(
                knex('recipe_intolerances').insert([{
                recipeID: knex.select("id").from("recipes").where("name",recipeObj[i].title),
                intolerance: "glutenFree",
              }])
              )}
            if (recipeObj[i].dairyFree) {
              recipe_intolerancesArr.push(
                knex('recipe_intolerances').insert([{
                recipeID: knex.select("id").from("recipes").where("name",recipeObj[i].title),
                intolerance: "dairyFree",
              }])
              )}
            }
          return Promise.all(recipe_intolerancesArr);
        })
        .then(() => {
          let recipe_dietaryRestrictionsArr = [];
          for (i = 0; i < recipeObj.length; i++) {
            if (recipeObj[i].vegetarian) {
              recipe_dietaryRestrictionsArr.push(
                knex('recipe_dietaryrestrictions').insert([{
                recipeID: knex.select("id").from("recipes").where("name",recipeObj[i].title),
                dietaryRestriction: "vegetarian",
              }])
              )}
            if (recipeObj[i].vegan) {
              recipe_dietaryRestrictionsArr.push(
                knex('recipe_dietaryrestrictions').insert([{
                recipeID: knex.select("id").from("recipes").where("name",recipeObj[i].title),
                dietaryRestriction: "vegan",
              }])
              )}
            }
          return Promise.all(recipe_dietaryRestrictionsArr);
        })
        .then(() => {
          let chef_recipesArr = [];
          counter = 0;
          for (i = 0; i < 50; i++) {
            for (j = 0; j < 25; j++) {
              chef_recipesArr.push(
                knex('chef_recipes').insert([{
                chefID: i + 1,
                recipeID: counter % 45 + 1
              }])
              )
              counter += 1
            }
          }
          return Promise.all(chef_recipesArr);
        })
        .then(() => {
          let orderArr = [];
          counter = 0;
          for (i = 0; i < 50; i++) {
            for (j = 0; j < 25; j++) {
              orderArr.push(
                knex('orders').insert([{
                  beginningDateTime: knex.fn.now(),
                  endingDateTime: knex.fn.now(),
                  ratingOrder: Math.round(Math.random()*5),
                  comment: loremIpsum({ count: 1, units: 'sentences' }),
                  userID: i + 1,
                  chefID: counter % 50 + 1,
                  orderTotal: Math.round(Math.random()*1e4),
              }])
              )
              counter += 1
            }
          }
          return Promise.all(orderArr);
        })
        .then(() => {
          let orderRecipesArr = [];
          counter = 0;
          for (i = 0; i < 50; i++) {
            for (j = 0; j < 2; j++) {
              orderRecipesArr.push(
                knex('order_recipes').insert([{
                  ratingRecipe: Math.round(Math.random()*5),
                  comment: loremIpsum({ count: 1, units: 'sentences' }),
                  orderID: i + 1,
                  recipeID: counter % 45 + 1,
              }])
              )
              counter += 1
            }
          }
          return Promise.all(orderRecipesArr);
        })
        .catch((err) => console.error(err));
};