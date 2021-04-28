import reservationService from "./reservation-service"
const { useState, useEffect } = React;
const { Link, useParams, useHistory } = window.ReactRouterDOM;
const ReservationListBook = () => {
    const {bookId} = useParams();
    const [reservations, setReservations] = useState([])
    const history = useHistory()
    useEffect(() => {
        findAllReservations()
    }, [])
    const findAllReservations = () =>
        reservationService.findAllReservationsByBook(bookId)
            .then(reservations => setReservations(reservations))
    return(
        <div>
            <h2>Reservation List</h2>
            <button className="btn btn-primary"
                    onClick = {() => history.push("/reservations/new")}>
                Add Reservation
            </button>
            <ul>
                {
                    reservations.map(reservation =>
                        <li key={reservation.id}>
                            <Link to={`/reservations/${reservation.id}`}>
                                {reservation.dateReserved},
                                {reservation.user.firstName},
                                {reservation.user.lastName},
                                {reservation.user.id},
                                {reservation.book.id}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ReservationListBook;