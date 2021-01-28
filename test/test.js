const assert = require("assert");
const TaskManager = require("./../js/taskManager.js");
console.log(TaskManager);

describe("Testing TaskManager Function", () => {
  it("Add Task", () => {
    const taskManager = new TaskManager(0);
    taskManager.addTask(
      "Complete App",
      "upload to github",
      "James",
      "28/01/2021"
    );
    let len = taskManager.tasks.length;
    assert.strictEqual(len, 1);
  });

  it("Delete Task", () => {
    const taskManager = new TaskManager();
    taskManager.addTask(
      "Complete App",
      "upload to github",
      "James",
      "28/01/2021"
    );
    taskManager.deleteTask(0);
    let len = taskManager.tasks.length;
    assert.strictEqual(len, 0);
  });

  it("Gets Task By Id", () => {
    const taskManager = new TaskManager();
    newTask = taskManager.addTask(
      "Complete App",
      "upload to github",
      "James",
      "28/01/2021"
    );
    foundTask = taskManager.getTaskById(1);
    assert.deepEqual(foundTask, newTask);
  });
});

// make 3 tests for:  `addTask` - `deleteTask` - `getTaskById`;
