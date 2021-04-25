import AuthorList from "./authors/author-list";
import BookList from "./books/book-list";
import AuthorEditorForm from "./authors/author-form-editor";
import BookEditorForm from "./sections/book-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/authors", "/"]} exact={true}>
                    <AuthorList/>
                </Route>
                <Route path="/authors/:id" exact={true}>
                    <AuthorEditorForm/>
                </Route>
                <Route path={["/books", "/"]} exact={true}>
                    <BookList/>
                </Route>
                <Route path="/books/:bookId" exact={true}>
                    <BookEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
