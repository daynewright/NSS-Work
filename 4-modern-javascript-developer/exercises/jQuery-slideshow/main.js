
var counter = 0;

$(function(){
  slideUpdate(counter);

    $($('button')[0]).click(function(){
        counter--;

        if(counter < 0){
          counter = 5;
        };
        slideUpdate(counter);
    })

    $($('button')[1]).click(function(){
        counter++;

        if(counter > 5){
          counter = 0;
        };
        slideUpdate(counter);
    })


  function slideUpdate(num){
    $('#slideshow').html(`<img src="images/chuck${num}.jpg">`);
  }
});
