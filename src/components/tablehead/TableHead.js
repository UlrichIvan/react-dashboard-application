import React from 'react'
import "./tablehead.css"
function TableHead() {
    return (
        <>
            <tr>
                <th scope="col">lastname</th>
                <th scope="col">firstname</th>
                <th scope="col">number</th>
                <th scope="col">Date</th>
                {/* <th scope="col">state</th> */}
                <th scope="col">action</th>
            </tr>
        </>
    )
}

export default TableHead