const btnAdd = document.querySelector("#btn1");
const taskList = document.querySelector("#taskList");

btnAdd.addEventListener("click", () => {
    // Create a new task container
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a text input for the task
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Enter Task...";

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Append elements to the task container
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(removeBtn);

    // Append the task container to the task list
    taskList.appendChild(taskDiv);

    // Add event listener to the remove button
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(taskDiv);
    });
});
