/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Garren Meisman';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let year = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPhoto = 'images/photo_of_me.jpg';

// Step 6: copy your image into the "images" folder
// done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPhoto);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
favoriteFoods = ["Pizza", "Pumpkin Macaroni", "Cinnimon Rolls"]
let text = favoriteFoods.join(" and ");

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = text;

// Step 3: declare and instantiate a variable to hold another favorite food
secondFood = " Blox Dessert bars";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(secondFood);
text = favoriteFoods.join(" and ");
// Step 5: repeat Step 2
document.querySelector('#food').textContent = text;

// Step 6: remove the first element in the favorite foods array
 favoriteFoods.shift()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop()
text = favoriteFoods.join(" and ");

// Step 7: repeat Step 2
document.querySelector('#food').textContent = text;


