import ShellControlLogo from "../../../assets/images/ShellControlLogo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-dark pt-5" style={{position: "relative", bottom: "0", width: "100%", height:"40%"}}>
  <div className="container d-flex flex-column justify-content-center align-items-center">
    <a href="index.html">
      <img className="h-40px" src={ShellControlLogo} alt="logo" />
    </a>
    <p className="my-3 text-muted text-center" style={{width:"70%"}}>Control your lights, thermostat, security system, and more all from the palm of your hand. With ShellControl your home is no longer just a place to live - it's a modern marvel.</p>

    <hr className="mt-4 mb-0" />
    <div className="row">
      <div className="container">
        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
          <div className="text-muted text-primary-hover">
            BEST Mostar Hackathon © 2023 - All rights reserved || Designed By: Čahura
          </div>
          <div className="nav mt-2 mt-lg-0">
            <ul className="list-inline text-primary-hover mx-auto mb-0">
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}