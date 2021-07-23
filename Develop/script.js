// PSEUDOCODE =========================================================================
/*
    On page load, I want the user to see a header with the current date. In the 8 populated hour rows, I want the user to see a past/present/future color scheme based on current local time. I want any previous added appointments to be in the appropriate rows.
    I want the user to be able to type an appointment into the text fields and save the text into local storage to repopulate on page load.
*/
// DEPENDECIES AND VARIABLES ==========================================================
/*
    - var containerRow
    - var formTextArea
    - var saveButton
    - var currentDateDisplay
    - var currentTime

*/

var containerRow = $(".time-block");
var formTextArea = $("description");
var saveButton = $(".saveBtn");
var currentDateDisplay = $("#currentDay");
// DATA ===============================================================================
/*
    - method to pull current date
    - method to pull current time
*/

var dateToday = moment();

// FUNCTIONS ==========================================================================
//                                   Master Function

function pageInit() {
  displayCurrentDate();
  populateRows();
  populateAppointments();
  findCurrentTime();
}

//                                 Secondary Functions

function displayCurrentDate() {
  // grab currentDate
  currentDateDisplay.val(dateToday);
}

function populateRows() {
  // generate 7 additional rows
  // append rows to existing HTML
  // assign each row with correct time
}

function findCurrentTime() {
  // grab currentTime
  // assign CSS classes to rows based on time
}

function populateAppointments() {
  // grab stored appointments
  // populate appointments in appropriate rows
}

function saveFunction(event) {
  event.preventDefault();
  // convert row time value into string to
  // store row time and formTextInput in local storage
}

// BUTTONS ============================================================================
//  -Save Button, on click, run saveFunction

saveButton.on("click", saveFunction);
