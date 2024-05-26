# Node.js Form API (BigOh Assignment)

This is a Node.js API that allows users to create forms, fill in form data, and retrieve filled data using PostgreSQL as the database and Drizzle ORM for database operations.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Running the API](#running-the-api)
- [License](#license)

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Drizzle ORM
- UUID
- dotenv

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/Jasmeet1001/BigOh-Assignment.git
    cd BigOh-Assignment
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the root of the project and add your database configuration:
    ```
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/bigohapi
    ```

## Configuration
Make sure you have PostgreSQL installed and running on your machine. Update the `.env` file with your PostgreSQL connection details.

## API Endpoints

### 1. Create a Form
- **Endpoint:** `POST /form`
- **Body:**
    ```json
    {
        "title": "user",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phoneNumber": 1234567890,
        "isGraduate": true
    }
    ```
- **Description:** This endpoint creates a new form with the specified details.

### 2. Fill Form Data
- **Endpoint:** `POST /fill_data?form_title=user`
- **Body:**
    ```json
    {
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "phonenumber": 9876543210,
        "isGraduate": false
    }
    ```
- **Description:** This endpoint fills data for the form identified by the title.

### 3. Get All Form Data
- **Endpoint:** `GET /fill_data?form_title=user`
- **Description:** This endpoint retrieves all filled data for the form identified by the title.

## Running the API

1. Start the server:
    ```
    node ./src/index.js
    ```

2. The API will be running at `http://localhost:3000`.
