import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

// inventory:
import ManufacturersList from "./inventory/ManufacturersList";
import VehiclemodelsList from "./inventory/VehiclemodelsList";
import AutomobilesList from "./inventory/AutomobilesList";

// sales:
import SalesPersonForm from "./sales/SalesPersonForm";
import CustomerForm from "./sales/CustomerForm";
import SalesList from "./sales/SalesList";
import SalesHistory from "./sales/SalesPersonHistory";

// services:
import TechnicianForm from "./services/TechnicianForm";
import AppointmentForm from "./services/AppointentForm";
import AppointmentsList from "./services/AppointmentsList";
import ServiceHistory from "./services/ServicesHistory";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* INVENTORY: */}
          <Route path="/manufacturers/list" element={<ManufacturersList />} />
          <Route path="/vehiclemodels/list" element={<VehiclemodelsList />} />
          <Route path="/automobiles/list" element={<AutomobilesList />} />

          {/* SALES: */}
          <Route path="salespersons/new/" element={<SalesPersonForm />} />
          <Route path="customers/new/" element={<CustomerForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="salespersons/" element={<SalesHistory />} />

          {/* SERVICES:  */}
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/appointments/list" element={<AppointmentsList />} />
          <Route path="/appointments/history" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
