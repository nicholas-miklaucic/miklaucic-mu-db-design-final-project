// TODO: declare URL where server listens for HTTP requests
const RESERVATIONS_URL = "http://localhost:8080/api/reservations"


export const findAllReservations = () => fetch(RESERVATIONS_URL).then(response => response.json())


export const findReservationById = (id) => fetch(`${RESERVATIONS_URL}/${id}`).then(response => response.json())

export const findAllReservationsByUser = (id) => fetch(`${RESERVATIONS_URL}/from-user/${id}`).then(response => response.json());
export const findAllReservationsByBook = (id) => fetch(`${RESERVATIONS_URL}/from-book/${id}`).then(response => response.json());


export const deleteReservation = (id) => fetch(`${RESERVATIONS_URL}/${id}`, { method: "DELETE" })



export const createReservation = (reservation) => fetch(RESERVATIONS_URL, {
                                        method: 'POST',
                                        body: JSON.stringify(reservation),
                                        headers: {'content-type': 'application/json'}
                                    })
                                        .then(response => response.json())

export const findUser = (id) => fetch(`${RESERVATIONS_URL}/${id}`).then(response => response.json())


function stringify(res) {
    let newRes = JSON.parse(JSON.stringify(res));
    if (typeof(newRes.book) !== "undefined") {
        newRes.book.genreType = newRes.book.genreType.id;
    }
    return JSON.stringify(newRes);
}
export const updateReservation = (id, reservation) => fetch(`${RESERVATIONS_URL}/${id}`, {
                                                method: 'PUT',
                                                body: stringify(reservation),
                                                headers: {'content-type': 'application/json'}
                                            })
                                            .then(response => response.json())

export default {
  findAllReservations,
  findReservationById,
    findAllReservationsByBook,
    findAllReservationsByUser,
  deleteReservation,
  createReservation,
  updateReservation,
  findUser
}
