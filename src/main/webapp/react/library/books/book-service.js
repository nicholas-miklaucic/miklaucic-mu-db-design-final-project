// TODO: declare URL where server listens for HTTP requests
const BOOKS_URL = "http://localhost:8080/api/books"



export const findAllBooks = () => fetch(BOOKS_URL).then(response => response.json())

let allBooks = [];
findAllBooks().then((allBs) => allBs.map(book => {
    allBooks.push(book);
}));


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

export const genres = fetch(`http://localhost:8080/api/genres`).then(response => response.json());

let allGenres = [];
genres.then((allGs) => allGs.map(genre => {
    allGenres.push(genre);
}));


export default {
    findAllBooks,
    findBookById,
    deleteBook,
    createBook,
    updateBook,
    allGenres,
    allBooks
}
