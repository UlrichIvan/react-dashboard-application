import { v4 } from 'uuid'
import { useCallback, useEffect, useState } from "react"
import { generateValidFormatToExcelFile } from '../../helpers'
import { utils, writeFileXLSX } from 'xlsx';
import { toast } from "react-toastify"
import { REFRESH_ERROR, REFRESH_MESSAGE, REFRESH_MESSAGE_LOADING, TIME_AUTO_CLOSE_NOTIFICATION, MESSAGE_THEMES, NOTIFY_POSITION } from '../../constants';
function Caption({ orders = [],
    setCountRowsSelected = () => { },
    maxLenRows = 0,
    countRowsSelected = 0,
    setHasRowSelected = () => { },
    hasRowSelected = false,
    key_id = 367,
    nb_page = 0,
    page = 1,
    setPage = () => { },
    isload = false,
    setIsload = () => { },
    handlerchecked = () => { },
    handleRefresh = () => { },
    disabledRows = () => { } }
) {

    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const exportData = useCallback(() => {
        let rows = generateValidFormatToExcelFile(orders)
        const ws = utils.json_to_sheet(rows);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, `commandes-${key_id}.xlsx`)
    }, [orders, key_id])
    const notify = useCallback((handler, callback) => {
        toast.promise(handler,
            {
                pending: {
                    position: NOTIFY_POSITION.TOP_RIGHT,
                    render() {
                        return REFRESH_MESSAGE_LOADING
                    },
                },
                success: {
                    position: NOTIFY_POSITION.TOP_RIGHT,
                    render() {
                        callback()
                        return REFRESH_MESSAGE
                    },
                    theme: MESSAGE_THEMES.DARK,
                    autoClose: TIME_AUTO_CLOSE_NOTIFICATION
                },
                error: {
                    position: NOTIFY_POSITION.TOP_RIGHT,
                    render() {
                        callback()
                        return REFRESH_ERROR
                    }
                }
            })
    }, [])

    useEffect(() => {
        handlerchecked(false, page)
        setChecked(false)
    }, [page, handlerchecked])

    useEffect(() => {
        if (countRowsSelected === maxLenRows) setChecked(true)
    }, [maxLenRows, countRowsSelected])

    useEffect(() => {
        setChecked(false)
    }, [key_id])

    useEffect(() => {
        if (!hasRowSelected && checked) setChecked(false)
    }, [hasRowSelected, checked])

    return (
        <>
            <caption style={{ coptionSide: 'top!important' }}>
                <div className="container-fluid pl-1">
                    <div className="pagination d-flex align-items-center justify-content-between">
                        <div className="item-caption text-capitalize font-weight-bold d-flex">
                            <div className="select-all mr-2 d-flex align-items-center">
                                <input type="checkbox"
                                    disabled={disabled}
                                    checked={checked}
                                    onChange={(e) => {
                                        if (e.target.checked) setCountRowsSelected(maxLenRows)
                                        else setCountRowsSelected(0)

                                        setHasRowSelected(true)
                                        handlerchecked(e.target.checked, page)
                                        setChecked(e.target.checked)
                                    }} />
                                <span className="select-name text-capitalize ml-1">select all</span>
                            </div>
                            <button className="refresh-rows btn btn-sm text-capitalize btn-outline-primary"
                                disabled={disabled}
                                onClick={() => {
                                    disabledRows(page)
                                    setDisabled(true)
                                    setChecked(false)
                                    notify(handleRefresh(page), () => {
                                        setDisabled(false)
                                        setCountRowsSelected(0)
                                    })
                                }}>
                                <i className="fa fa-refresh" aria-hidden="true"></i>
                                <span className="reload-name ml-1">refresh</span>
                            </button>
                        </div>
                        <div className="item-caption d-flex align-items-center">
                            {isload && <div className="load-data font-weight-bold mr-2">loading...</div>}
                            <button
                                disabled={disabled}
                                className="btn btn-outline-primary text-capitalize btn-sm"
                                onClick={exportData}
                            >
                                <i className="fa fa-download" aria-hidden="true"></i>
                                <span className="export ml-1">export</span>
                            </button>
                            <div className="nb-pages mx-2">{`${page}/${nb_page}`}</div>
                            <label htmlFor="page" className="d-inline-block mr-1 mb-0 text-capitalize font-weight-bold">pages:</label>
                            <select
                                id="page"
                                disabled={disabled}
                                style={{ outline: "0", borderRaduis: "5px" }}
                                onChange={(e) => {
                                    setIsload(true)
                                    setPage(e.target.value)
                                }}

                                value={page}
                            >
                                {Array.apply(null, Array(nb_page)).map((_, i) => (<option key={v4()} value={i + 1}>{i + 1}</option>))}
                            </select>
                        </div>
                    </div>
                </div>
            </caption>
        </>
    )
}

export default Caption