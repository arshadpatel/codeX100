# Course Management API

This API provides a robust solution for managing courses, enabling users to create, read, update, and delete course information. 

## Installation

### With Docker

<details>
<summary>
Click Me
</summary>

1. Clone the repository
2. Use docker-compose to run the server

```bash
git clone https://github.com/arshadpatel/codeX100.git
cd codeX100
docker-compose up -d
```

</details>

### Without Docker

<details>
<summary>
Click Me
</summary>

1. Clone the repository
2. Install the dependencies
3. Run the server

```bash
git clone https://github.com/arshadpatel/codeX100.git
cd codeX100
cd backend
pnpm install
pnpm dev
```

</details>


### NOTE: Setup environment variable in .env from .env.example

## Usage
To use the API, you can make HTTP requests to the endpoints provided.

## Endpoints:
- **POST /courses**: Add a new course (requires name, price, and description).
- **GET /courses**: Retrieve a list of available courses.
- **GET /courses/:id**: Retrieve details of a specific course.
- **PUT /courses/:id**: Update an existing course's details.
- **DELETE /courses/:id**: Remove a course from the system.

## Validation:
All endpoints ensure proper validation using zod for course data, including name, price, and description, to maintain data integrity. 

## Contributing
If you would like to contribute, please read our [Contributing Guide](CONTRIBUTING.md).

