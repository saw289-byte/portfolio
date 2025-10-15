$(document).ready(function() {
  $("#myButton").click(function() {
    $("#myProjects").toggle();
  });
});

$(document).ready(function() {
  $("#myButton2").click(function() {
    $("#myExercises").toggle();
  });
});

$(document).ready(function(){
  $("#myhomebutton").hover(
    function(){
      $(this).css("background-color", "blue");
    }, function(){
      $(this).css("background-color", "#d4bdf6");
    }
  );
});


$(document).ready(function(){
  $("#myButton2").click(function(){
    $("#myProjects").hide();
  });
});

$(document).ready(function(){
  $("#myButton").click(function(){
    $("#myExercises").hide();
  });
});


$(document).ready(function() {
  $(".yes").click(function() {
    $(this).toggleClass("yes-after");
  });
});

$(document).ready(function() {
  $("#myButton4").click(function() {
    $("#myPresentation").toggle();
  });
});

$(document).ready(function() {
  $("#myButton5").click(function() {
    $("#myPresentation").toggle();
  });
});

$(document).ready(function() {
  $("#myButton7").click(function() {
    $("#myCollection").toggle();
  });
});


$(document).ready(function() {
  $("#myButton6").click(function() {
    $("#myCollection").toggle();
  });
});
