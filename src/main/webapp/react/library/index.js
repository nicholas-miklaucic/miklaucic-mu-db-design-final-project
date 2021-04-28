import AuthorList from "./authors/author-list";
import BookList from "./books/book-list";
import AuthorEditorForm from "./authors/author-form-editor";
import BookEditorForm from "./books/book-form-editor";
import UserList from "../social/users/user-list";
import UserFormEditor from "../social/users/user-form-editor";
import ReservationList from "../make-reservations/reservations/reservation-list";
import ReservationFormEditor from "../make-reservations/reservations/reservation-form-editor";
import ReservationListUser from "../make-reservations/reservations/reservation-list-user";
import ReservationListBook from "../make-reservations/reservations/reservation-list-book";

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
                <Route path="/books/:id" exact={true}>
                    <BookEditorForm/>
                </Route>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path={["/reservations", "/"]} exact={true}>
                    <ReservationList/>
                </Route>
                <Route path="/reservations/:id" exact={true}>
                    <ReservationFormEditor/>
                </Route>
                <Route path="/reservations/from-user/:userId" exact={true}>
                    <ReservationListUser/>
                </Route>
                <Route path="/reservations/from-book/:bookId" exact={true}>
                    <ReservationListBook/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
