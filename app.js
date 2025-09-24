// Simple Console-Based To-Do App (Node.js)

const readline = require("readline");

// Task list
let tasks = [];

// Setup CLI input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Show menu
function showMenu() {
  console.log("\n=== 📝 To-Do App ===");
  console.log("1. View Tasks");
  console.log("2. Add Task");
  console.log("3. Delete Task");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleMenu);
}

// Handle user choice
function handleMenu(choice) {
  switch (choice) {
    case "1":
      viewTasks();
      break;
    case "2":
      rl.question("Enter new task: ", (task) => {
        tasks.push(task);
        console.log(`✅ Task added: ${task}`);
        showMenu();
      });
      break;
    case "3":
      if (tasks.length === 0) {
        console.log("⚠️ No tasks to delete.");
        return showMenu();
      }
      viewTasks();
      rl.question("Enter task number to delete: ", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < tasks.length) {
          console.log(`❌ Deleted: ${tasks[index]}`);
          tasks.splice(index, 1);
        } else {
          console.log("⚠️ Invalid task number.");
        }
        showMenu();
      });
      break;
    case "4":
      console.log("👋 Goodbye!");
      rl.close();
      break;
    default:
      console.log("⚠️ Invalid option, try again.");
      showMenu();
  }
}

// View all tasks
function viewTasks() {
  if (tasks.length === 0) {
    console.log("📭 No tasks yet.");
  } else {
    console.log("\nYour Tasks:");
    tasks.forEach((task, i) => {
      console.log(`${i + 1}. ${task}`);
    });
  }
  showMenu();
}

// Start app
showMenu();
