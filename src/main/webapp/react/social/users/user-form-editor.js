import userService from "./user-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const {id} = useParams()
    const history = useHistory()
    const [user, setUser] = useState({})
    useEffect(() => {
      if (id !== "new") {
        findUserById(id)
      }
    }, []);

    const findUserById = (id) =>
        userService.findUserById(id).then(user => setUser(user))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack())
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    console.log("ID");
    console.log(id);

    return (
        <div>
            <h2>User Editor</h2>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, email: e.target.value}))}
                value={user.email}/><br/>
            <label>DOB</label>
                        <input
                            onChange={(e) =>
                                setUser(user =>
                                    ({...user, dob: e.target.value}))}
                            value={user.dob}/><br/>
            <button className="btn btn-warning"
                onClick={() => {
                history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button className="btn btn-primary"
                onClick={() => updateUser(user.id, user)}>
                Save
            </button>
            <button className="btn btn-success"
                onClick={() => createUser(user)}>
                Create
            </button>
            <Link className="btn"
                  to={"/reservations/from-user/" + id}>
                Reservations
            </Link>
        </div>
    )
}

export default UserFormEditor;