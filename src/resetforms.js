const resetForms = function(){
    document.getElementById("task-description").value = ""
    document.getElementById("task-date").value = ""
    document.getElementById("newtask-error").style.display = "none";
    document.getElementById("newtask-form-container").style.display = "none";
    document.getElementById("edit-task-description").value = ""
    document.getElementById("edit-task-date").value = ""
    document.getElementById("edittask-error").style.display = "none";
    document.getElementById("edittask-form-container").style.display = "none";
    document.getElementById("newlist-name").value = "";
    document.getElementById("newlist-color").value = "#4c8bf4";
    document.getElementById("newlist-form-container").style.display = "none";
    document.getElementById("newlist-error").style.display = "none";
    document.getElementById("list-menu-container").style.display = "none";
    document.getElementById("list-select").value = "none";
}
export { resetForms };