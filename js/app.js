$(document).foundation();

  console.log("reaady");

 $('div.columns').mouseover(function() {
   //use $(this) to apply animate to opacity and left on whichever <li> registered the event 
    $(this).animate( { 
    left:50,
    opacity:1
    });
    });
  
   
  $('div.columns').mouseout(function () {
        //chain the stop method to stop the current animation from playing without writing an additional line of code
        $(this).animate({
            opacity: .25,
            left:0
        });

    });

  //close jQuery
});