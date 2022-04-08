$(document).ready(function() {
$("form#techCareer").submit(function(event){  
  event.preventDefault();

  $("#output").text(result);
  });
});