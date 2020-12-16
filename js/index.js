function myFunction() {
  alert("Great Job Musharraf and James!");
}

//create new instance of TaskManager
const aNewTaskManager = new TaskManager();
aNewTaskManager.addTask(
  "puppy time",
  "play with puppies",
  "james",
  "january 5"
);

function sayHello() {
  alert("your onclick worked! Good job James!");
}

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
  //start date validation
  const yearInput = 1 + date[2] + date[3];
  const monthInput = date[5] + date[6];
  const dayInput = date[8] + date[9];

  //alert(date);
  checkDate(dayInput, monthInput, yearInput);

  //end date validation
  // validate(data);

  if (!validate(name)) {
    innerName();
  } else {
    nameMessage.style.display = "none";
  }

  if (!validate(descrip)) {
    innerDescription();
  } else {
    descriptionMessage.style.display = "none";
  }

  if (!validate(assign)) {
    innerAssign();
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
  // ATTENTION: code so that this function runs only if all fields are validated;
  dataToTaskManager();
}

function validate(input) {
  return input !== null && input !== "";
}

var m = new Date();
const month = m.getMonth();
var d = new Date();
const day = d.getDate();
var y = new Date();
const year = y.getYear();

// gets date, puts into correct format, and passes to calendar min and placeholder value
let today = new Date().toISOString().slice(0, 10);
document.querySelector("#taskDue").min = today;
document.querySelector("#taskDue").value = today;

function checkDate(dayInput, monthInput, yearInput) {
  if (yearInput > year) {
  } else if (yearInput == year && monthInput >= month && dayInput >= day) {
  } else {
    alert("past dates are not valid");
  }
}

// let testTask = new TaskManager();
// console.log(testTask);

console.log("console working");

//INNER HTML IS WORKING, SEE ALL BELOW, INTEGRATE THIS WITH VALIDATION FUNCTION

const nameMessage = document.querySelector("#innerName");
const descriptionMessage = document.querySelector("#innerDescription");
const assignMessage = document.querySelector("#innerAssign");

function innerName() {
  nameMessage.innerHTML = "Invalid Name Input";
  nameMessage.style.display = "block";
}

function innerDescription() {
  descriptionMessage.innerHTML = "Invalid Description";
  descriptionMessage.style.display = "block";
}

function innerAssign() {
  assignMessage.innerHTML = "Task Needs to be Assigned";
  assignMessage.style.display = "block";
}
