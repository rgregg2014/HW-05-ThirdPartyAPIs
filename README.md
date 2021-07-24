# 05 Third-Party APIs: Work Day Scheduler

## Your Task

This assignment uses third-party API libraries to create a responsive day planner with Bootstrap styling. Users input a task or appointment to the correct hour slot and hit save. The text is stored in local browser storage and reloaded into the appropriate slot on page reload. Every day, the header updates the date using the Moment.js library. As the user goes through the day, the interface updates, applying new CSS classes to hour slots to track which appointments have passed, per the below .gif.

## User Story

```md
On page load, I want the user to see a header with the current date. In the 8 populated hour rows, I want the user to see a past/present/future color scheme based on current local time. I want any previous added appointments to be in the appropriate rows.

I want the user to be able to type an appointment into the text fields and save the text into local storage to repopulate on page load.
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

acceptance criteria and demo .gif courtesy Trilogy Education.
