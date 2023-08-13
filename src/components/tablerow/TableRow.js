import { useState } from "react"
import { CHECKED, DISABALED } from "../../constants"
import "./tablerow.css"

function TableRow({ maxLenRows = 0, setCountRowsSelected = () => { }, setHasRowSelected = () => { }, row = {}, handlerRowChecked = () => { }, page = 1, index = 0 }) {
    const [checked, setChecked] = useState(row[`${CHECKED}`])

    return (
        <>
            <tr className={`${checked ? 'bg-primary' : ''}`}>
                <td>
                    <span className="select-item mr-2">
                        <input
                            type="checkbox"
                            checked={checked}
                            disabled={row[`${DISABALED}`]}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setCountRowsSelected(len => {
                                        if (len < maxLenRows) return (len + 1)
                                        else return len
                                    })
                                } else {
                                    setCountRowsSelected(len => {
                                        if (len >= 1) return (len - 1)
                                        else return 0
                                    })
                                }
                                setHasRowSelected(e.target.checked)
                                setChecked(e.target.checked)
                                handlerRowChecked(index, page, e.target.checked)
                            }} />
                    </span>
                    {row?.lastname}
                </td>
                <td>{row?.firstname}</td>
                <td>{row?.phone.replace(/\s/ig, '')}</td>
                <td>{row?.date_upd}</td>
                <th scope="row">
                    <button type="button" className="btn btn-sm btn-outline-success text-capitalize">send</button>
                </th>
            </tr>
        </>
    )
}

export default (TableRow)