function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    var li = button.parentElement;
    var taskList = document.getElementById("taskList");
    taskList.removeChild(li);
}
