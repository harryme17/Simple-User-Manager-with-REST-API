# Simple User Manager

A simple web application to manage users (add, edit, delete) using a REST API. Built with vanilla JavaScript and Bootstrap for UI styling.

## About

This project was made basically and formerly to help revise and test REST API concepts.  
It is intended as a learning tool for beginners or anyone wanting to practice CRUD operations with a simple frontend and a public API.

![image](https://github.com/user-attachments/assets/54407853-0aca-4432-bc4f-f48892d7323c)


## Features

- List all users from the backend API
- Add a new user with name and email
- Edit existing user details
- Delete users
- Form validation for name and email
- Loading spinner and user-friendly messages

## Setup

1. **Clone or Download the Repository**

2. **Open `index.html` in your Browser**

   No build step is required. The app runs entirely in the browser and communicates with the [crudcrud.com](https://crudcrud.com/) REST API.

3. **API Endpoint**

   The app uses a temporary API endpoint from [crudcrud.com]. If you want to use your own endpoint, replace the `API_URL` in `script.js` with your own.

## File Structure

- `index.html` – Main HTML file
- `script.js` – JavaScript logic for API calls and UI updates
- `README.md` – This file

## Usage

- Enter a name and email, then click "Add User" to create a new user.
- Use the "Edit" button to update user details.
- Use the "Delete" button to remove a user.

## Notes

- The API endpoint from crudcrud.com is temporary and will expire after 24 hours.
- For production use, connect to a persistent backend.

---
Made with ❤️ for learning REST API basics.
