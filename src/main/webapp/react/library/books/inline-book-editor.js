const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineBookEditor = ({book, deleteBook, updateBook}) => {
    const [bookCopy, setBookCopy] = useState(book)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={bookCopy.title}
                            onChange={(e)=>setBookCopy(bookCopy => ({...bookCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={bookCopy.genre}
                            onChange={(e)=>setBookCopy(bookCopy => ({...bookCopy, genre: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/books/${bookCopy.id}/authors`}>
                            Authors
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateBook(bookCopy.id, bookCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteBook(book.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/books/${bookCopy.id}`}>
                            {bookCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/books/${bookCopy.id}`}>
                            {bookCopy.genre}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/books/${bookCopy.id}/authors`}>
                            Authors
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineBookEditor;