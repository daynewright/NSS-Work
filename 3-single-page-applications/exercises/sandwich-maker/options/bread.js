
var SandwichMaker = (function(maker){

  var breadOptions = {
      Rye : 100,
      Sourdough : 150,
      Wheat : 175,
      White : 100
  }

  maker.addBread = function(){
      return breadOptions;
  }

  maker.selectedBread = function(selected){
      var bread = {};

      selected.forEach(function(e){
          e = e.charAt(0).toUpperCase() + e.substring(1);

          for(var k in breadOptions){
              if(breadOptions.hasOwnProperty(e)){
                bread[e] = breadOptions[e];
              }
          }
        });
        return bread;
      }
  return maker;

})(SandwichMaker || {})
