

var content = document.getElementById('sonnet').innerHTML;
var start = content.search('orphans');
var revisedContent = content.slice(start, content.length).replace(/the\s/g, 'a large ').replace(/winter/, 'yuletide');


addToHTML('sonnet-revised', revisedContent);
addToHTML('length-first', content.length);
addToHTML('length-second', revisedContent.length);


//helper function
function addToHTML(element, content){
  document.getElementById(element).innerHTML = content;
}
