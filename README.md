# Course Management API

This API provides a robust solution for managing courses, enabling users to create, read, update, and delete course information. 

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

