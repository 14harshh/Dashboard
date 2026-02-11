const usersLink = document.getElementById("usersLink");
const tasksLink = document.getElementById("tasksLink");
const usersSection = document.getElementById("usersSection");
const tasksSection = document.getElementById("tasksSection");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".task-controls button");

usersLink.addEventListener("click", async (e) => {
  e.preventDefault();

  usersSection.style.display = "block";
  tasksSection.style.display = "none";

  loader.textContent = "Loading users...";

  try {
    users = await fetchUsers();
    renderUsers();
    loader.textContent = "";
  } catch {
    loader.textContent = "Failed to load users";
  }
});

tasksLink.addEventListener("click", async (e) => {
  e.preventDefault();

  tasksSection.style.display = "block";
  usersSection.style.display = "none";

  loader.textContent = "Loading tasks...";

  try {
    if (users.length === 0) {
      users = await fetchUsers();
    }

    tasks = await fetchTasks();
    renderTasks();
    loader.textContent = "";
  } catch {
    loader.textContent = "Failed to load tasks";
  }
});

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("complete-btn")) {
    const id = Number(e.target.closest(".card").dataset.id);
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    renderTasks();
  }

  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.closest(".card").dataset.id);
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
  }
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderTasks();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

async function init() {
  users = await fetchUsers();
  tasks = await fetchTasks();
  renderTasks();
}

init();
