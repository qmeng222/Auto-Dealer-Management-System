import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

// inventory:
import ManufacturersList from "./inventory/ManufacturersList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import VehiclemodelsList from "./inventory/VehiclemodelsList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import AutomobilesList from "./inventory/AutomobilesList";
import AutomobileForm from "./inventory/AutomobileForm";

// sales:
import SalesPersonForm from "./sales/SalesPersonForm";
import CustomerForm from "./sales/CustomerForm";
import SalesRecordForm from "./sales/SalesRecordForm";
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
          <Route path="manufacturers/list" element={<ManufacturersList />} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} />
          <Route path="vehiclemodels/list" element={<VehiclemodelsList />} />
          <Route path="vehiclemodels/create" element={<VehicleModelForm />} />
          <Route path="automobiles/list" element={<AutomobilesList />} />
          <Route path="automobiles/create" element={<AutomobileForm />} />

          {/* SALES: */}
          <Route path="sales/" element={<SalesList />} />
          <Route path="salespersons/create" element={<SalesPersonForm />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="salespersons" element={<SalesHistory />} />
          <Route path="salesrecords/create" element={<SalesRecordForm />} />

          {/* SERVICES:  */}
          <Route path="technicians/create" element={<TechnicianForm />} />
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments/list" element={<AppointmentsList />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
