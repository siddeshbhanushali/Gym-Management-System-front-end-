import { Link } from "react-router-dom";
import logo from "../images/logo2.jpg";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div>
      
      <nav class="navbar  navbar-expand-xl custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="55"
            height="40"
            className="d-inline-block align-top pe-4 "
            alt=""
          />
          <Link to="/" class="navbar-brand">
            <i>
              <b className="text-color-1">The Dream Gym</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color-1">About Us</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color-1">Contact Us</b>
                </Link>
              </li>
<li class="nav-item">
                <Link
                  to="customer/Shopping"
                  class="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color-1">Shopping</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/bmi/calculator"
                  class="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color-1">BMI Calculator</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to="/package/all"
                  class="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color-1">All Package</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to="/trainer/all"
                  class="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color-1">Trainers</b>
                </Link>
              </li>
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5"></ul>
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
