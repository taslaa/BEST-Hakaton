import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function ClientLayout() {

  const backgroundImage = 'https://thumbs.dreamstime.com/b/smart-home-icons-set-white-background-118704443.jpg';

  return (
    <>
      <Header></Header>
      <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%"}}>
        <section>
          <div className="container">
            <Outlet></Outlet>
          </div>
        </section>
      </main>
      <Footer></Footer>

      <div className="back-top"></div>

      <div className="navbar navbar-mobile">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">
              <i className="bi bi-house-door fa-fw"></i>
              <span className="mb-0 nav-text">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="account-bookings.html">
              <i className="bi bi-briefcase fa-fw"></i>
              <span className="mb-0 nav-text">My Trips</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="offer-detail.html">
              <i className="bi bi-percent fa-fw"></i>
              <span className="mb-0 nav-text">Offer</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="account-profile.html">
              <i className="bi bi-person-circle fa-fw"></i>
              <span className="mb-0 nav-text">Account</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
