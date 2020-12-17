//CREATES A NEW INSTANCE OF TaskManager, AND ADDS A TEST INPUT
const aNewTaskManager = new TaskManager();
aNewTaskManager.addTask(
  "puppy time",
  "play with puppies",
  "james",
  "january 5"
);

//  VALIDATES THAT ALL FIELDS ARE FILLED OUT, AND HAS NESTED FUNCTION dataToTaskManager()
//THAT COLLECTS INPUTS AND ADDS THEM TO NEW TASKMANAGER INSTANCE

//NEED TO DO: Find add taks button (within form one), make id,
// make validateInput run with an eventListner on this js file rather than onClick in the html
function validateInput() {
  console.log("validateINput running");
  //task name
  const newTaskNameInput = document.querySelector("#taskName");
  const name = newTaskNameInput.value;
  //task desc
  const newTaskDescriptionInput = document.querySelector(
    "#exampleFormControlTextarea1"
  );
  const descrip = newTaskDescriptionInput.value;
  //assigned to
  const newTaskAssignedInput = document.querySelector("#taskAssign");
  const assign = newTaskAssignedInput.value;
  //status
  const newTaskStatusInput = document.querySelector("#taskStatus");
  const status = newTaskStatusInput.value;
  //date
  const newTaskDateInput = document.querySelector("#taskDue");
  const date = newTaskDateInput.value;

  const data = [name, descrip, assign, status, date];

  function validate(input) {
    return input !== null && input !== "";
  }

  if (!validate(name)) {
    nameMessage.innerHTML = "Invalid Name Input";
    nameMessage.style.display = "block";
  } else {
    nameMessage.style.display = "none";
  }

  if (!validate(descrip)) {
    descriptionMessage.innerHTML = "Invalid Description";
    descriptionMessage.style.display = "block";
  } else {
    descriptionMessage.style.display = "none";
  }

  if (!validate(assign)) {
    assignMessage.innerHTML = "Task Needs to be Assigned";
    assignMessage.style.display = "block";
  } else {
    assignMessage.style.display = "none";
  }

  //take inputs and add them to new instance of TaskManager (aNewTaskManager)
  function dataToTaskManager() {
    aNewTaskManager.addTask(name, descrip, assign, date);
    console.log(aNewTaskManager);
    // Clear the form
    newTaskNameInput.value = "";
    newTaskDescriptionInput.value = "";
    newTaskAssignedInput.value = "";
    newTaskDateInput.value = "";
  }

  // BEFORE dataToTaskManager(); IS RUN, WE CHECK THAT ALL FIELDS ARE FILLED

  if (validate(name) && validate(descrip) && validate(assign)) {
    dataToTaskManager();
  }
}

// gets date, puts into correct format, and passes to calendar min and placeholder value
let today = new Date().toISOString().slice(0, 10);
document.querySelector("#taskDue").min = today;
document.querySelector("#taskDue").value = today;

//INNER HTML IS WORKING, SEE ALL BELOW, INTEGRATE THIS WITH VALIDATION FUNCTION

const nameMessage = document.querySelector("#innerName");
const descriptionMessage = document.querySelector("#innerDescription");
const assignMessage = document.querySelector("#innerAssign");

//Test Functions

function sayHello() {
  alert("your onclick worked! Good job James!");
}

function myFunction() {
  alert("Great Job Musharraf and James!");
}

//old date checker, not required after whiting out past dates

//start date validation, old date validation, not needed after whiting out past dates
// const yearInput = 1 + date[2] + date[3];
// const monthInput = date[5] + date[6];
// const dayInput = date[8] + date[9];
// checkDate(dayInput, monthInput, yearInput);
// validate(data);
//end date validation

// var m = new Date();
// const month = m.getMonth();
// var d = new Date();
// const day = d.getDate();
// var y = new Date();
// const year = y.getYear();

// function checkDate(dayInput, monthInput, yearInput) {
//   if (yearInput > year) {
//   } else if (yearInput == year && monthInput >= month && dayInput >= day) {
//   } else {
//     alert("past dates are not valid");
//   }
// }
