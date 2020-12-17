//STEP 6,  MAKE A 'CARD' BY PASSING IN PARAMS
function createTaskHtml(name, description, assignedTo, dueDate, status) {
  return `<div class="card">
    <div class="card-header" id="createTask">
      <h2 class="mb-0">
        <button
          class="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         ${name}
        </button>
      </h2>
    </div>
    <div
      id="collapseTwo"
      class="collapse"
      aria-labelledby="headingTwo"
      data-parent="#accordionExample"
    >
      <div class="card-body">
        <p>Assinged To: ${assignedTo}</p>
        <p>Status: ${status} </p>
        <p>Due: ${dueDate}</p>
        <p>Description: ${description}</p>
      </div>
    </div>
  </div>`;
}

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  //on the index.js page: aNewTaskManager.addTask(name, descrip, assign, date);

  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this.tasks.push(task);
  }

  render() {
    // Create an array to store the tasks' HTML
    const tasksHtmlList = [];

    // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      // Create the task html
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );

      // Push it to the tasksHtmlList array
      tasksHtmlList.push(taskHtml);
    }

    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector("#tasksList");
    tasksList.innerHTML = tasksHtml;
  }
}

//TEST new TaskManager to see in console

// const testTask = new TaskManager();
// testTask.addTask("snack time", "eat butterflies", "Bentley", "january 5th");
