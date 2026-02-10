const usersContainer = document.getElementById("users");
const tasksContainer = document.getElementById("tasks");

const totalUsers = document.getElementById("totalUsers");
const activeTasks = document.getElementById("ActiveTasks");

function renderUsers() {
  usersContainer.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    `;

    usersContainer.appendChild(card);
  });
}

function renderTasks() {
  tasksContainer.innerHTML = "";

  activeTasks.textContent = tasks.filter(t => !t.completed).length;

  tasks.slice(0, 10).forEach(task => {
    const card = document.createElement("div");
    card.className = `task-card ${task.completed ? "completed" : ""}`;

    card.innerHTML = `
      <span class="status ${task.completed ? "done" : "pending"}">
        ${task.completed ? "Completed" : "Pending"}
      </span>
      <p>${task.title}</p>

      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    `;

    tasksContainer.appendChild(card);
  });
}
