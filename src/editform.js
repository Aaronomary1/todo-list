const editForm = function(todo, id){
    let editTaskForm = document.getElementById("edittask-form-container");
    editTaskForm.style.display = "flex";
    document.getElementById("edit-task-description").value = todo.task;
    //document.getElementById("edit-list-select").value = todo.list;
    document.getElementById("edit-task-date").value = (todo.date).substr(7, 16);
    document.getElementById("todo-id").value = todo.id;
    document.getElementById("edit-list-select").value = todo.list;
}

export { editForm };