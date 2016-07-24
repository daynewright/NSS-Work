/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var coinPurse = { quarters : 0, dimes: 0, nickels : 0, pennies : 0};

function coinCounter (input) {
	input = input*100;

  while(input !== 0){
	  if(input >= 25){
		  	input = calculateAmountCoins(input, 'quarters', 25);
	  } else if(input >= 10){
	  		input = calculateAmountCoins(input, 'dimes', 10);
	  } else if(input >= 5){
	  		input = calculateAmountCoins(input, 'nickels', 5);
	  } else {
	  		input = calculateAmountCoins(input, 'pennies', 1);
	  }
  }

  return coinPurse;
}

//helper calculate function
function calculateAmountCoins(input, coinType, value){
	coinPurse[coinType] = parseInt(input/value);
	input = input - (coinPurse[coinType] * value);

	return input;
}

var coins = coinCounter(.67);

console.log(coins);

document.getElementById('coins').innerHTML = '<div>' + JSON.stringify(coins) + '</div>';
