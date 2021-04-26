// TODO: declare URL where server listens for HTTP requests
const RESERVATIONS_URL = "http://localhost:8080/api/reservations"


export const findAllReservations = () => fetch(RESERVATIONS_URL).then(response => response.json())


export const findReservationById = (id) => fetch(`${RESERVATIONS_URL}/${id}`).then(response => response.json())


export const deleteReservation = (id) => fetch(`${RESERVATIONS_URL}/${id}`, { method: "DELETE" })



export const createReservation = (reservation) => fetch(RESERVATIONS_URL, {
                                        method: 'POST',
                                        body: JSON.stringify(reservation),
                                        headers: {'content-type': 'application/json'}
                                    })
                                        .then(response => response.json())

export const findUser = (id) => fetch(`${RESERVATIONS_URL}/${id}`).then(response => response.json())

export const updateReservation = (id, reservation) => fetch(`${RESERVATIONS_URL}/${id}`, {
                                                method: 'PUT',
                                                body: JSON.stringify(reservation),
                                                headers: {'content-type': 'application/json'}
                                            })
                                            .then(response => response.json())

export default {
  findAllReservations,
  findReservationById,
  deleteReservation,
  createReservation,
  updateReservation,
  findUser
}
