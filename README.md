# SocialMediaAPI

SocialMediaAPI is a Node.js application that provides RESTful APIs for managing social media posts, user authentication, and interaction features. It utilizes MongoDB for data storage and JWT (JSON Web Tokens) for secure authentication.

## Features

- **User Registration:** Allows users to register using their username, email, and password.
- **User Login:** Provides authentication via username and password.
- **Password Recovery:** Enables users to reset their password through email verification.
- **CRUD Operations for Posts:** Supports creating, reading, updating, and deleting posts.
- **Like and Comment Functionality:** Users can like and comment on posts.
- **Secure Authentication:** Implements JWT for token-based authentication.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing application data.
- **Mongoose:** MongoDB object modeling tool for Node.js.
- **JWT (JSON Web Tokens):** Secure mechanism for user authentication.
- **bcryptjs:** Library for hashing passwords securely.
- **Nodemailer:** Module for sending emails for password recovery.
- **HTML/CSS:** Frontend technologies for basic UI and layout.

## API Endpoints
- **/api/auth/register:** POST - Register a new user.
- **/api/auth/login:** POST - Authenticate user and get token.
- **/api/auth/forgot-password:** POST - Send email to reset password.
- **/api/auth/reset-password:** POST - Reset user's password.
- **/api/posts:** GET, POST - Manage posts.
- **/api/posts/:id:** GET, PUT, DELETE - Manage a specific post by ID.
- **/api/posts/like/:id:** PUT - Like a post.
- **/api/posts/comment/:id:** POST - Add a comment to a post.
