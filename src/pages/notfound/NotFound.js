import React from "react";
import { Link } from "react-router-dom";
import { URL_HOME_PAGE } from "../../constants";
import notfound from "./notfound.png";

const NotFound = () => {
  return (
    <div
      style={{ backgroundColor: "#fff" }}
      className="text-capitalize text-black w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center"
    >
      <img src={notfound} width={500} alt="page not found" />
      <div className="position-relative" style={{ top: "-3rem" }}>
        <p>
          please Go to{" "}
          <Link
            className="font-weight-bold"
            data-testid="home-page"
            to={URL_HOME_PAGE}
          >
            home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
