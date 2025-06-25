var addTaskBtn = document.getElementById("addTaskBtn")
var InputTask = document.getElementById("InputTask")
var Tasks = document.getElementById("Tasks")

function addTask() {
    var Task = InputTask.value.trim()
    if (Task == "") { 
        alert("Empty Task!"); 
        return 
    }

    var listItem = document.createElement('li');
    var taskSpan = document.createElement('span');
    taskSpan.textContent = Task
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("deleteBtn");


    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteButton)

    Tasks.appendChild(listItem)

    deleteButton.addEventListener('click',deleteTask)

    InputTask.value = ""

}

addTaskBtn.addEventListener("click", addTask)
InputTask.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function deleteTask(e){
    console.log(e.target.parentNode.remove())
}



