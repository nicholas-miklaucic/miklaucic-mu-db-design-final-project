// TODO: declare URL where server listens for HTTP requests
const BOOKS_URL = "http://localhost:8080/api/books"


export const findAllBooks = () => fetch(BOOKS_URL).then(response => response.json())


export const findBookById = (id) => fetch(`${BOOKS_URL}/${id}`).then(response => response.json())


export const deleteBook = (id) => fetch(`${BOOKS_URL}/${id}`, { method: "DELETE" })



export const createBook = (book) => fetch(BOOKS_URL, {
                                        method: 'POST',
                                        body: JSON.stringify(book),
                                        headers: {'content-type': 'application/json'}
                                    })
                                        .then(response => response.json())


export const updateBook = (id, book) => fetch(`${BOOKS_URL}/${id}`, {
                                                method: 'PUT',
                                                body: JSON.stringify(book),
                                                headers: {'content-type': 'application/json'}
                                            })
                                            .then(response => response.json())

export default {
  findAllBooks,
  findBookById,
  deleteBook,
  createBook,
  updateBook
}
