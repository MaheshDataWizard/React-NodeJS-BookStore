# BookStore Project  

## Description  
The **BookStore Project** is a web application built with modern technologies, enabling users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. This project demonstrates the use of RESTful APIs, a Node.js backend, and a React frontend with Tailwind CSS for styling.  

## Features  
- **Add new books** with title, author, and publish year.  
- **View a list** of all books in a tabular format.  
- **Edit details** of existing books.  
- **Delete books** from the collection.  
- A responsive and interactive UI built with React and Tailwind CSS.  
- RESTful API integration with Node.js and Express.  

## Technologies Used  
### Backend:  
- **Node.js** - JavaScript runtime for building the backend.  
- **Express** - Framework for creating REST APIs.  
- **MongoDB** - NoSQL database for data storage.  
- **Mongoose** - ODM for MongoDB.  
- **Postman** - API testing and debugging.  
- **Nodemon** - Development tool for auto-restarting the server on changes.  

### Frontend:  
- **React** - JavaScript library for building user interfaces.  
- **React Router** - Routing for React applications.  
- **React Hooks** - State and lifecycle management in functional components.  
- **Tailwind CSS** - Utility-first CSS framework for styling.  

## Installation  
Follow these steps to set up and run the project locally.  

### Prerequisites  
- **Node.js** and **npm** installed.  
- MongoDB Atlas account or local MongoDB instance.  

### Steps  
1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/bookstore-project.git  
   cd bookstore-project  
   ```  

2. **Install backend dependencies**:  
   ```bash  
   cd backend  
   npm install  
   ```  

3. **Configure database connection**:  
   Open `config.js` in the `backend` directory and add your MongoDB Atlas link:  
   ```javascript  
   export const PORT = 5555;  
   export const mongoDBURL = "paste your Atlas database link here";  
   ```  

4. **Start the backend server**:  
   ```bash  
   npm run dev  
   ```  

5. **Install frontend dependencies**:  
   ```bash  
   cd ../frontend  
   npm install  
   ```  

6. **Start the frontend server**:  
   ```bash  
   npm run dev  
   ```  

7. Open the application in your browser at `http://localhost:3000`.  

## API Endpoints  
The backend exposes the following endpoints:  
| Method | Endpoint               | Description               |  
|--------|------------------------|---------------------------|  
| GET    | `/books`               | Fetch all books           |  
| GET    | `/books/:id`           | Fetch a single book       |  
| POST   | `/books`               | Add a new book            |  
| PUT    | `/books/:id`           | Update an existing book   |  
| DELETE | `/books/:id`           | Delete a book             |  

## Folder Structure  
```
bookstore-project/  
│  
├── backend/  
│   ├── models/        # Mongoose models  
│   ├── routes/        # Express routes  
│   ├── config.js      # Configuration file  
│   ├── index.js       # Entry point for the server  
│   └── package.json   # Backend dependencies  
│  
├── frontend/  
│   ├── src/  
│   │   ├── Components/ # Reusable components  
│   │   ├── pages/      # React pages  
│   │   ├── App.jsx     # Main application file  
│   │   └── index.js    # Entry point for React  
│   └── package.json   # Frontend dependencies  
│  
└── README.md  
```  

## Acknowledgements  
Thanks to all open-source libraries and tools that made this project possible.  
