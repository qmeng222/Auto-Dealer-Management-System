import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

// inventory:

// sales:
import SalesPersonForm from "./sales/SalesPersonForm";
import CustomerForm from "./sales/CustomerForm";

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
          {/* SALES: */}
          <Route path="salespersons/new/" element={<SalesPersonForm />} />
          <Route path="customers/new/" element={<CustomerForm />} />

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
