Task Manager App

A React-based Task Management System that allows an **Admin** to create and assign tasks to **Employees**, who can then view their tasks and status updates.


Features

Admin
- Login as admin using predefined credentials.
- Create tasks with title, description, date, category, and assigned employee.
- View task counts for each employee (new, active, completed, failed).

Employee
- Login using individual credentials.
- View assigned tasks.
- Track task status (new, active, completed, failed).

Local Storage
- User data and tasks are stored persistently in browser localStorage.
- Admin task updates and employee data updates are saved automatically.


Login Credentials

Admin
- **Email**: `admin@me.com`
- **Password**: `123`

Employees
- Set up inside `LocalStorage.js` or through localStorage defaults.
- Each employee has an `email` and `password`.

NOTE:
On first run, make sure localStorage is initialized using the setLocalStorage() function in App.jsx. You can uncomment and run this once to populate data.



