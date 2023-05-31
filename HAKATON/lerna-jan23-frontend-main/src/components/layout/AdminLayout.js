import { Outlet } from "react-router";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout() {
  return (
    <main>
      <ToastContainer />
      <AdminSidebar></AdminSidebar>
      <div className="page-content">
        <AdminNavbar></AdminNavbar>
        <div className="page-content-wrapper p-xxl-4">
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  );
}
