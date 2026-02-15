const usersContainer = document.getElementById("users");
const tasksContainer = document.getElementById("tasks");
const totalUsers = document.getElementById("totalUsers");
const activeTasks = document.getElementById("activeTasks");
const statusMessage = document.getElementById("statusMessage");

function showLoading(message) {
  statusMessage.innerHTML = `<p class="loading">${message}</p>`;
}
function showError(message) {
  statusMessage.innerHTML = `
    <div class="error-card">
      <h3>⚠ Error</h3>
      <p>${message}</p>
    </div>
  `;
}

function showEmpty(message) {
  statusMessage.innerHTML = `
    <div class="empty-card">
      <p>${message}</p>
    </div>
  `;
}

function clearStatus() {
  statusMessage.innerHTML = "";
}


function renderUsers() {
  usersContainer.innerHTML = "";
  if (users.length === 0) {
    showEmpty("No users found.");
    return;
  }

  clearStatus();

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    `;

    usersContainer.appendChild(card);
  });

  totalUsers.textContent = users.length;
}

function renderTasks() {
  tasksContainer.innerHTML = "";

 if (tasks.length === 0) {
    showEmpty("No tasks available.");
    return;
  }

  clearStatus();

  activeTasks.textContent = tasks.filter(t => !t.completed).length;

  let filteredTasks = tasks;

  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter(t => t.completed);
  }

  if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter(t => !t.completed);
  }

  if (searchQuery) {
    filteredTasks = filteredTasks.filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (filteredTasks.length === 0) {
    tasksContainer.innerHTML = "<p>No tasks found</p>";
    return;
  }

  filteredTasks.slice(0, 20).forEach(task => {
    const owner = users.find(u => u.id === task.userId);
    const username = owner ? owner.username : "Unknown";

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = task.id;

    card.innerHTML = `
      <h4>${task.title}</h4>
      <p><strong>Owner:</strong> ${username}</p>
      <span class="badge ${task.completed ? "completed" : "pending"}">
        ${task.completed ? "Completed" : "Pending"}
      </span>
      <br>
      <button class="complete-btn">
        ${task.completed ? "Undo" : "Complete"}
      </button>
      <button class="delete-btn">Delete</button>
    `;

    tasksContainer.appendChild(card);
  });
}
