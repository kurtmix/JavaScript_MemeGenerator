$(document).ready(function () {
  var x = ("<img src = \"" + Math.floor(1 + Math.random() * 7) + ".jpg\"/>" );
  var hidingSomething = true;
  $(x).hide();
  
  $('#click-div').click(function() {
    hidingSomething = !hidingSomething;
    
    $(x).slideToggle(1000, function() {
      if (hidingSomething) {
        $('#click-div').text("I'm hiding something...");
      } else {
        $('#click-div').append(x);      
      }
                                            });
                                     });
});