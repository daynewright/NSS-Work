
var SandwichMaker = (function(maker){

  var condimentOptions = {
      Mayo : 30,
      Mustard : 30,
      Pickles : 50,
      Onions : 75
  }

  maker.addCondiments = function(){
    return condimentOptions;
  }

  maker.selectedCondiments = function(selected){
      var condiments = {};

      selected.forEach(function(e){
        e = e.charAt(0).toUpperCase() + e.substring(1);

          for(var k in condimentOptions){
              if(condimentOptions.hasOwnProperty(e)){
                condiments[e] = condimentOptions[e];
              }
          }
        });
        return condiments;
      }

  return maker;

})(SandwichMaker || {})
