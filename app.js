const usersLink = document.getElementById("usersLink");
const tasksLink = document.getElementById("tasksLink");

const usersSection = document.getElementById("usersSection");
const tasksSection = document.getElementById("tasksSection");
const loader = document.getElementById("loader");

usersLink.addEventListener("click", async  e => {
  e.preventDefault();

  usersSection.style.display = "block";
  tasksSection.style.display = "none";

  loader.textContent = "Loading users...";
  usersContainer.innerHTML = "";

  try {
    users = await fetchUsers();
    renderUsers();
    totalUsers.textContent = users.length;
    loader.textContent = "";
  } catch {
    loader.textContent = "Failed to load users";
  }
});

tasksLink.addEventListener("click", async e => {
  e.preventDefault();

  tasksSection.style.display = "block";
  usersSection.style.display = "none";

  loader.textContent = "Loading tasks...";
  tasksContainer.innerHTML = "";

  try {
    tasks = await fetchTasks();
    renderTasks();
    loader.textContent = "";
  } catch {
    loader.textContent = "Failed to load tasks";
  }
});

document.addEventListener("click", function(e) {

  if (e.target.classList.contains("complete-btn")) {
    const task = e.target.parentElement;
    task.classList.add("completed");
  }

  if (e.target.classList.contains("delete-btn")) {
    const task = e.target.parentElement;
    task.remove();
  }
});
