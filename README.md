# Project Name

Users Dashboard

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
-[Some Images](#some-images)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)


## Introduction

It is a simple Todo-List app , the user can register and login to the app.After login,the user can add,update,delete the tasks.

## Features

List key features and functionalities of your project.

- Authentication: The user data is secured,only the user can see the tasks he added to the task Manger.Others do not have access to it.
- CRUD feautre : The user can perform the crud operations like create,update,delete on the tasks easily.

## Some Images
 Landing Page
![Alt Text](./client/src/images/image1.png)

Searching
![Alt Text](./client/src/images/image2.png)

Sorting by Name
![Alt Text](./client/src/images/image3.png)

Showing extra details
![Alt Text](./client/src/images/image4.png)
  

## Prerequisites

Prerequisites or dependencies that need to be installed or set up before running the project. Provide installation instructions when necessary.

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- Other dependencies...

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Redux](https://redux.js.org/) - A predictable state container for managing application state.
  - [Axios](https://axios-http.com/) - For making HTTP requests.
  - [Bootstrap](https://getbootstrap.com/) - A CSS framework for responsive web design.

- **Backend**:
  - [Node.js](https://nodejs.org/) - A JavaScript runtime for building server-side applications.
  - [Express.js](https://expressjs.com/) - A web application framework for Node.js.
  - [Mongoose](https://mongoosejs.com/) - A ODM(Object Data Modeling) library for MongoDB and Node.js.
  - [MongoDB](https://www.mongodb.com/) - A NOSQL database to store the data of our web application.



- **Version Control**:
  - [Git](https://git-scm.com/) - A distributed version control system.
  - [GitHub](https://github.com/) - A web-based platform for hosting and collaborating on Git repositories.

- **Package Management**:
  - [npm](https://www.npmjs.com/) - A package manager for Node.js.

- **Code Editor**:
  - [Visual Studio Code (VSCode)](https://code.visualstudio.com/) - A lightweight, open-source code editor.



## Getting Started

Provide detailed instructions on how to get your project up and running. Include any configuration steps or environment setup.

1. Clone the repository: git clone https://github.com/gopal265/todolist.git
2. Navigate to the project directory : cd 
3. Navigate to client folder : cd client
4. Install dependencies : npm install
5. Navigate to server folder : cd server (in new terminal)
6. Install dependencies : npm install
7. Start the development server : npm start (in client)
8. Start the node server : nodemon index.js (in server in cmd only)
9. Open your browser and visit : http://localhost:3000


## Usage
After installing and running the project locally,you will able to see a search input in which you can type the name of the user you want,you can click sortby name or sortby email  to sort the user as per your wish.If you do not want any filters,just click the clear filters button,below the search input and sort button you can see the user basic details and also a view Details button.You can click to know more details about the user which will appear just below the user like a dropdown,if you click again the details will disappear.At the bottom ,you can see a pagination that can be used to navigate through users,also the current page number will be highlighted in blue.