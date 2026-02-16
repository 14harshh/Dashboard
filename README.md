# Project Name
Admin Dashboard

# Overview
The  Dashboard is a web-based application that fetches users and their tasks from a public API and displays them in a structured and professional dashboard layout.

The project demonstrates:

API integration

State management

Task-to-user mapping

Error handling

Clean UI structure

Modular JavaScript architecture

This project is built using HTML, CSS, and JavaScript (ES6) without any frameworks.

# Features

Structured layout (Header, Sidebar, Main Area)

Fetch users from API

Fetch tasks from API

Map tasks to their respective users

Display total users count

Display active tasks count

Visual status indicators (Completed / Pending)

Loading indicator while fetching data

Error handling using try/catch

Empty state handling

Modular file structure

 # APIs Used

This project uses the free public API provided by:

1️ Users API

Endpoint:https://jsonplaceholder.typicode.com/users


Purpose:

Fetch user details

Display user list

Map tasks to users using userId

2️ Tasks API

Endpoint:https://jsonplaceholder.typicode.com/todos

Purpose:

Fetch tasks

Show task title

Display task completion status

Count active tasks

Fetch API

# Project Structure
project-folder/
│
├── index.html     # Base structure
├── style.css      # Styling
├── api.js         # API calls
├── state.js       # Application state
├── render.js      # UI rendering
└── app.js         # Application logic

 # Setup Steps
Option 1: Run Directly in Browser

Download or clone the project

Keep all files inside the same folder

Open index.html in your browser

Option 2: Using VS Code Live Server (Recommended)

Open the project folder in VS Code

Install Live Server extension

Right-click index.html

Click Open with Live Server
