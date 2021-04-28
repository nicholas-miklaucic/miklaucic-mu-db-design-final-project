import ReservationList from "./reservations/reservation-list"
import ReservationEditorForm from "./reservations/reservation-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={"/reservations/:userId/:bookId"} exact={true}>
                    <ReservationList/>
                </Route>
                <Route path="/reservations/:id" exact={true}>
                    <ReservationEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
