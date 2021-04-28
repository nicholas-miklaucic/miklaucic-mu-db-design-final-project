import bookService from "./book-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const BookFormEditor = () => {
    const {id} = useParams()
    const history = useHistory()
    const [book, setBook] = useState({})
    useEffect(() => {
      if (id !== "new") {
        findBookById(id)
      }
    }, []);

    const findBookById = (id) =>
        bookService.findBookById(id).then(book => setBook(book))
    const deleteBook = (id) =>
        bookService.deleteBook(id)
            .then(() => history.goBack())
    const createBook = (book) =>
        bookService.createBook(book)
            .then(() => history.goBack())
    const updateBook = (id, newBook) =>
        bookService.updateBook(id, newBook)
            .then(() => history.goBack())

    let genre;
    if (typeof(book.genreType) == "undefined") {
        genre = "Undefined";
    } else {
        genre = book.genreType.id;
    }

    return (
        <div>
            <h2>Book Editor</h2>
            <label>Title</label>
            <input
                onChange={(e) =>
                    setBook(book =>
                        ({...book, title: e.target.value}))}
                value={book.title}/><br/>
            <label>Genre</label>
            <select value={genre} onChange={(e) => {
                setBook(book => ({...book, genreType: e.target.value}));
            }}>
                {
                    bookService.allGenres.map(genre => <option value={genre.id} key={genre}>{genre.id}</option>)
                }
            </select>

            <button className="btn btn-warning"
                onClick={() => {
                history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteBook(book.id)}>
                Delete
            </button>
            <button className="btn btn-primary"
                onClick={() => updateBook(book.id, book)}>
                Save
            </button>
            <button className="btn btn-success"
                onClick={() => createBook(book)}>
                Create
            </button>

        </div>
    )
}

export default BookFormEditor