import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AuthService from "../../../data/services/AuthService";
import MyProfileNavbar from "./MyProfileNavbar";
import Notifications from "./Notifications";
import ShellControlLogo from "../../../assets/images/ShellControlLogo.png";
export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const signOut = () => {
    AuthService.signOut();
    navigate("/sign-in");
  };

  return (
    <header className="navbar-light header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand" href="">
            <img className="light-mode-item navbar-brand-item" style={{ width: "200px", height: "auto" }} src={ShellControlLogo} alt="logo" onClick={() => navigate(`/home`)} />
          </a>

          <button
            className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="d-none d-sm-inline-block small">Menu</span>
          </button>

          <button
            className="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCategoryCollapse"
            aria-controls="navbarCategoryCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-grid-3x3-gap-fill fa-fw"></i>
            <span className="d-none d-sm-inline-block small">Category</span>
          </button>

          
          <div className="navbar-collapse collapse" id="navbarCategoryCollapse">
            <ul className="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0">
              
              <li className="nav-item">
                {" "}
                <a className="nav-link"  onClick={() => navigate("/devices")}>
                  <i className="fa-solid fa-computer"></i> Devices
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" onClick={() => navigate("/homes")}>
                  <i className="fa-solid fa-home"></i> Home
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" onClick={() => navigate("/actions")}>
                <i class="fas fa-bolt"></i> Actions
                </a>
              </li>
            </ul>
          </div>

          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <Notifications></Notifications>
            <MyProfileNavbar></MyProfileNavbar>
          </ul>
        </div>
      </nav>
    </header>
  );
}
