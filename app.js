
//Index of Meals
const breakfast = ['eggs', 'bacon', 'beans','cerials','pancakes','waffles','toast','milk'];
const lunch = ['burger', 'pizza','steak', 'chicken', 'hot dog','fish and chips', 'sandwich'];
const dinner = ['chinese Food', 'spanish tapas', 'beef wellington', 'Kidney Pie','lasagne' ];

// variables  to random pick a Item from Index
let newBreakfast =  breakfast [Math.floor(breakfast.length * Math.random())];

let newLunch =  lunch [Math.floor(lunch.length * Math.random())];

let newDinner =  dinner [Math.floor(dinner.length * Math.random())];

// variable to concatenate previous Items
const allMeals = `For Breafast we recommend ${newBreakfast}, for lunch you can have ${newLunch}, and a ${newDinner} for dinner.`

// function for HTML Button
function myElement() {
    let x = document.getElementById("myHeader");
if (x.innerHTML === "Hello") {
      x.innerHTML =  (allMeals);
    } else {
      x.innerHTML = location.reload()  ;
    }
  };

