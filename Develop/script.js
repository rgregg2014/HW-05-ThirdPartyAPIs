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
//                                   Master Function

pageInit();

function pageInit() {
  currentDateDisplay.text(today.format("LL"));
  populateAppointments();
  findCurrentTime();
}

//                                 Secondary Functions

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

function populateAppointments() {
  //   localStorage.getItem("");
  //   localStorage.getItem();
  // grab stored appointments
  // populate appointments in appropriate rows
}

function saveFunction(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  localStorage.setItem("Time", "This is going in");
  localStorage.setItem("Appointment", "So is this");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

// BUTTONS ============================================================================
//  -Save Button, on click, run saveFunction

button9.on("click", saveFunction);
