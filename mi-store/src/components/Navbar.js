import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ logo }) => {
  return (
    <div className="nav text-bg-primary ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-2 text-start d-flex align-items-center">
            <Link to="/brand" className="logo  text-white">
              <img
                className="brandlogo"
                src={logo}
                id="imageLogo p-2"
                alt="logoImage"
              />
            </Link>
          </div>

          <div className="col-lg-8 d-flex align-items-center ">
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Mi Phones
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Redmi Phones
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Laptop
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              LifeStyles
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Home
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Audio
            </Link>
            <Link
              className="navlinks text-decoration-none text-white p-2"
              to="#"
            >
              {" "}
              Accessories
            </Link>
          </div>
          <div className="col-lg-2 text-end p-2 d-flex align-items-center">
            <input
              type="text"
              className="searchbox"
              name=""
              id=""
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
