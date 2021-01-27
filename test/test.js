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
});

  // it("Delete Task", () => {
  //   const taskManager = new TaskManager();
  //   taskManager.addTask(
  //     "Complete App",
  //     "upload to github",
  //     "James",
  //     "28/01/2021"
  //   );
  //   let len = taskManager.tasks.length;
  //   taskManager.deleteTask(0);
  //   assert.strictEqual(len, 0);
  // });


// make 3 tests for:  `addTask` - `deleteTask` - `getTaskById`;
