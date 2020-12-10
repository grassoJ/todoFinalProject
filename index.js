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
  // alert(date);
  checkDate(dayInput, monthInput, yearInput);

  //end date validation
  validate(data);
}

function validate(inputValue) {
  for (i = 0; i < inputValue.length; i++)
    if (inputValue[i] === null || inputValue[i] === "") {
      alert("Fill out all required fields");
      break;
    }
}

var m = new Date();
const month = m.getMonth();
var d = new Date();
const day = d.getDate();
var y = new Date();
const year = y.getYear();

function checkDate(dayInput, monthInput, yearInput) {
  if (yearInput > year) {
  } else if (yearInput == year && monthInput >= month && dayInput >= day) {
  } else {
    alert("past dates are not valid");
  }
}
