import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LogOut' });
        sessionStorage.clear();
        navigate("/");
    };

    const state = useSelector((state) => state);
    const isadmin = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Admin";
    const isuser = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "User";

    // Style for active links
    const linkClasses = ({ isActive }) =>
        isActive
            ? "nav-link active underline text-warning"
            : "nav-link text-white";

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-gradient text-black fw-bold opacity-75 border-bottom border-white" style={{ background: 'SlateGrey' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" to="/">ParkNGo</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={linkClasses} to="/">Home</NavLink>
                            </li>

                            {isadmin && (
                                <>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/users">User List</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/AddPark">Add Parking</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/Address">Add Parking Address</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/ParkTime">Add Parking Time</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/bookings">Bookings</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/reports">Report</NavLink>
                                    </li>
                                </>
                            )}

                            {isuser && (
                                <li className="nav-item">
                                    <NavLink className={linkClasses} to="/mybookings">My Bookings</NavLink>
                                </li>
                            )}

                            {!state.loggedin.IsLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/cregister">Register</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/profile">Hi! {state.loggedin.Username}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={linkClasses} to="/login" onClick={logout}>Logout</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

