
var SandwichMaker = (function(maker){

  maker.totalCost = function(selects, selectedAry){
    var total = 0;
    selects.forEach(function(e, i){
        total += calculate(maker[`selected${e.id}`](selectedAry[i]));
    });
    return total;
  }

  return maker;

  //calculate total cost helper function//
  function calculate(obj){
    var costHolder = 0;

    console.log(obj);

    for(var k in obj){
      console.log('obj[k]: ', obj)
      costHolder = obj[k] + costHolder;
    }
    return costHolder;
  }
  // END calculate total cost helper function//

})(SandwichMaker || {})
