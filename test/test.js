const assert = require("assert");
const TaskManager = require("./../js/taskManager.js");
console.log(TaskManager);

describe("Testing TaskManager Function", () => {
  it("Add Task", () => {
    const taskManager = new TaskManager(0);
    taskManager.addTask("shoppping", "At Aldi", "Lavina", "24/01/2021");
    let len = taskManager.tasks.length;
    assert.strictEqual(len, 1);
  });
});

// make 3 tests for:  `addTask` - `deleteTask` - `getTaskById`;
