import { Link } from 'react-router-dom'
import { BACK_TO_HOME_PAGE } from '../../constants'
function Order({ title = "", color = "#03989e", url = "#", logo }) {
    return (
        <div className="col col-md-6 px-0" style={{
            backgroundColor: color,
            height: "100%",
            fontSize: " 1.5rem",
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"

        }}>
            <Link to={url} style={{ textDecoration: "none" }} title={title}>
                <div className="order-name text-capitalize d-flex h-100 align-items-center">
                    <p className='text-white text-center w-100'>{title === BACK_TO_HOME_PAGE ? "" : title}</p>
                </div>
            </Link>
        </div>

    )
}

export default Order