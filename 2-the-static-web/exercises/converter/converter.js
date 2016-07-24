function toFahrenheit (temp) {
  return (temp * 9/5 + 32).toFixed(0) + ' °C';
}

function toCelsius (temp) {
  return ((temp - 32) * 5/9).toFixed(0) + ' °F';
}

// Get a reference to the button element in the DOM
var button = document.getElementById("button");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var temp = document.getElementById("temp").value;
  var selected = document.getElementById("celsius").checked ? "celsius" : "fahrenheit";


  if(selected === "celsius"){
    temp = toCelsius(temp);
  } else {
    temp = toFahrenheit(temp);
  }

  document.getElementById('tempResult').innerHTML = temp;

  console.log("event", clickEvent);
  console.log("temp submitted:", temp);
  console.log("convert:", selected);

}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
