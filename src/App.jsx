import { Route, Routes } from "react-router";
import AdminLayout from "./components/layouts/admin-layout";
import AppLayout from "./components/layouts/app-layout";
import Home from "./pages/home";
import BookOverview from "./pages/book-overview";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<BookOverview />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </>
  )
}

