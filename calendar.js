var dorienNoise = new Audio('audio/DSBoo.m4a');
//dorienNoise.volume = 0.2;
var minhaNoise = new Audio('audio/MkHuh.m4a');
var claireNoise = new Audio('audio/CmUmm.m4a');
var dylanNoise = new Audio('audio/DpAhh.m4a');


$(document).ready(function() {
  document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '38') {
        console.log("up man")
          // up arrow
      }
      else if (e.keyCode == '40') {
        console.log("down man")
          // down arrow
      }
      if (e.keyCode == '37') { 
        console.log("left key pressed");
        dorienNoise.play();
        minhaNoise.play();
        claireNoise.play();
        dylanNoise.play();
      }
      if (e.keyCode == '39') { 
          console.log("right key pressed");
          claireNoise.play();
          minhaNoise.play();
      }
  };
   
}); // end document ready
  
  
