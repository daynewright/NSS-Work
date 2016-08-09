var Order = function() {
  this.pizza = null;
  this.beverage = null;
};

//root function in a prototype chain
var Pizza = function() {
  this.toppings = [];
  this.crustThickness = 1;
};

Pizza.prototype.setCrustThickness = function(thickness){
  this.crustThickness = this.crustThickness * thickness;
};


// let crustTypes = [{DeepDish:'Chewy and greasy, but so filling!'},
//                   {ThinCrust:'Crispy and light foldable fun!'},
//                   {TraditionalHandTossed:'Boring, but won\'t offend picky eaters.'}];
//
// console.log(crustTypes);
//
// crustTypes.forEach(function(crust){
//   var crustName = Object.keys(crust)[0]
//   var description = crust[crustName]
//
//   window[crustName] = crustFactory(description)
// });
//
// function crustFactory (description) {
//   var fn = function () {}
//   fn.prototype.description = description
//   return fn
// }

var DeepDish = function() {
  this.description = 'Chewy and greasy, but so filling!';
};
//set Pizza as prototype for DeepDish
DeepDish.prototype = new Pizza();

var ThinCrust = function() {

};

ThinCrust.prototype.description = 'Crispy and light foldable fun!';

var TraditionalHandTossed = function() {
  this.description = 'Boring, but won\'t offend picky eaters.';
};

//root function in another prototype chain
var Topping = function() {
  this.price = 0;
};

var Pepperoni = function() {
  this.isSpicy = false;
};

Pepperoni.prototype = new Topping();

Pepperoni.prototype.makeSpicy = function() {
  this.isSpicy = true;
};


var Mushroom = function() {
  this.extraMushrooms = false;
};
Mushroom.prototype.addExtraMushrooms = function(){
  this.extraMushrooms = true;
}
Mushroom.prototype = new Topping();


//root function in another prototype chain
var Beverage = function() {
  this.size = 'small';

};

var Soda = function() {
  this.sodaType = function(type){
    return type;
  }
};
Soda.prototype = new Beverage();

var FruitPunch = function() {
  this.size = 'kids';
};
FruitPunch.prototype = new Beverage();

//Create an order //
var myOrder = new Order();

var myPizza = new DeepDish();
myPizza.setCrustThickness(3);
var HawaiianPunch = new FruitPunch();
var spicyPepperoni = new Pepperoni();
spicyPepperoni.makeSpicy();
var mushroom = new Mushroom();

var myToppings = [spicyPepperoni, mushroom];

myPizza.toppings.push(...myToppings);

console.log(myPizza);

myOrder.pizza = myPizza;
myOrder.beverage = HawaiianPunch;

console.log(myOrder);
