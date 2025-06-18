const API_URL = ''; // API endpoint for users
const userList = document.getElementById('userList'); // Reference to the user list element

// GET - Load users
function getUsers() {
  // Show a loading spinner while fetching users
  userList.innerHTML = `
    <div class="d-flex justify-content-center my-3">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  `;
  // Fetch users from the API
  fetch(API_URL)
    .then(res => res.json()) // Parse response as JSON
    .then(users => {
      // If no users, show a message
      if (users.length === 0) {
        userList.innerHTML = `<li class="list-group-item text-center text-muted">No users found.</li>`;
        return;
      }
      // Clear the list
      userList.innerHTML = '';
      // For each user, add a styled list item
      users.forEach(user => {
        userList.innerHTML += `
          <li class="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded">
            <div>
              <span class="fw-bold">${user.name}</span>
              <span class="text-muted small ms-2">${user.email}</span>
            </div>
            <div>
              <button class="btn btn-sm btn-outline-primary me-2" onclick="updateUserPrompt('${user._id}', '${user.name}', '${user.email}')">📝 Edit</button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteUser('${user._id}')">❌ Delete</button>
            </div>
          </li>
        `;
      });
    });
}

// Add a new user
function addUser() {
  const name = document.getElementById('newName').value.trim(); // Get name input
  const email = document.getElementById('newEmail').value.trim(); // Get email input

  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if fields are empty
  if (!name || !email) {
    alert("❌ Name and Email cannot be empty.");
    return;
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  // Send new user data to API
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json()) // Parse response
  .then(() => {
    alert('✅ User added!');
    document.getElementById('newName').value = ''; // Clear name input
    document.getElementById('newEmail').value = ''; // Clear email input
    getUsers(); // Reload user list
  });
}

// Update an existing user
function updateUser(id, currentName, currentEmail) {
  const newName = prompt("Edit Name:", currentName); // Prompt for new name
  if (newName === null) return; // Cancelled

  const newEmail = prompt("Edit Email:", currentEmail); // Prompt for new email
  if (newEmail === null) return; // Cancelled

  // Check if fields are empty
  if (!newName.trim() || !newEmail.trim()) {
    alert("❌ Name and Email cannot be empty.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newEmail)) {
    alert("❌ Invalid email format.");
    return;
  }

  // Send updated data to API
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newName, email: newEmail })
  })
  .then(res => res.json()) // Parse response
  .then(() => {
    alert("✅ User updated!");
    getUsers(); // Reload user list
  });
}

// DELETE - Delete user
function deleteUser(id) {
  // Send delete request to API
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    alert('❌ User deleted!');
    getUsers(); // Reload user list
  });
}

// Helper for update prompt (to pass name/email)
function updateUserPrompt(id, name, email) {
  updateUser(id, name, email); // Call updateUser with current values
}
