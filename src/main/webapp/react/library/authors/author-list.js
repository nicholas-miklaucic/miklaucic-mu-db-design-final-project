
import authorService from "./author-service"
const { useState, useEffect } = React;
const { Link, useHistory } = window.ReactRouterDOM;
const AuthorList = () => {
    const [authors, setAuthors] = useState([])
    const history = useHistory()
    useEffect(() => {
        findAllAuthors()
    }, [])
    const findAllAuthors = () =>
        authorService.findAllAuthors()
            .then(authors => setAuthors(authors))
    return(
        <div>
            <h2>Author List</h2>
            <button className="btn btn-primary"
              onClick = {() => history.push("/authors/new")}>
                Add Author
            </button>
            <ul>
            {
               authors.map(author =>
                  <li key={author.id}>
                            <Link to={`/authors/${author.id}`}>
                      {author.firstName},
                      {author.lastName}
                            </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default AuthorList;