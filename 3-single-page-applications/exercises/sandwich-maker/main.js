

var SandwichMaker = (function(maker){

  var button = document.getElementById('button');
  var selects = Array.from(document.getElementsByTagName('select'));
  var addOrder = document.getElementById('sandwich');

  selects.forEach(e => e.innerHTML = createOptionTags( maker[`add${e.id}`]() ) );

  button.addEventListener('click', getValues);

  function getValues(){
    var selectedAry = [];

    for(var i = 0; i < selects.length; i++){
        selectedAry.push(getSelectValues(selects[i]));
    }

    document.getElementById('sandwich').innerHTML = (
          `<h2>Your ${items(selectedAry[0])} bread sandwich with ${items(selectedAry[1])}
           and ${items(selectedAry[2])} cheese and ${items(selectedAry[3])}
           <br />costs $${(maker.totalCost(selects, selectedAry)/ 100).toFixed(2)}</h2>`);
  }


  return maker;

  //multiple select helper function //
  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0; i < options.length; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }

    return result;
  }
  //END mulitple select helper function //

  //form DOM elements helper function //
  function createOptionTags(obj) {
    var builder;

    for(var k in obj){
      builder += `<option value="${k.toLowerCase()}">$${(obj[k]/100).toFixed(2)} - ${k}</option>`;
    }
    return builder;
  }
  // END form DOM elements helper function //

  //output sandwich helper function //
  function items(array){
    return array.map(e => e = ' ' + e);
  }

  // END output sandwich helper function //

})(SandwichMaker || {})
