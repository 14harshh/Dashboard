const usersLink = document.getElementById("usersLink");
const tasksLink = document.getElementById("TasksLink");

const usersContainer = document.getElementById("users");
const tasksContainer = document.getElementById("tasks");

const loader = document.getElementById("loader");
const totalUsers = document.getElementById("totalUsers");
const ActiveTasks = document.getElementById("ActiveTasks");

async function  fetchUsers() {
  loader.textContent = "Loading users...";
  usersContainer.innerHTML = "";
  tasksContainer.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    loader.textContent = "";
    totalUsers.textContent = users.length;

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h4>${user.name}</h4>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      usersContainer.appendChild(card);
    });
  } catch {
    loader.textContent = "Failed to load users";
  }
}

async function fetchTasks() {
  loader.textContent = "Loading tasks...";
  tasksContainer.innerHTML = "";
  usersContainer.innerHTML = ""; 

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tasks = await response.json();

    loader.textContent = "";
    ActiveTasks.textContent = tasks.length

    tasks.slice(0, 10).forEach(task => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.innerHTML = `
        <span>${task.completed ? " Completed" : " Pending"}</span>
        <p>${task.title}</p>
      `;
      tasksContainer.appendChild(card);
    });
  } catch {
    loader.textContent = "Failed to load tasks";
  }
}

usersLink.addEventListener("click", e => {
  e.preventDefault();
  fetchUsers();
});

tasksLink.addEventListener("click", e => {
  e.preventDefault();
  fetchTasks();
});
