import { Route, Routes } from "react-router-dom";
import { NavLayout } from "./nav";

export function CRM() {
    return (
      <>
        <NavLayout />
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/leads" element={<h1>Leads</h1>} />
        </Routes>
      </>  
    )
}