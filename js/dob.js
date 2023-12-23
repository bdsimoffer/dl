$(document).ready(function () {
    $("#randomDate").click(function () {
      year = new Date().getFullYear()
      year = year - 22;
      month = Math.floor(Math.random() * (13 - 1)) + 1;
      if (month <= 9) {
        month = "0" + month;
      }
      day = Math.floor(Math.random() * (29 - 1)) + 1;
      if (day <= 9) {
        day = "0" + day;
      }
      $("#bday").val(year + "-" + month + "-" + day);
    });
  });