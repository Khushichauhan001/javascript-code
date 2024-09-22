let tasks = [];

const  addTask = () => {
     const taskInput = document.getElementById("taskInput");
     const text= taskInput.value.trim();

     if(text){
        tasks.push({text: text,completed:false});
        taskInput.value = "";
        updateTaskList();
     }
};
const updateTaskList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";   // any task list that has handed already will be deleted here]

    tasks.forEach((task,index) => {
     const listItem = document.createElement("li");

     listItem.innerHTML = `
     <div class = "taskItem">
      <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""

        }/>
        <p>${task.text}</p>
      </div>
      <div class="icons">  
         <img src="./img/icons8-delete-48.png" onClick = "deleteTask(${index})"/>
         <img src="./img/icons8-edit-50.png" onClick = "editTask(${index})"/>
        //  <img src="Bin.png" onClick = "deleteTask(${index})"/>
        //  <img src="Edit.png" onClick = "editTask(${index})"/>
       </div>
   </div>
      `;
      listItem.addEventListener("change", () => toggleTaskComplete(index));
       // Add event listener to the checkbox only
      // listItem.querySelector(".checkbox").addEventListener("change", () => toggleTaskComplete(index));

     taskList.append(listItem);
    });

};

document.getElementById("newTask").addEventListener("click", function(e){
e.preventDefault();

addTask();
});