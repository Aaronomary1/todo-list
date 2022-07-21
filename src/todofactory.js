let todos = []
let lists = [
    {
        name:"Important",
        color:"#de5246",
        id: "#de5246" + (getRandomInt(1000000))
    },
    {
        name:"Today",
        color:"#1aa260",
        id: "#1aa260" + (getRandomInt(1000000))
    }
    
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function todoFactory(task, date, list){
    let id = (task.substring(0, 2)) + (date.substring(15, 17)) + (list.substring(0, 2)) + (getRandomInt(1000));
    let check = false;
    return{
        task,
        date,
        list,
        id,
        check
    }
}
function listFactory(name, color){
    let id = color + (getRandomInt(1000000));
    return{
        name,
        color,
        id
    }
}

let createTodo = function(task, date, list){
    let todo = todoFactory(task, date, list);
    todos.push(todo);
}
let updateTodo = function (task, date, list, id, todos){
    todos.forEach(function(todo){
        if (todo.id === id){
            todo.task = task;
            todo.date = date;
            todo.list = list;
        }
    }) 
}
let createList = function(name, color){
    let list = listFactory(name, color)
    console.log(list);
    console.log(lists);
    lists.push(list)
}

export { todos, lists, createTodo, updateTodo, createList };