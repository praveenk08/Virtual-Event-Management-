
# Backend System for a Virtual Event Management Platform

This is a Node.js-based API for managing events. It allows registered users to create, read, update, and delete events while ensuring authentication and authorization.

## Features

- User registration and login with JWT-based authentication.
- CRUD operations for events.
- MongoDB integration for persistent data storage.
- Middleware for route protection and authentication.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Run project

To run this project run

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MODE` 
`MONGO_URI` 
`SMTP_HOST` 
`SMTP_PORT` 
`SMTP_USER` 
`SMTP_PASS` 
`JWT_SECRET`

## API Reference

#### Add User/ register

```http
  POST /api/users/users/
```

| Parameter  | Type     | Description             |
| :--------  | :------- | :-----------------------|
| `firstName`| `string` | **Required**.           |
| `lastName` | `string` | **Required**.           |
| `phone`    | `number` | **Required**.           |
| `email`    | `string` | **Required**.           |
| `password` | `string` | **Required**.           |


#### User login
```http
  GET /api/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**.              |
| `password`| `string` | **Required**.              |


#### Get all events

```http
  GET /api/events/events
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :-------------------------   |
| `token`   | `string` | **Required**. Your usertoken |


#### Add event

```http
  POST /api/events/events/
```

| Parameter     | Type     | Description             |
| :--------     | :------- | :-----------------------|
| `title`       | `string` | **Required**.           |
| `date`        | `date`   | **Required**.           |
| `location`    | `string` | **Required**.           |
| `description` | `string` | **Required**.           |

#### Update event

```http
  PUT /api/events/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Delete event

```http
  DELETE /api/events/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



- User Registration: POST /users/users/register
- User Login: POST /users/users/login
- Get All Events: GET /api/events/events (requires token)
- Create Event: POST /events/events (requires token)
- Update Event: PUT /api/events/events/:id (requires token)
- Delete Event: DELETE /events/events/:id (requires token)



## Tech Stack

**Server:** Node, Express

