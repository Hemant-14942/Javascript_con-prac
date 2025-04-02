document.addEventListener("DOMContentLoaded",()=>{
    const   taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

 addTaskBtn.addEventListener('click',addTask);
 function addTask(){
    const taskValue = taskInput.value.trim();

    if(taskValue ===""){
        alert("Enter Your Task");
        return ;
    }
    const taskItem = document.createElement("li");
    taskItem.textContent = taskValue;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value="";

 }
 

}); 