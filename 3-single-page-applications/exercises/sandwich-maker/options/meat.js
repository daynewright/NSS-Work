
var SandwichMaker = (function(maker){

  var meatOptions = {
    "Chicken" : 250,
    "Turkey" : 325,
    Ham : 300,
    Pastrami : 375,
    Salami : 275
  }

  maker.addMeat = function(){
    return meatOptions;
  }

  maker.selectedMeat = function(selected){
      var meat = {};

      selected.forEach(function(e){
        e = e.charAt(0).toUpperCase() + e.substring(1);

          for(var k in meatOptions){
              if(meatOptions.hasOwnProperty(e)){
                meat[e] = meatOptions[e];
              }
          }
        });
        return meat;
      }

  return maker;

})(SandwichMaker || {})
