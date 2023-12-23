$(document).ready(function () {
    var clicks = 0;
    $("#addOptional").click(function () {
      if ((clicks % 2) != 0) {
        $("#optional").hide();
      } else {
        $("#optional").show();
      }
      clicks++;
    });
  });