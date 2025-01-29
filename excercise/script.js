
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
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(response => {
            if (!response.ok) {
                throw new Error("Fehler beim Laden der To-Dos");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(todo => addTodoToList(todo));
        })
        .catch(error => console.error("Fehler:", error));
}

// todo: use the fetch function to post an item to https://jsonplaceholder.typicode.com/todos
//
// hint: use the addTodoList() function to add the result to the DOM
// hint: don't forget to catch possible errors
// notice: leave event.preventDefault() in place to avoid nasty form submission
todoForm.addEventListener("submit", event => {
    event.preventDefault();

    const newTodo = {
        title: todoInput.value,
        completed: false,
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(todo => {
        addTodoToList(todo);
        todoInput.value = "";
    })
    .catch(error => console.error("Fehler beim Erstellen:", error));
});

// todo: implement a function that add a todo item fetched from 
// the API to the DOM list
//
// hint: you will need a li element with proper textContent
// hint: don't forget to add a delete button
function addTodoToList(todo) {
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.addEventListener("click", () => {
        deleteTodo(todo.id, listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}

// todo: implement a function that can be attached to the delete buttons
// the function should perform a DELETE request using fetch
//
// hint: don't forget to remove the listItem from DOM
// hint: don't forget to catch possible errors
// notice: you cannot delete items that you submitted previously because it's just a mock api
function deleteTodo(id, listItem) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Fehler beim Löschen des To-Dos");
        }
        listItem.remove();
    })
    .catch(error => console.error("Fehler beim Löschen:", error));
}
