import Order from '../order/Order'
import logo from "./images/logo.png"
import { URL_HOME_PAGE, BACK_TO_HOME_PAGE } from '../../constants'
function OrderAction({ currentoders = [], len = 1 }) {
    return (
        <>
            <div className="orders-actions w-100" style={{ height: (100 / len) + "%" }}>
                <div className="row h-100">
                    {currentoders.length === 2 && (<>
                        {currentoders[0].title === BACK_TO_HOME_PAGE ? <Order title={BACK_TO_HOME_PAGE} url={URL_HOME_PAGE} logo={logo} />
                            : <Order title={currentoders[0].title} color={currentoders[0].color} url={currentoders[0].url} />}
                        {currentoders[1].title === BACK_TO_HOME_PAGE ? <Order title={BACK_TO_HOME_PAGE} url={URL_HOME_PAGE} logo={logo} />
                            : <Order title={currentoders[1].title} color={currentoders[1].color} url={currentoders[1].url} />}
                    </>)}
                    {currentoders.length === 1 && (<>
                        <Order title={BACK_TO_HOME_PAGE} url={URL_HOME_PAGE} logo={logo} />
                    </>)}
                </div>
            </div>
        </>
    )
}

export default OrderAction 