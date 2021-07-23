// PSEUDOCODE =========================================================================
/*
    On page load, I want the user to see a header with the current date. In the 8 populated hour rows, I want the user to see a past/present/future color scheme based on current local time. I want any previous added appointments to be in the appropriate rows.
    I want the user to be able to type an appointment into the text fields and save the text into local storage to repopulate on page load.
*/
// DEPENDECIES AND VARIABLES ==========================================================
var containerRow = $(".time-block");
var formTextArea = $("description");
var saveButton = $(".saveBtn");
var currentDateDisplay = $("#currentDay");
var today = moment();

// DATA ===============================================================================
/*
    - method to pull current date
    - method to pull current time
*/

// to get and display the current date

// to get and validate the current week. can also be used for time (hour)
var currentTime = moment().format("kk");

// FUNCTIONS ==========================================================================
//                                   Master Function

currentDateDisplay.text(today.format("LL"));
function pageInit() {
  populateAppointments();
  findCurrentTime();
}

//                                 Secondary Functions

console.log(currentTime);

function findCurrentTime() {
  if (currentTime < 9) {
    $("#9a").attr(".past");
  } else if (currentTime == 9) {
    $("#9a").attr(".present");
  } else {
    $("#9a").addClass(".future");
  }
  //Do this same loop for each container, just remeber to switch over to military time @ noon
}
// var weekNum = today.format("w");
// var takeOut;
// // Check odd, then assign boolean
// if(weekNum % 2) {
//   takeOut = true;
// } else {
//   takeOut = false;

function populateAppointments() {
  //   localStorage.getItem("");
  //   localStorage.getItem();
  // grab stored appointments
  // populate appointments in appropriate rows
}

function saveFunction(event) {
  event.preventDefault();
  console.log("Someone Saved!");
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

// BUTTONS ============================================================================
//  -Save Button, on click, run saveFunction

saveButton.on("click", saveFunction);
