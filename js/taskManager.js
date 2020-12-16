class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      despcription: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this.tasks.push(task);
  }
}

const testTask = new TaskManager();
testTask.addTask("snack time", "eat butterflies", "Bentley", "january 5th");
