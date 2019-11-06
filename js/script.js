function mytimer() {
  var hour = new Date().getHours();
  hour = hour > 12 ? hour - 12 + " : " : hour + " : ";
  return hour;
}

//minutes

function myminutes() {
  var minutes = new Date().getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return minutes;
}

function afternoon() {
  var noon = new Date().getHours();
  noon = noon >= 12 ? " PM" : " AM";
  return noon;
}

var radialObj = radialIndicator("#clock", {
  radius: 60,
  barWidth: 10,
  barColor: "#7fa3b8",
  fontColor: "#000000",
  fontFamily: "ans-serif",
  minValue: 0,
  maxValue: 60,
  fontSize: 50,
  fontWeight: "bold",
  roundCorner: true,
  format: function(value) {
    var seconds = new Date().getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return seconds;
  }
});

setInterval(function() {
  var sec = new Date().getSeconds();
  radialObj.value(sec);
  mytimer();
  myminutes();
  afternoon();
  var hours = document.getElementById("hour");
  hours.textContent = mytimer() + myminutes() + afternoon();
}, 1000);

var d = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let day = d.getDate();
let year = d.getFullYear();
document.getElementById("date").innerHTML =
  months[d.getMonth()] + " " + day + ", " + year;

function clockin() {
  mytimer();

  myminutes();
  let lastLogin = `Clock in on ${mytimer()}:${myminutes()}`;
  document.getElementById("login").innerHTML = lastLogin;

  function mytimer() {
    var timeHour = new Date().getHours();
    timeHour = timeHour > 12 ? timeHour - 12 : timeHour;
    return timeHour;
  }

  function myminutes() {
    var minutes = new Date().getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes;
  }
}

function clockout() {
  mytimer();

  myminutes();
  let lastLogin = `Clock out on ${mytimer()}:${myminutes()}`;
  document.getElementById("login").innerHTML = lastLogin;

  function mytimer() {
    var timeHour = new Date().getHours();
    timeHour = timeHour > 12 ? timeHour - 12 : timeHour;
    return timeHour;
  }

  function myminutes() {
    var minutes = new Date().getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes;
  }
}
