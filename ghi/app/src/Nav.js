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
                  List manufacturers
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
                  to="/vehiclemodels/list"
                >
                  List Vehiclemodels
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/vehiclemodels/create"
                >
                  Create Vehiclemodel
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
              </div>
            </div>

            {/* Sales dropdown: */}
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
                Sales
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/manufacturers/list"
                  exact="true"
                >
                  Link 1
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/vehiclemodels/list"
                >
                  Link 2
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/automobiles/list"
                >
                  Link 3
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/automobiles/list"
                >
                  Link 4
                </NavLink>
              </div>
            </div>

            {/* Services dropdown: */}
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
                  Create Technician
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/list"
                >
                  List Appointments
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/create"
                >
                  Create Appointment
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/history"
                >
                  Services history
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
