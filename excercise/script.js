
document.addEventListener("DOMContentLoaded", () => {
    loadTodos();
});

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// todo: implement a function that loads all items using the fetch function 
// from https://jsonplaceholder.typicode.com/todos
//
// hint: use the addTodoList() function to add the results to the DOM
// hint: don't forget to catch possible errors
function loadTodos() {
    
}

// todo: use the fetch function to post an item to https://jsonplaceholder.typicode.com/todos
//
// hint: use the addTodoList() function to add the result to the DOM
// hint: don't forget to catch possible errors
// notice: leave event.preventDefault() in place to avoid nasty form submission
todoForm.addEventListener("submit", event => {
    event.preventDefault();
});

// todo: implement a function that add a todo item fetched from 
// the API to the DOM list
//
// hint: you will need a li element with proper textContent
// hint: don't forget to add a delete button
function addTodoToList(todo) {
}

// todo: implement a function that can be attached to the delete buttons
// the function should perform a DELETE request using fetch
//
// hint: don't forget to remove the listItem from DOM
// hint: don't forget to catch possible errors
// notice: you cannot delete items that you submitted previously because it's just a mock api
function deleteTodo(id, listItem) {
}
