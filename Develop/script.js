// PSEUDOCODE =========================================================================
/*
    On page load, I want the user to see a header with the current date. In the 8 populated hour rows, I want the user to see a past/present/future color scheme based on current local time. I want any previous added appointments to be in the appropriate rows.
    I want the user to be able to type an appointment into the text fields and save the text into local storage to repopulate on page load.
*/
// DEPENDECIES AND VARIABLES ==========================================================
var containerRow = $(".time-block");
var formTextArea = $("description");
// var saveButton = $(".saveBtn");
var currentDateDisplay = $("#currentDay");

//          text areas as variables

var a9Text = $("#a9");
var a10Text = $("#a10");
var a11Text = $("#a11");
var p12Text = $("#p12");
var p1Text = $("#p1");
var p2Text = $("#p2");
var p3Text = $("#p3");
var p4Text = $("#p4");
var p5Text = $("#p5");

//          time marks as variables

var a9Time = $("#timeA9");
var a10Time = $("#timeA10");
var a11Time = $("#timeA11");
var p12Time = $("#timeP12");
var p1Time = $("#timeP1");
var p2Time = $("#timeP2");
var p3Time = $("#timeP3");
var p4Time = $("#timeP4");
var p5Time = $("#timeP5");

//           buttons as variables

var button9 = $("#button9");
var button10 = $("#button10");
var button11 = $("#button11");
var button12 = $("#button12");
var button1 = $("#button1");
var button2 = $("#button2");
var button3 = $("#button3");
var button4 = $("#button4");
var button5 = $("#button5");

// DATA ===============================================================================

//grabs and stores current time for display and styling function
var today = moment();
var currentTime = moment().format("kk");

// FUNCTIONS ==========================================================================
//                                  Master Function

pageInit();

function pageInit() {
  currentDateDisplay.text(today.format("LL"));
  populateAppointments();
  findCurrentTime();
}

//                                 Time Functions

function findCurrentTime() {
  //reads current hour and compares to equivalent hour value, changes class for CSS styling
  if (currentTime < 9) {
    $("#a9").addClass("future");
  } else if (currentTime == 9) {
    $("#a9").addClass("present");
  } else {
    $("#a9").addClass("past");
  }

  if (currentTime < 10) {
    $("#a10").addClass("future");
  } else if (currentTime == 10) {
    $("#a10").addClass("present");
  } else {
    $("#a10").addClass("past");
  }

  if (currentTime < 11) {
    $("#a11").addClass("future");
  } else if (currentTime == 11) {
    $("#a11").addClass("present");
  } else {
    $("#a11").addClass("past");
  }

  if (currentTime < 12) {
    $("#p12").addClass("future");
  } else if (currentTime == 12) {
    $("#p12").addClass("present");
  } else {
    $("#p12").addClass("past");
  }

  if (currentTime < 13) {
    $("#p1").addClass("future");
  } else if (currentTime == 13) {
    $("#p1").addClass("present");
  } else {
    $("#p1").addClass("past");
  }

  if (currentTime < 14) {
    $("#p2").addClass("future");
  } else if (currentTime == 14) {
    $("#p2").addClass("present");
  } else {
    $("#p2").addClass("past");
  }

  if (currentTime < 15) {
    $("#p3").addClass("future");
  } else if (currentTime == 15) {
    $("#p3").addClass("present");
  } else {
    $("#p3").addClass("past");
  }

  if (currentTime < 16) {
    $("#p4").addClass("future");
  } else if (currentTime == 16) {
    $("#p4").addClass("present");
  } else {
    $("#p4").addClass("past");
  }

  if (currentTime < 17) {
    $("#p5").addClass("future");
  } else if (currentTime == 17) {
    $("#p5").addClass("present");
  } else {
    $("#p5").addClass("past");
  }
}

//                                Population Functions

function populateAppointments() {
  populateNine();
  populateTen();
  populateEleven();
  populateTwelve();
  populateOne();
  populateTwo();
  populateThree();
  populateFour();
  populateFive();
}

function populateNine() {
  var pop9 = localStorage.getItem("9AM", a9Text);
  a9Text.val(pop9);
}

function populateTen() {
  var pop10 = localStorage.getItem("10AM", a10Text);
  a10Text.val(pop10);
}

function populateEleven() {
  var pop11 = localStorage.getItem("11AM", a11Text);
  a11Text.val(pop11);
}

function populateTwelve() {
  var pop12 = localStorage.getItem("12PM", p12Text);
  p12Text.val(pop12);
}

function populateOne() {
  var pop1 = localStorage.getItem("1PM", p1Text);
  p1Text.val(pop1);
}

function populateTwo() {
  var pop2 = localStorage.getItem("2PM", p2Text);
  p2Text.val(pop2);
}

function populateThree() {
  var pop3 = localStorage.getItem("3PM", p3Text);
  p3Text.val(pop3);
}

function populateFour() {
  var pop4 = localStorage.getItem("4PM", p4Text);
  p4Text.val(pop4);
}

function populateFive() {
  var pop5 = localStorage.getItem("5PM", p5Text);
  p1Text.val(pop5);
}

//                                  Save Functions

function saveFunction9(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("9AM", JSON.stringify(a9Text.val()));
  a9Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction10(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("10AM", JSON.stringify(a10Text.val()));
  a10Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction11(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("11AM", JSON.stringify(a11Text.val()));
  a11Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction12(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("12PM", JSON.stringify(p12Text.val()));
  p12Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction1(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("1PM", JSON.stringify(p1Text.val()));
  p1Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction2(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("2PM", JSON.stringify(p2Text.val()));
  p2Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction3(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("3PM", JSON.stringify(p3Text.val()));
  p3Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction4(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("4PM", JSON.stringify(p4Text.val()));
  p4Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

function saveFunction5(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("5PM", JSON.stringify(p5Text.val()));
  p5Text.val("");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}
// BUTTONS ============================================================================
//  -Save Buttons, on click, run saveFunctions

button9.on("click", saveFunction9);
button10.on("click", saveFunction10);
button11.on("click", saveFunction11);
button12.on("click", saveFunction12);
button1.on("click", saveFunction1);
button2.on("click", saveFunction2);
button3.on("click", saveFunction3);
button4.on("click", saveFunction4);
button5.on("click", saveFunction5);
