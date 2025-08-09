# API Documentation

This document provides information about all available endpoints in the Nest.js REST API.

> **Note**: All requests must include the `x-api-key` header with any value to pass the authorization check. In these examples, the `x-api-key` header is omitted for brevity.

## Endpoints

Documentation for each endpoint is available in the following sections:

- [Users Endpoint](./docs/users-api.md)
- [Tasks Endpoint](./docs/tasks-api.md)
- [Projects Endpoint](./docs/projects-api.md)


## API Key Management

All requests require an `x-api-key` header. API keys are valid for 10 minutes from creation. After expiration, requests with the key will be rejected with a `403 Forbidden` error.

### Example header
```
x-api-key: <your-api-key>
```

### Expired Key Example
If you use an expired API key, you will receive:
```
HTTP/1.1 403 Forbidden
{
	"statusCode": 403,
	"message": "API Key has expired"
}
```

### Error Handling
- `400 Bad Request`: Invalid input, missing required fields, or business logic violations.
- `401 Unauthorized`: Missing or invalid API key.
- `403 Forbidden`: Expired API key or insufficient permissions.
- `404 Not Found`: Resource does not exist.
- `500 Internal Server Error`: Unexpected server error.

## Endpoint Summary

### Users
- Get user by ID: `GET /users/:id`
- Get user by email: `GET /users/email/:email`
- Create user: `POST /users/create`
- Update user: `PATCH /users/:id`
- Delete user: `DELETE /users/:id`

### Projects
- Get project by ID: `GET /projects/:id`
- Get project by name: `GET /projects/name/:name?userId=<userId>`
- Create project: `POST /projects/create`
- Add user to project: `PATCH /projects/user/add`
- Remove user from project: `PATCH /projects/user/remove`
- Update project: `PATCH /projects/:id`
- Delete project: `DELETE /projects/:id`

### Tasks
- Get task by ID: `GET /tasks/:id`
- Create task: `POST /tasks/create`
- Get tasks by user: `GET /tasks/user/:userId`
- Count tasks by user and status: `GET /tasks/user/:userId/count?status=<status>`
- Update task: `PATCH /tasks/:id`
- Delete task: `DELETE /tasks/:id`

Refer to the linked endpoint documentation for request/response examples and attribute details.