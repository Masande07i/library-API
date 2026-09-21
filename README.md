# LIBRARY API

# PROJECT IMAGE

<img src="https://socialify.git.ci/Masande07i/library-API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="library-API" width="640" height="320" />

# Project description

```Library API is a RESTful API built with Node.js, Express, and TypeScript that allows users to manage authors and books in a library system. The API supports creating, viewing, updating, and deleting authors and books, while ensuring that each book is linked to a valid author. It also includes input validation, middleware, error handling, and relationship-based endpoints for retrieving books by an author. The project demonstrates core backend concepts such as REST APIs, CRUD operations, routing, controllers, models, middleware, validation, and HTTP status codes.```


# Installation and set-up

``` bash
Clone the repository:

git clone https://github.com/Masande07i/library-API.git
cd library-API
```

# RUN APP

``` bash
npm install
# or
yarn install

npm run dev
```



# API Endpoints

## Authors

### Create New Author

**POST** `/authors`

Creates a new author.

Example request:

```json
{
  "name": "J.K.",
  "surname": "Rowling"
}
```

### Get All Authors

**GET** `/authors`

Returns a list of all authors.

### Get Author By ID

**GET** `/authors/:id`

Returns a specific author using their ID.

Example:

```
GET /authors/1
```

### Update Author

**PUT** `/authors/:id`

Updates an existing author's information.

Example:

```
PUT /authors/1
```

### Delete Author

**DELETE** `/authors/:id`

Deletes an author using their ID.

Example:

```
DELETE /authors/1
```

### Get Books By Author

**GET** `/authors/:id/books`

Returns all books belonging to a specific author.

Example:

```
GET /authors/1/books
```

---

## Books

### Create New Book

**POST** `/books`

Creates a new book and connects it to an existing author using `authorId`.

Example request:

```json
{
  "title": "Harry Potter",
  "isbn": "9780747532699",
  "year": 1997,
  "authorId": 1
}
```

### Get All Books

**GET** `/books`

Returns a list of all books.

### Get Book By ID

**GET** `/books/:id`

Returns a specific book using its ID.

Example:

```
GET /books/1
```

### Update Book

**PUT** `/books/:id`

Updates an existing book.

Example:

```
PUT /books/1
```

### Delete Book

**DELETE** `/books/:id`

Deletes a book using its ID.

Example:

```
DELETE /books/1
```



# Tech Stack

## Node.js
## Express
## Typescript
## Postman