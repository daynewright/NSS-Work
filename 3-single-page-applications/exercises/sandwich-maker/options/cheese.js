
var SandwichMaker = (function(maker){

  var cheeseOptions = {
    Chedder : 75,
    Colby : 100,
    Havarti : 100,
    Gouda : 125,
    Muenster : 150
  }

  maker.addCheese = function(){
    return cheeseOptions;
  }

  maker.selectedCheese = function(selected){
      var cheese = {};

      selected.forEach(function(e){
          e = e.charAt(0).toUpperCase() + e.substring(1);

          for(var k in cheeseOptions){
              if(cheeseOptions.hasOwnProperty(e)){
                cheese[e] = cheeseOptions[e];
              }
          }
        });
        return cheese;
      }

  return maker;

})(SandwichMaker || {})
