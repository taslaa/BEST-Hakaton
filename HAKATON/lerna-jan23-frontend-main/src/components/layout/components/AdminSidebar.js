import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import AuthService from "../../../data/services/AuthService";
import Background from "../../../assets/images/ShellControlLogo-removebg-preview.png";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const signOut = () => {
    AuthService.signOut();
    navigate("/sign-in");
  };

  return (
    <nav className="navbar sidebar navbar-expand-xl navbar-light">
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="index.html">
          <img className="light-mode-item navbar-brand-item" src={Background} style={{ width: "200px", height: "auto" }} alt="logo" />
        </a>
      </div>

      <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabndex="-1" id="offcanvasSidebar">
        <div className="offcanvas-body sidebar-content d-flex flex-column pt-4">
          <ul className="navbar-nav flex-column" id="navbar-sidebar">
            <li className="nav-item">
              <a href="#" className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} onClick={() => navigate("/admin")}>
                {t("DASHBOARD")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapsebooking" role="button" aria-expanded="false" aria-controls="collapsebooking">
                Settings
              </a>
              <ul className="nav collapse flex-column" id="collapsebooking" data-bs-parent="#navbar-sidebar">
                <li className="nav-item">
                <a href="#" className={`nav-link ${location.pathname === "/deviceTypes" ? "active" : ""}`} onClick={() => navigate("/admin/deviceTypes")}>
                Device Types
              </a>
                </li>
                <li className="nav-item">
                <a href="#" className={`nav-link ${location.pathname === "/users" ? "active" : ""}`} onClick={() => navigate("/admin/users")}>
                Users
              </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
            <a className="h6 fw-light mb-0 text-body" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out" onClick={signOut}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>
            <a className="h6 mb-0 text-body" href="admin-settings.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings">
              <i className="bi bi-gear-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
