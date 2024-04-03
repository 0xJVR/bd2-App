# App

A brief description of your application goes here. Explain what your app does and its main features.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

You'll need to install:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

Ensure MongoDB is running on your system or use a cloud-based instance.

## Installing

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository

```bash
git clone https://github.com/0xJVR/bd2-App
```

2. Enter the project directory

```bash
cd bd2-App
```

3. Install the dependencies

```bash
npm install
```

4. Start the application

```bash
npm start
```

This will start the server on port 3000. The webpage will be available at `http://localhost:3000/` and the API at `http://localhost:3000/api/`.

## Connecting into your MongoBD instance

Modify `config/mongodb/mongodb-config.json` to match your server configuration.

In case you have authentication, create a new user for the app database with the needed privileges on mongoSH.


## Using the API

To interact with the API, you can use tools like [Postman](https://www.postman.com/) or `curl`.

### Example: Creating a User

You can create a new user by sending a POST request to `/users` endpoint.

```bash
curl -X POST http://localhost:3000/api/users \       
  -H "Content-Type: application/json" \
  -d '{
    "username": "User",
    "email": "example@example.com",
    "passwordHash": "Password"
  }'
```

### API Endpoints

Here are some of the available endpoints:

- `POST /users` - Create a new user
- `GET /users` - Retrieve all users
- `GET /users/:userId` - Retrieve a user by their ID
- `PUT /users/:userId` - Update a user's information
- `DELETE /users/:userId` - Delete a user

Replace `:userId` with the actual ID of the user.
