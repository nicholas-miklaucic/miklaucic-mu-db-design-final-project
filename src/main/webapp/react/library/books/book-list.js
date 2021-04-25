
import bookService from "./book-service"
const { useState, useEffect } = React;
const { Link, useHistory } = window.ReactRouterDOM;
const BookList = () => {
    const [books, setBooks] = useState([])
    const history = useHistory()
    useEffect(() => {
        findAllBooks()
    }, [])
    const findAllBooks = () =>
        bookService.findAllBooks()
            .then(books => setBooks(books))
    return(
        <div>
            <h2>Book List</h2>
            <button className="btn btn-primary"
              onClick = {() => history.push("/books/create")}>
                Add Book
            </button>
            <ul>
            {
               books.map(book =>
                  <li key={book.id}>
                            <Link to={`/books/${book.id}`}>
                      {book.title},
                      {book.genre}
                            </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default BookList;