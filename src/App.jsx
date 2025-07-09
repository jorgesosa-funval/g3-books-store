import { Route, Routes } from "react-router";
import AdminLayout from "./components/layouts/admin-layout";
import AppLayout from "./components/layouts/app-layout";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </>
  )
}

