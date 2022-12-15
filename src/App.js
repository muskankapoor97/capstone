import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Updates from "./components/Updates/Updates";
import Parking from "./components/Parking/Parking";
import Elevator from "./components/Elevator/Elevator";
import Laundry from "./components/Laundry/Laundry";
import LaundryStatus from "./components/LaundryStatus/LaundryStatus";

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/elevator" element={<Elevator />} />
          <Route path="/laundry" element={<LaundryStatus />} />
          <Route path="/laundry/:id" element={<Laundry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
