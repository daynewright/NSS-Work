var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var html = '<ul>';

for(var i = 0; i < reindeer.length; i++){
    html += '<li>' + colors[i] + ' ' + reindeer[i] + '</li>';
    console.log(colors[i] + ' ' + reindeer[i]);
};

html += '</ul>';

document.getElementById('coloredReindeer').innerHTML = html;
