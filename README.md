# ContentQL-ToDo-Application

# To-Do Application 📝✅

Manage your tasks efficiently with this To-Do application. Add, update, delete, and mark tasks as completed effortlessly!

## Backend Implementation

### Prerequisites

1. **MongoDB**:
   - Install MongoDB on your machine. You can download it from the official MongoDB website: [MongoDB Download](https://www.mongodb.com/try/download/community)

2. **Node.js and npm**:
   - Ensure you have Node.js and npm installed. You can download and install them from the official Node.js website: [Node.js Download](https://nodejs.org/)

### Setting Up the Backend

1. **Start MongoDB**:
   - Open a terminal or command prompt window and start the MongoDB service.

2. **Initialize Node.js Project**:
   - Navigate to the backend directory.
   - Run `npm init -y` to initialize a Node.js project.

3. **Install Dependencies**:
   - Run `npm install express mongoose dotenv cors` to install required dependencies.

4. **Configure Environment**:
   - Create a `.env` file in the root of the backend directory.
   - Add the MongoDB connection URI to the `.env` file:
     ```
     MONGODB_URI=<your-mongodb-uri>
     ```

5. **Start the Server**:
   - Run `node server.js` to start the backend server.

6. **Test the Endpoints**:
   - Use tools like Postman or cURL to test the backend endpoints.

### Database Structure


![image](https://github.com/Geetika563/ContentQL-ToDo-Application/assets/157871606/22b5cf3c-78ba-447c-a7dc-474694a585f8)

## Frontend Implementation

### Setting Up the Frontend

1. **Open Command Prompt**:
   - Open a new Command Prompt window.

2. **Navigate to the Frontend Directory**:
   - Use the `cd` command to navigate to the frontend directory.

3. **Install Create React App**:
   - Run `npm install -g create-react-app` to install Create React App globally.

4. **Create React App**:
   - Run `npx create-react-app .` to create a new React application.

5. **Start the Frontend Server**:
   - Navigate into the project directory and run `npm start` to start the frontend server.

6. **Access the Application**:
   - Open a web browser and access the To-Do application at `http://localhost:3000`.

## Screenshots

### All Tasks
![Screenshot 2024-04-07 001705](https://github.com/Geetika563/ContentQL-ToDo-Application/assets/157871606/cec16a9d-c50c-472c-95b1-10d3daac7a85)

### Completed Tasks
![Screenshot 2024-04-07 001723](https://github.com/Geetika563/ContentQL-ToDo-Application/assets/157871606/fb366776-50b3-4606-9e5e-b76e1818c918)

![Screenshot 2024-04-07 001732](https://github.com/Geetika563/ContentQL-ToDo-Application/assets/157871606/fc880c9c-b9bb-4c28-b3b6-023ee1111a26)

### Active Tasks
![Screenshot 2024-04-07 001742](https://github.com/Geetika563/ContentQL-ToDo-Application/assets/157871606/9333afc8-50bf-4449-b9e5-38cccf8b79b8)

## Tech Stack Used
- Backend: Payload CMS with MongoDB
- Frontend: React
- Styling: Tailwind CSS
- API Integration: Axios for REST API calls


