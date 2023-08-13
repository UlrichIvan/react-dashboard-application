import React, { useCallback, useEffect, useState } from 'react'
import OrderAction from "../../components/orderaction/OrderAction"
import { HOME_PAGE_BACKGROUND_COLOR, MARKETING_ACTIONS } from "../../constants"
import { v4 } from "uuid"
import { getOdersByEven, getOdersByPeer } from "../../helpers"


function Marketing() {
    const [dataOders, setDataOders] = useState([])

    const generateOrders = useCallback((oders) => {

        try {
            // have peer orders
            if (oders.length > 0 && oders.length % 2 === 0) {
                return getOdersByPeer(oders)
            } else if (oders.length > 0 && oders.length % 2 !== 0) { // have even orders
                return getOdersByEven(oders)
            } else {
                return []
            }
        } catch (error) {
            console.log(error.message)
            return []
        }

    }, [])


    useEffect(() => {
        let od = generateOrders(MARKETING_ACTIONS)
        setDataOders([...od])
    }, [generateOrders])

    return (
        <div className='marketing' style={{
            position: "absolute",
            height: "100%",
            width: " 100%",
            overflowX: "hidden",
            backgroundColor: HOME_PAGE_BACKGROUND_COLOR
        }}>
            {dataOders.length > 0 && dataOders.map((ods) => (<OrderAction
                currentoders={ods}
                len={dataOders.length}
                key={v4()}
            />))}
        </div>
    )
}

export default Marketing