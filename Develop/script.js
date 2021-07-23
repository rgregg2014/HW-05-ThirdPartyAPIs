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

// to get and display the current date
var today = moment();
currentDateDisplay.text(today.format("dddd, MMM do YYYY"));

// to get and validate the current week. can also be used for time (hour)
// var currentTime = today.format("w");
// var statusClass;
// // Check odd, then assign boolean
// if (weekNum % 2) {
//   takeOut = true;
// } else {
//   takeOut = false;
// }

// $("#4a").text(takeOut + ", because it's currently week " + weekNum);

// FUNCTIONS ==========================================================================
//                                   Master Function

function pageInit() {
  populateAppointments();
  findCurrentTime();
}

//                                 Secondary Functions

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

/*  Within a funtion to draw letters, also had a variable with an array of letters
for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $('<button>');
    // Assign style to the button
    letterBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    letterBtn.attr('data-letter', letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    buttonListEl.append(letterBtn);}
    */
