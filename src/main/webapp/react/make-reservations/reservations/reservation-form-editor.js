import reservationService from "./reservation-service"
import bookService from "../../library/books/book-service"
import userService from "../../social/users/user-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const ReservationFormEditor = () => {
    const {id} = useParams()
    const history = useHistory()
    const [reservation, setReservation] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findReservationById(id)
        }
    }, []);

    const findReservationById = (id) =>
        reservationService.findReservationById(id).then(reservation => setReservation(reservation))
    const deleteReservation = (id) =>
        reservationService.deleteReservation(id)
            .then(() => history.goBack())
    const createReservation = (reservation) =>
        reservationService.createReservation(book)
            .then(() => history.goBack())
    const updateReservation = (id, newReservation) =>
        reservationService.updateReservation(id, newReservation)
            .then(() => history.goBack())

    if (typeof(reservation.user) == "undefined") {
        return "";
    } else {
        console.log(reservation);
        return (
            <div>
                <h2>Reservation Editor</h2>

                <label>User</label>
                <select value={reservation.user.id}
                        onChange={e => setReservation(res => ({...res, user: e.target.value}))}>
                    {
                        userService.allUsers.map(user => <option value={user.id} key={user.id}>{user.firstName}</option>)
                    }
                </select>
                <label>Book</label>
                <select value={reservation.book.id}
                        onChange={e => setReservation(res => ({...res, book: e.target.value}))}>
                    {
                        bookService.allBooks.map(book => <option value={book.id} key={book.id}>{book.title}</option>)
                    }
                </select>

                <button className="btn btn-warning"
                        onClick={() => {
                            history.goBack()
                        }}>
                    Cancel
                </button>
                <button className="btn btn-danger"
                        onClick={() => deleteReservation(reservation.id)}>
                    Delete
                </button>
                <button className="btn btn-primary"
                        onClick={() => updateReservation(reservation.id, reservation)}>
                    Save
                </button>
                <button className="btn btn-success"
                        onClick={() => createReservation(reservation)}>
                    Create
                </button>

            </div>
        )
    }
}

export default ReservationFormEditor