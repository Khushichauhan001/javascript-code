let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
};

const updateTaskList = () => {
    const taskList = document.getElementById("task-list");
    const completedCount = document.getElementById("completedCount");

    taskList.innerHTML = ""; // Clear existing tasks

    let completedTasks = 0;
    
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} />
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="icons8-edit-50.png" onclick="editTask(${index})" alt="Edit" />
                <img src="icons8-delete-48.png" onclick="deleteTask(${index})" alt="Delete" />
            </div>
        `;

        listItem.querySelector(".checkbox").addEventListener("change", () => toggleTaskComplete(index));

        taskList.appendChild(listItem);

        if (task.completed) {
            completedTasks++;
        }
    });

    completedCount.innerText = completedTasks;
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
};

const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText) {
        tasks[index].text = newText.trim();
        updateTaskList();
    }
};

document.getElementById("newTask").addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});
