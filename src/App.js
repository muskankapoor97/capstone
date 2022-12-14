import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Parking from "./components/Parking/Parking";

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/parking" element={<Parking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
