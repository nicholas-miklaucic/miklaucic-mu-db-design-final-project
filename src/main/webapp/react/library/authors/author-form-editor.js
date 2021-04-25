import authorService from "./author-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const AuthorFormEditor = () => {
    const {id} = useParams()
    const history = useHistory()
    const [author, setAuthor] = useState({})
    useEffect(() => {
      if (id !== "new") {
        findAuthorById(id)
      }
    }, []);

    const findAuthorById = (id) =>
        authorService.findAuthorById(id).then(author => setAuthor(author))
    const deleteAuthor = (id) =>
        authorService.deleteAuthor(id)
            .then(() => history.goBack())
    const createAuthor = (author) =>
        authorService.createAuthor(author)
            .then(() => history.goBack())
    const updateAuthor = (id, newAuthor) =>
        authorService.updateAuthor(id, newAuthor)
            .then(() => history.goBack())

    return (
        <div>
            <h2>Author Editor</h2>
            <label>Id</label>
            <input value={author.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setAuthor(author =>
                        ({...author, firstName: e.target.value}))}
                value={author.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setAuthor(author =>
                        ({...author, lastName: e.target.value}))}
                value={author.lastName}/><br/>

            <button className="btn btn-warning"
                onClick={() => {
                history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteAuthor(author.id)}>
                Delete
            </button>
            <button className="btn btn-primary"
                onClick={() => updateAuthor(author.id, author)}>
                Save
            </button>
            <button className="btn btn-success"
                onClick={() => createAuthor(author)}>
                Create
            </button>
        </div>
    )
}

export default AuthorFormEditor