import { renderTodos, renderLists } from './rendertodo';
import { resetForms } from './resetforms';
import { todos, lists, createTodo, updateTodo, createList } from './todofactory';
import { editForm } from './editform';
let listName = "default";
let counter = 0;
const editListeners = function(){
    todos.forEach(function(todo){
        if (todo.check === false && (todo.list === listName || listName === "default")){
            let todoEdit = document.getElementById(todo.id)
            let todoComplete = document.getElementById(todo.id + "i")
            let todoId = todo.id;
            todoEdit.addEventListener('click', function(){
                editForm(todo, todoId);
            })
            todoComplete.addEventListener('click', function(){  
                todo.check = true;
                renderTodos(listName);
            })
        } else if (listName === "complete" && todo.check === true){
            let todoEdit = document.getElementById(todo.id)
            let todoComplete = document.getElementById(todo.id + "i")
            let todoId = todo.id;
            todoEdit.addEventListener('click', function(){
                editForm(todo, todoId);
            })
            todoComplete.addEventListener('click', function(){  
                todo.check = false;
                renderTodos(listName);
            })
        }
    })
}
const listListeners = function(){
    lists.forEach(function(list){
        let currentList = document.getElementById(list.id)
        currentList.addEventListener('click', function(){
            listName = list.name;
            renderTodos(listName);
            resetForms();
            console.log("Im a little bit buggy" + counter++)
        })
    })
}
const listeners = function(){
    let newTask = document.getElementById("add-new");
    let newTaskForm = document.getElementById("newtask-form-container");
    let newTaskFormInner = document.getElementById("newtask-form");
    let newTaskImg = document.getElementById("addnew-img");
    let taskSubmit = document.getElementById("newtask-submit");
    let editTaskSubmit = document.getElementById("edittask-submit");
    let newListButton = document.getElementById("newlist-button");
    let newListForm = document.getElementById("newlist-form-container");
    let newListFormInner = document.getElementById("newlist-form");
    let newListSubmit = document.getElementById("newlist-submit");
    let listMenu = document.getElementById("list-menu-container");
    let listMenuInner = document.getElementById("list-menu");
    let defaultListButton = document.getElementById("default");
    let editTaskForm = document.getElementById("edittask-form-container");
    let editTaskFormInner = document.getElementById("edittask-form");

    editTaskForm.addEventListener('click', function(event){
        if (!editTaskFormInner.contains(event.target)){
            resetForms();
        }
    })
    defaultListButton.addEventListener('click', function(){
        listName = "default";
        resetForms();
        renderTodos(listName);
    })
    newListButton.addEventListener('click', function(){
        newListForm.style.display = "flex";
    })
    newListForm.addEventListener('click', function(event){
        if (!newListFormInner.contains(event.target)){
            resetForms();
        }
    })
    newTaskForm.addEventListener('click', function(event){
        if (!newTaskFormInner.contains(event.target)){
            newTask.style.zIndex = "0";
            newTaskImg.style.transform = "rotate(0deg)";
            resetForms();
        }
    })
    listMenu.addEventListener('click', function(event){
        if (!listMenuInner.contains(event.target)){
            resetForms();
        }
    })
    
    let completeList = document.getElementById("complete-button");
    completeList.addEventListener('click', function(){
        listName = "complete";
        renderTodos(listName);
    })
    let defaultList = document.getElementById("lists-button");
    defaultList.addEventListener('click', function(){
        listMenu.style.display = "flex";
        listListeners();
    })
    let newTaskError = document.getElementById("newtask-error");
    newTask.addEventListener('click', function(){
        if ((newTaskForm.style.display) == "flex"){
            newTask.style.zIndex = "0";
            resetForms();
            newTaskImg.style.transform = "rotate(0deg)";
        } else if ((newTaskForm.style.display) == "none"){
            newTask.style.zIndex = "100";
            newTaskForm.style.display = "flex";
            newTaskImg.style.transform = "rotate(45deg)";
        }
    })
    newListSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let errors = [];
        let newListError = document.getElementById("newlist-error");
        let newListName = document.getElementById("newlist-name").value
        let newListColor = document.getElementById("newlist-color").value
        for(var i = 0; i < lists.length; i++) {
            if ((lists[i].name).toLowerCase() == newListName.toLowerCase()) {
                errors.push(`Name is Already Taken.`)
                break;
            }
        }
        if (newListName === ""){
            errors.push("List Name is Required.")
        }
        if (errors.length > 0) {
            event.preventDefault();
            newListError.style.display = "block";
            newListError.innerText = errors.join("\n");
        }
        else{
            createList(newListName, newListColor);
            renderLists();
            resetForms();
            }
    })
    editTaskSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let errors = [];
        let editTaskError = document.getElementById("edittask-error");
        let task = document.getElementById("edit-task-description").value
        let date = "Due by " + document.getElementById("edit-task-date").value
        let list = document.getElementById("edit-list-select").value
        let todoId = document.getElementById("todo-id").value;
        
        if (task === ""){
            errors.push("Task Description Required.")
        }
        if (list === "none"){
            errors.push("List Required.")
        }
        if (date === "Due by "){
            errors.push("Due Date Required.")
        }
        if (errors.length > 0) {
            event.preventDefault();
            editTaskError.style.display = "block";
            editTaskError.innerText = errors.join("\n");
        }
        else{
            updateTodo(task, date, list, todoId, todos);
            resetForms();
            renderTodos(listName);
            }
    })
    
    taskSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let errors = [];
        let task = document.getElementById("task-description").value;
        let date = "Due by " + document.getElementById("task-date").value;
        let list = document.getElementById("list-select").value;
        if (task === ""){
            errors.push("Task Description Required.")
        }
        if (list === "none"){
            errors.push("List Required.")
        }
        if (date === "Due by "){
            errors.push("Due Date Required.")
        }
        if (errors.length > 0) {
            event.preventDefault();
            newTaskError.style.display = "block";
            newTaskError.innerText = errors.join("\n");
        }
        else{
            createTodo(task, date, list);
            resetForms();
            renderTodos(listName);

            newTask.style.zIndex = "0";
            newTaskImg.style.transform = "rotate(0deg)";
        }
    })
};
export { listeners, editListeners };
