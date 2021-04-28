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

    let allBooks = [];
    bookService.findAllBooks().then((allBs) => allBs.map(book => {
        console.log(book);
        allBooks.push(book);
    }));

    let allUsers = [];
    userService.findAllUsers().then((allUs) => allUs.map(user => {
        console.log(user);
        allUsers.push(user);
    }));


    return (
        <div>
            <h2>Reservation Editor</h2>

            <label>User</label>
            <input
                onChange={(e) =>
                    setReservation(reservation =>
                        ({...reservation, user: e.target.value}))}
                value={reservation.user}/><br/>
            <label>Book</label>
            <select value={reservation.book} onChange={e => setReservation(res => ({...res, book: e.target.value}))}>
                {
                    allBooks.map(book => <option value={book.title} key={book}>book.title</option>)
                }
            </select>
            <input
                            onChange={(e) =>
                                setReservation(reservation =>
                                    ({...reservation, book: e.target.value}))}
                            value={reservation.book}/><br/>

            <button className="btn btn-warning"
                onClick={() => {
                history.goBack()}}>
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