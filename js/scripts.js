$(document).ready(function() {
  const crypto = parseInt(prompt("What Type of Tech?"));

  if (crypto >= 21) {
    $('#drinks').show();
  }
});