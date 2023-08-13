import "./overlay.css"
import orderload from "../../images/png/bag.png"
import service from "../../images/png/service.png"
import phone from "../../images/png/phone.png"
import delivery from "../../images/png/delivery.png"
import { Link } from "react-router-dom"
import { QUERY_ORDERS_BEING_DELIVERY, QUERY_ORDERS_BEING_PROCESSED, QUERY_ORDERS_CLIENT_CANNOT_CALL, QUERY_ORDERS_DELIVERY, URL_USER_ACTION } from "../../constants"
function Overlay({ action = "", toggle = false, setToggle = () => { }, orders = [] }) {
    return (
        <>
            <div className={`overlay position-absolute w-100 ${toggle ? "d-none" : ""}`} style={{ backgroundColor: "#12121247", height: "100vh" }}>
                <div className="sidebar w-25 h-100">
                    <div className="sidebar-header d-flex justify-content-between align-items-center px-2" style={{ backgroundColor: "#123", maxHeight: "32px", height: "32px" }}>
                        <div className="text-white pl-0 pr-1 text-capitalize">
                            <i className="fa fa-cog" aria-hidden="true"></i> options
                        </div>
                        <button type="button" className="close pb-2 text-white" aria-label="Close" title='close' onClick={() => setToggle(true)}>
                            <span aria-hidden="true" className='text-white'>&times;</span>
                        </button>
                    </div>
                    <div className="sidebar-body">
                        <h5 className='px-2 text-capitalize text-white mt-2'><i className="fa fa-database" aria-hidden="true"></i> commandes</h5>
                        <ul className="list-group text-capitalize">
                            <Link to={`${URL_USER_ACTION.replace(/:action/ig, QUERY_ORDERS_BEING_PROCESSED)}`}

                                className={`text-muted font-weight-bold order-type d-inline-block ${orders[0] === action ? "order-active" : ""}`}
                            >
                                <li className="list-group-item d-flex align-items-center">
                                    <img src={orderload} alt="loading..." width={20} />
                                    <div className="command ml-1">{orders[0]}</div>
                                </li>
                            </Link>
                            <Link to={`${URL_USER_ACTION.replace(/:action/ig, QUERY_ORDERS_DELIVERY)}`}
                                className={`text-muted font-weight-bold order-type d-inline-block ${orders[1] === action ? "order-active" : ""}`}
                            >
                                <li className="list-group-item d-flex align-items-center">
                                    <img src={service} alt="service..." width={20} />
                                    <div className="command ml-1">{orders[1]}</div>
                                </li>
                            </Link>

                            <Link to={`${URL_USER_ACTION.replace(/:action/ig, QUERY_ORDERS_CLIENT_CANNOT_CALL)}`}
                                className={`text-muted font-weight-bold order-type d-inline-block ${orders[2] === action ? "order-active" : ""}`}
                            >
                                <li className="list-group-item d-flex align-items-center">
                                    <img src={phone} alt="phone..." width={20} />
                                    <div className="command ml-1">{orders[2]}</div>
                                </li>
                            </Link>
                            <Link to={`${URL_USER_ACTION.replace(/:action/ig, QUERY_ORDERS_BEING_DELIVERY)}`}
                                className={`text-muted font-weight-bold order-type d-inline-block ${orders[3] === action ? "order-active" : ""}`}
                            >
                                <li className="list-group-item d-flex align-items-center">
                                    <img src={delivery} alt="delivery..." width={20} />
                                    <div className="command ml-1">{orders[3]}</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overlay