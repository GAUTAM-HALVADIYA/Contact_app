# Contact Management API

A RESTful API for managing contacts built with Node.js, Express.js, and MongoDB. This application provides user authentication and contact management functionality with JWT-based security.

## Features

- 🔐 **User Authentication**
  - User registration
  - User login with JWT tokens
  - Protected routes with token validation
  - Get current user information

- 📇 **Contact Management**
  - Create new contacts
  - Get all contacts (user-specific)
  - Get single contact by ID
  - Update existing contacts
  - Delete contacts

- 🛡️ **Security**
  - Password hashing with bcrypt
  - JWT token-based authentication
  - Protected API endpoints

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Password Hashing:** bcrypt
- **Environment Variables:** dotenv

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Contact_app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```env
PORT=5000
CONNECTION_STRING=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in your `.env` file).

## API Endpoints

### User Routes (`/api/users`)

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/api/users/register` | Register a new user | Not required |
| POST | `/api/users/login` | Login user and get JWT token | Not required |
| GET | `/api/users/current` | Get current user information | Required |

### Contact Routes (`/api/contacts`)

All contact routes require authentication (JWT token in headers).

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | `/api/contacts` | Get all contacts for the authenticated user | Required |
| POST | `/api/contacts` | Create a new contact | Required |
| GET | `/api/contacts/:id` | Get a single contact by ID | Required |
| PUT | `/api/contacts/:id` | Update a contact by ID | Required |
| DELETE | `/api/contacts/:id` | Delete a contact by ID | Required |

## API Usage Examples

### Register a User
```bash
POST /api/users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Login
```bash
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

Response includes a JWT token that should be used in subsequent requests.

### Get Current User
```bash
GET /api/users/current
Authorization: Bearer <your_jwt_token>
```

### Create a Contact
```bash
POST /api/contacts
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "123-456-7890"
}
```

### Get All Contacts
```bash
GET /api/contacts
Authorization: Bearer <your_jwt_token>
```

### Update a Contact
```bash
PUT /api/contacts/:id
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "123-456-7890"
}
```

### Delete a Contact
```bash
DELETE /api/contacts/:id
Authorization: Bearer <your_jwt_token>
```

## Project Structure

```
Contact_app/
├── config/
│   └── dbConnection.js       # MongoDB connection configuration
├── controllers/
│   ├── contactController.js  # Contact CRUD operations
│   └── userController.js     # User authentication logic
├── middleware/
│   ├── errorHandler.js       # Global error handling middleware
│   └── validationTokenHandler.js  # JWT token validation
├── models/
│   ├── contactModel.js       # Contact schema/model
│   └── userModel.js          # User schema/model
├── routes/
│   ├── contactRoutes.js      # Contact routes
│   └── userRoutes.js         # User routes
├── app.js                    # Express app configuration
├── constants.js              # Application constants
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Models

### User Model
- `username` (String, required)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- `timestamps` (createdAt, updatedAt)

### Contact Model
- `user_id` (ObjectId, required, reference to User)
- `name` (String, required)
- `email` (String, required)
- `phone` (String, required)
- `timestamps` (createdAt, updatedAt)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in, you'll receive a token that should be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The application includes a global error handler middleware that catches and formats errors consistently across all routes.

## Development

To run the application in development mode with auto-reload:
```bash
npm run dev
```

## License

ISC

## Author

Gautam Halvadiya - [LinkedIn](https://www.linkedin.com/in/gautam-halvadiya) 

---

For any issues or questions, please open an issue in the repository.
