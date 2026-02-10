async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function fetchTasks() {
  try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return await response.json();
} catch (error) {
  throw error;
}

}