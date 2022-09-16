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
                  to="manufacturers/list"
                  exact="true"
                >
                  List manufacturers
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="manufacturers/create"
                  exact="true"
                >
                  Create manufacturer
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="vehiclemodels/list"
                >
                  List vehiclemodels
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="vehiclemodels/create"
                >
                  Create vehiclemodel
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/list"
                >
                  List automobiles
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/create"
                >
                  Create automobile
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
                  to="sales/"
                  exact="true"
                >
                  List all sales
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="salespersons"
                >
                  List a salesperson's sales
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="salespersons/create"
                >
                  Create salesperson
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="customers/create"
                >
                  Create customer
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="salesrecords/create"
                >
                  Create a sale
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
