const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineAuthorEditor = ({author, deleteAuthor, updateAuthor}) => {
    const [authorCopy, setAuthorCopy] = useState(author)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={authorCopy.firstName}
                            onChange={(e)=>setAuthorCopy(authorCopy => ({...authorCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={authorCopy.lastName}
                            onChange={(e)=>setAuthorCopy(authorCopy => ({...authorCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/authors/${authorCopy.id}/books`}>
                            Books
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateAuthor(authorCopy.id, authorCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteAuthor(author.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/authors/${authorCopy.id}`}>
                            {authorCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/authors/${authorCopy.id}`}>
                            {authorCopy.lastName}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/authors/${authorCopy.id}/books`}>
                            Books
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

export default InlineAuthorEditor;