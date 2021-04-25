// TODO: declare URL where server listens for HTTP requests
const AUTHORS_URL = "http://localhost:8080/api/authors"

// TODO: retrieve all users from the server
export const findAllAuthors = () => fetch(AUTHORS_URL).then(response => response.json())

// TODO: retrieve a single user by their ID
export const findAuthorById = (id) => fetch(`${AUTHORS_URL}/${id}`).then(response => response.json())


// TODO: retrieve all books from this author

// TODO: delete a user by their ID
export const deleteAuthor = (id) => fetch(`${AUTHORS_URL}/${id}`, { method: "DELETE" })


// TODO: create a new user
export const createAuthor = (author) => fetch(`{AUTHORS_URL}/create`, {
                                        method: 'POST',
                                        body: JSON.stringify(author),
                                        headers: {'content-type': 'application/json'}
                                    })
                                        .then(response => response.json())


// TODO: update a user by their ID
export const updateAuthor = (id, author) => fetch(`${AUTHORS_URL}/${id}`, {
                                                method: 'PUT',
                                                body: JSON.stringify(author),
                                                headers: {'content-type': 'application/json'}
                                            })
                                            .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
  findAllAuthors,
  findAuthorById,
  deleteAuthor,
  createAuthor,
  updateAuthor
}
