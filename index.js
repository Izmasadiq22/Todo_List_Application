#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
//print welcome message 
console.log("\n\tCodewithIzma - todo-list Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        { name: "task",
            type: "input",
            message: "Enter Your New Task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("your updated Todo-List:", todoList);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//Function to add new task in the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "list",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
// Function to view all Todo-list Task
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
//Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "input",
            type: "number",
            message: "Enter the index no.' of the task you want to delete: ",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List`);
};
main();
