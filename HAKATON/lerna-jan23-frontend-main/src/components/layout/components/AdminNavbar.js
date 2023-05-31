import LanguageSwitcher from "./LanguageSwitcher";
import MyProfileNavbar from "./MyProfileNavbar";
import Notifications from "./Notifications";
import ThemeSwitcher from "./ThemeSwitcher";
import Background from "../../../assets/images/ShellControlLogo-removebg-preview.png";
export default function AdminNavbar() {
  return (
    <nav className="navbar top-bar navbar-light py-0 py-xl-3">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center d-xl-none">
            <a className="navbar-brand" href="index.html">
              <img className="navbar-brand-item h-40px" src={Background} style={{ width: "200px", height: "200px" }} alt="" />
            </a>
          </div>
          <div className="navbar-expand-xl sidebar-offcanvas-menu">
            <button
              className="navbar-toggler me-auto p-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-auto-close="outside"
            >
              <i className="bi bi-list text-primary fa-fw" data-bs-target="#offcanvasMenu"></i>
            </button>
          </div>
          <div className="navbar-expand-lg ms-auto ms-xl-0">
            <button
              className="navbar-toggler ms-auto p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTopContent"
              aria-controls="navbarTopContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-search"></i>
            </button>

            <div className="collapse navbar-collapse w-100 z-index-1" id="navbarTopContent">
              <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input className="form-control bg-light pe-5" type="search" placeholder="Search" aria-label="Search" />
                    <button className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                      <i className="fas fa-search fs-6 text-primary"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <LanguageSwitcher></LanguageSwitcher>
            <ThemeSwitcher></ThemeSwitcher>
            <Notifications></Notifications>
            <MyProfileNavbar></MyProfileNavbar>
          </ul>
        </div>
      </div>
    </nav>
  );
}
