import { cloneElement } from "react"
import { Navigate, useLocation, useParams } from "react-router-dom"
import { VALID_PARAMS, URL_SMS_ORDERS_PAGE, URL_USER_ACTION, QUERY_ORDERS_BEING_PROCESSED } from "../constants"
import NotFound from "../pages/notfound/NotFound"

function OrderProvider({ children }) {
    let location = useLocation()
    let params = useParams()
    if (location.pathname === URL_SMS_ORDERS_PAGE) {
        return <Navigate to={`${URL_USER_ACTION.replace(/:action/ig, QUERY_ORDERS_BEING_PROCESSED)}`} replace={true} />
    }
    else if (VALID_PARAMS.includes(params?.action)) {
        return <> {cloneElement(children, { key_id: params?.action })} </>
    } else {
        return <NotFound />
    }
}

export default OrderProvider