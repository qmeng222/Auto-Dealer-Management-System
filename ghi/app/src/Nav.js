import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/*<li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/salespersons/new">New Salesperson</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/customers/new">New Customer</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="sales/">List of Sales</NavLink>
            </li>
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li> */}

            <div className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Inventory
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/manufacturers/list"
                  exact="true"
                >
                  List anufacturers
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/manufacturers/create"
                  exact="true"
                >
                  Create manufacturer
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/models/list"
                >
                  List vehiclemodels
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/models/create"
                >
                  Create vehiclemodel
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/inventory/list"
                >
                  List inventory
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/inventory/create"
                >
                  Create inventory
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/technicians/create"
                >
                  Create technician
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/list"
                >
                  List appointments
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/create"
                >
                  Create appointment
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/history"
                >
                  Service history
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
