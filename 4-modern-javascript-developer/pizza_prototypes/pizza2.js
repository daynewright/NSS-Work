
////////////////////////////////////////////////////////////////////
//                       CONSTRUCTORS                             //
////////////////////////////////////////////////////////////////////

// Order constructor
var Order = function() {
    this.pizza = null;
    this.beverage = null;
    this.totalCost = 0;
}

// Order prototype methods
Order.prototype.calculateTotalCost = function(){
   return this.pizza.calculatePizzaCost() + this.beverage.price;
}

////////////////////////////////////////////////////////////////////

// Pizza contructor
var Pizza = function(){
  this.toppings = [];
  this.baseCost = 5;
};

//Pizza.prototype.toppings = [];
//Pizza.prototype.baseCost = 5;
//Pizza.prototype.crustThickness = '1 inch';

// Pizza prototype methods
Pizza.prototype.calculatePizzaCost = function () {
  return (this.baseCost || 0) + (this.toppingsCost || 0) + (this.crustCost || 0);
}

var ThickCrust = function(){
  this.crustCost = 4;
  this.crustThickness = '3 inch';
};

ThickCrust.prototype = new Pizza();
//ThickCrust.prototype.crustThickness = '3 inch';
//ThickCrust.prototype.crustCost = 4;

var TraditionalHandTossed = function() {
  this.crustCost = 2;
  this.crustThickness = '2 inch';
}

TraditionalHandTossed.prototype = new Pizza();

////////////////////////////////////////////////////////////////////

// Toppings constructor
var Topping = function(){
  this.cost = 0;
}

var Pepperoni = function(){
  this.isSpicy = false;
  this.price = 1;
}
Pepperoni.prototype = new Topping();

var Bacon = function(){
  this.isCanadian = false;
  this.price = 1;
}
Bacon.prototype = new Topping();

////////////////////////////////////////////////////////////////////

// Beverage constructor
var Beverage = function(){
  this.size = 'small';
  this.hasIce = true;
  this.cost = 1;
}

// Beverage prototype methods
Beverage.prototype.noIce = function(){
  this.hasIce = false;
}
Beverage.prototype.size = function(size){
  this.size = size;
}

var Pepsi = function(){
  this.diet = false;
  this.price = 2;
}
Pepsi.prototype = new Beverage();

var Coke = function(){
  this.diet = false;
  this.cherry = false;
  this.price = 2;
}
Coke.prototype = new Beverage();

var Tea = function(){
  this.sweet = false;
  this.price = 2;
}
Tea.prototype = new Beverage();

////////////////////////////////////////////////////////////////////
//                       CREATE ORDER                             //
////////////////////////////////////////////////////////////////////

var orderNum1 = new Order();
orderNum1.pizza = new ThickCrust();
orderNum1.beverage = new Coke();
orderNum1.totalCost = orderNum1.calculateTotalCost();

var orderNum2 = new Order();
orderNum2.pizza = new TraditionalHandTossed();
orderNum2.beverage = new Tea();
orderNum2.totalCost = orderNum2.calculateTotalCost();

console.log('First Order: ', orderNum1);
console.log('Second Order: ', orderNum2);
