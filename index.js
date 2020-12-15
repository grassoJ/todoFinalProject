function myFunction() {
  alert("Great Job Musharraf and James!");
}

// 10 / 12 / 2020;

// if year <=  inputYear
//    and month <= input Month
//        and < input day
// alert- please put a correct date

// let year = new Year();
// month.getFullYear();

function sayHello() {
  alert("your onclick worked! Good job James!");
}

function validateInput() {
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
}

//old validate function, to validate all inputs as an array
// function validate(inputValue) {
//   for (i = 0; i < inputValue.length; i++) {
//     if (inputValue[i] === null || inputValue[i] === "") {
//       alert("Fill out all required fields");
//     }
//     break;
//   }
// }

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
