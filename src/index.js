document.addEventListener('DOMContentLoaded', () => {
  // Initial list of tasks
  let taskArray = [
    { id: 1, taskName: 'Feed cat', priorityLevel: 'high' },
    { id: 2, taskName: 'Task 2', priorityLevel: 'medium' },
    { id: 3, taskName: 'Task 3', priorityLevel: 'low' }
  ];

  // Function to handle form submission
  function handleFormSubmission() {
    const taskForm = document.getElementById('create-task-form');

    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the task input value
      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value.trim();

      // Create a new task object
      const newTask = {
        id: taskArray.length + 1,
        taskName: taskDescription,
        priorityLevel: 'low' // Default priority
      };

      // Add the new task to the list
      taskArray.push(newTask);

      // Clear the input field
      taskInput.value = '';

      // Update the task list in the DOM
      renderTaskList();
    });
  }

  // Function to remove a task by its ID
  function removeTask(taskId) {
    taskArray = taskArray.filter(task => task.id !== taskId);
    renderTaskList();
  }

  // Function to display tasks in the DOM
  function renderTaskList() {
    const taskListContainer = document.getElementById('tasks');

    // Clear the current task list
    taskListContainer.innerHTML = '';

    // Loop through the tasks and create list items
    taskArray.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task.taskName;
      listItem.setAttribute('data-task-id', task.id);

      // Add a delete button to each task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => {
        const taskId = parseInt(listItem.getAttribute('data-task-id'));
        removeTask(taskId);
      });

      // Append the delete button to the list item
      listItem.appendChild(deleteButton);

      // Append the list item to the task list container
      taskListContainer.appendChild(listItem);
    });
  }

  // Initialize the form submission handler
  handleFormSubmission();

  // Initial rendering of tasks
  renderTaskList();
});