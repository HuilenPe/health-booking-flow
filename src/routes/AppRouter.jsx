import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard/Dashboard"
import DoctorSearch from "../pages/Booking/DoctorSearch"
import DateTime from "../pages/Booking/DateTime"
import Confirmation from "../pages/Booking/Confirmation"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/reservar" element={<DoctorSearch />} />

        <Route
          path="/reservar/horario/:doctorId"
          element={<DateTime />}
        />

        <Route
          path="/reservar/confirmacion"
          element={<Confirmation />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter