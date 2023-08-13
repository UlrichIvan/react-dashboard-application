import { useParams, Navigate } from 'react-router-dom'
import { VALID_PARAMS } from '../../constants'
import NotFound from '../notfound/NotFound'

function OrderSearchAction() {

    const params = useParams()

    if (VALID_PARAMS.includes(params?.action)) {
        return <Navigate to={`/orders/${params?.action}`} replace={true} state={{ target: params?.action }} />
    } else {
        return <NotFound />
    }
}

export default OrderSearchAction