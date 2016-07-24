var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length > vegetables.length ? bands.length : vegetables.length;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById('boy-bands');

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById('vegetables');

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  bandElement.innerHTML += '<div>'+bands[loopTracker]+'</div>';

  // Add the veggie names into the correct <div>
  veggieElement.innerHTML += '<div>'+vegetables[loopTracker]+'</div>';

}
