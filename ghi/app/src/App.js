import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import SalesPersonForm from './sales/SalesPersonForm';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';
import SalesHistory from './sales/SalesPersonHistory';

import AutomobileForm from './inventory/AutomobileForm';
import ManufacturerForm from './inventory/ManufacturerForm';
import VehicleForm from './inventory/VehicleForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="inventory">
            <Route path="automobiles/" element={<AutomobileForm />} />
            <Route path="manufacturers/" element={<ManufacturerForm />} />
            <Route path="models/" element={<VehicleForm />} />
          </Route>
          <Route path="/" element={<MainPage />} />
          <Route path="salespersons/new/" element={<SalesPersonForm />} />
          <Route path="customers/new/" element={<CustomerForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="salespersons/" element={<SalesHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
