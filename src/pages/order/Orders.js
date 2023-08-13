import NavBar from '../../components/navbar/NavBar'
import { Outlet, useParams } from "react-router-dom"
import Overlay from "../../components/overlay/Overlay"
import { ORDERS_TYPES } from "../../constants"
import { useState } from 'react'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function Oders() {
    const [toggleSideBar, setToggleSideBar] = useState(true)
    const [isload, setIsload] = useState(false)
    const params = useParams()

    return (
        <>
            <div className='orders p-0 container-fluid'>
                <Overlay action={params?.action.replace(/-/ig, ' ')} toggle={toggleSideBar} setToggle={setToggleSideBar} orders={ORDERS_TYPES.map((orderName => (orderName.replace(/-/ig, " "))))} />
                <NavBar action={params?.action.replace(/-/ig, ' ')} setToggle={setToggleSideBar} />
                <Outlet context={{ toggle: toggleSideBar, isload, setIsload }} />
            </div>
            <ToastContainer />
        </>
    )
}

export default Oders