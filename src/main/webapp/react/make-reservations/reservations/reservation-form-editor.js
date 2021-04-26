import reservationService from "./reservation-service"
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
    const findUser = (id) =>
        reservationService.findUser(id)
            .then(() => history.goBack())

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