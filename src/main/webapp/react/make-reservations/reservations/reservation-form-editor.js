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

    return (
        <div>
            <h2>Reservation Editor</h2>

            <label>User</label>
            <select value={JSON.stringify(reservation.user)}
                    onChange={e => setReservation(res => ({...res, user: JSON.parse(e.target.value)}))}>
                {
                    userService.allUsers.map(user => <option value={JSON.stringify(user)}
                                                             key={user.id}>{user.firstName}</option>)
                }
            </select>
            <label>Book</label>
            <select value={JSON.stringify(reservation.book)}
                    onChange={e => setReservation(res => ({...res, book: JSON.parse(e.target.value)}))}>
                {
                    bookService.allBooks.map(book => <option value={JSON.stringify(book)}
                                                             key={book.id}>{book.title}</option>)
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

export default ReservationFormEditor