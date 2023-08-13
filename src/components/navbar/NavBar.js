import React from 'react'
import "./navbar.css"
import { APP_NAME, URL_HOME_PAGE, BUGGER_TITLE } from "../../constants"
import { Link } from "react-router-dom"
import { getLogoByOrders } from '../../helpers'
function NavBar({ action = '', setToggle = () => { } }) {

    return (
        <>
            <div className="header mb-0 w-100 px-0 d-flex flex-column">
                {/* navbar */}
                <div className="links d-flex justify-content-between align-items-center px-4">
                    <div className="text-capitalize text-white d-flex align-items-center">
                        <div className="bugger" title={BUGGER_TITLE} onClick={() => setToggle(false)}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="app ml-2 text-white font-weight-bold">
                            <Link to={URL_HOME_PAGE} className="text-white" replace={true} >{APP_NAME}</Link>
                        </div>
                    </div>
                    <ul className="items mb-0 py-2">
                        <li className="item link-item d-flex align-items-center  text-uppercase font-weight-bold  mx-2 p-1">
                            <img src={getLogoByOrders(action)} width={20} alt="order logo" />
                            <div className='text-white ml-1'>{`commandes ${action}`}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar