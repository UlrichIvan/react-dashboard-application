import "./css/home.css";
import logo from "../../images/png/logo.png";
import { Link } from "react-router-dom";
import { URL_SMS_ORDERS_PAGE, SMS_COMMAND, APP_NAME } from "../../constants";
function Home() {
  return (
    <div className="Home d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="home-container d-flex align-items-center flex-column ">
          {/* header */}
          <div className="header">
            <div className="col-12 col-sm-12">
              <h1 className="text-white text-uppercase text-center">
                {APP_NAME}
              </h1>
            </div>
          </div>
          {/* body */}
          <div className="body">
            <img src={logo} alt="sms-logo" />
            <div className="btn-actions">
              <Link to={URL_SMS_ORDERS_PAGE}>
                <div className="btn btn-primary btn-block p-4 mr-2 text-white text-uppercase">
                  {SMS_COMMAND}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
