import { lists, todos } from './todofactory';
import { editListeners } from './listeners';
import { resetForms } from './resetforms';

const clearLists = function(){
    let listMenu = document.getElementById("dynamic-list");
    let dynamicOptions = document.getElementsByClassName("dynamic-option")
    for (let i = 0; i < dynamicOptions.length; i++){
        dynamicOptions[i].remove();
    }
    listMenu.innerHTML = "";
}
const clearTodos = function(){
    let tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
}

const prependTodo = function(todoObj){
    let color = "";
    lists.forEach(function(list){
        if (list.name === todoObj.list){
            color = list.color;
        }
    })
    let tasksContainer = document.getElementById("tasks-container");
    let todo = document.createElement("div");
    todo.classList = "todo";
    let todoInput = document.createElement("input");
    todoInput.classList = "todo-input";
    todoInput.setAttribute("type","checkbox")
    todoInput.setAttribute("id", todoObj.id + "i");
    todoInput.value = todoObj.check;
    if (todoObj.check === true){
        todoInput.checked = true;
    }
    todo.append(todoInput);
    let taskInfo = document.createElement("div");
    taskInfo.classList = "task-info";
    todo.append(taskInfo);
    let taskText = document.createElement("h3");
    taskText.classList = "task-text";
    taskInfo.append(taskText);
    let taskDate = document.createElement("p");
    taskDate.classList = "task-date";
    taskInfo.append(taskDate);
    let taskList = document.createElement("div");
    taskList.classList = "task-list";
    todo.append(taskList);
    let listName = document.createElement("p");
    listName.classList = "list-name";
    taskList.append(listName);
    let listColor = document.createElement("div");
    listColor.classList = "list-color";
    listColor.style.backgroundColor = color;
    taskList.append(listColor);
    let editButton = document.createElement("img");
    editButton.classList = "edittodo-img";
    editButton.setAttribute("id", todoObj.id);
    taskList.append(editButton);
    taskText.innerText = todoObj.task;
    taskDate.innerText = todoObj.date;
    listName.innerText = todoObj.list;
    tasksContainer.prepend(todo);
}
const appendList = function (listObj){
    // Append List to list menu
    let listMenu = document.getElementById("dynamic-list");
    let listButtonDiv = document.createElement("div");
    listButtonDiv.classList = "list-button";
    listButtonDiv.setAttribute("id", listObj.id);
    let listButtonLabel = document.createElement("p");
    listButtonLabel.innerText = listObj.name;
    listButtonLabel.classList = "button-label";
    let listColorDiv = document.createElement("div");
    listColorDiv.classList = "list-color";
    listColorDiv.style.backgroundColor = listObj.color;
    listButtonDiv.append(listButtonLabel, listColorDiv);
    listMenu.append(listButtonDiv);
    //Append list to list dropdowns
    let editListSelect = document.getElementById("edit-list-select");
    let listSelect = document.getElementById("list-select");
    let listOption = document.createElement("option");
    let listOptionTwo = document.createElement("option");
    listOption.setAttribute("id", listObj.color);
    listOption.classList = "dynamic-option";
    listOption.style.color = listObj.color;
    listOption.innerText = listObj.name;
    listSelect.append(listOption);
    listOptionTwo.setAttribute("id", listObj.color);
    listOptionTwo.classList = "dynamic-option";
    listOptionTwo.style.color = listObj.color;
    listOptionTwo.innerText = listObj.name;
    editListSelect.append(listOptionTwo);
}
const renderTodos = function(listName){
    clearTodos();
    todos.forEach(function(todo){
        if (todo.list === listName && todo.check === false){
            prependTodo(todo)
        }
        else if (listName === "complete" && todo.check === true){
            prependTodo(todo)
        }
        else if (listName === "default" && todo.check === false){
            prependTodo(todo)
        }
    })
    let tasksContainer = document.getElementById("tasks-container");
    if (tasksContainer.innerHTML == ""){
        let noTasksMessage = document.createElement("h2");
        if (listName === "default" || listName === undefined){
            noTasksMessage.innerText = `There are currently no tasks.`; 
        } else {
            noTasksMessage.innerText = `There are currently no "${listName}" tasks.`;
        }
        noTasksMessage.setAttribute("id", "no-tasks");
        tasksContainer.append(noTasksMessage);
    }
    editListeners();
}

const renderLists = function(){
    clearLists();
    lists.forEach(function(list){
        appendList(list)
    })
    resetForms();
}


export { renderTodos, renderLists };