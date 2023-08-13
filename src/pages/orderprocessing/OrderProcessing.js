import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";
import TableHead from "../../components/tablehead/TableHead";
import TableRow from "../../components/tablerow/TableRow";
import {
  CHECKED,
  FAKE_URL_DATA,
  ORDERS_ID_STATE,
  DISABALED,
  MAX_ORDERS_BY_PAGE,
  FETCH_DATA_ERROR,
  TIME_AUTO_CLOSE_NOTIFICATION,
  MESSAGES,
  MESSAGE_THEMES,
} from "../../constants";
import { v4 } from "uuid";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Caption from "../../components/caption/Caption";
import Scrollbar from "react-perfect-scrollbar";
import { getValidRows, groupOrdersByPage } from "../../helpers";
import produce from "immer";
import { toast } from "react-toastify";

function OrdersBeingProcessed({ key_id = 367 }) {
  const [orders, setOrders] = useState([]);
  const [ordersByPage, setOrdersByPage] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [countRowsSelected, setCountRowsSelected] = useState(0);
  const [hasRowSelected, setHasRowSelected] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const { toggle, isload, setIsload } = useOutletContext();

  const checkAllOrders = useCallback((checked, _page) => {
    if (_page >= 1) {
      setOrdersByPage(
        produce((draft) => {
          draft[_page - 1] = draft[_page - 1].map((row) => {
            row[`${CHECKED}`] = checked;
            return row;
          });
        })
      );
    }
  }, []);

  const disabledRows = useCallback((_page) => {
    if (_page >= 1) {
      setOrdersByPage(
        produce((draft) => {
          draft[_page - 1] = draft[_page - 1].map((row) => {
            row[`${DISABALED}`] = true;
            return row;
          });
        })
      );
    }
  }, []);

  const handleRefresh = useCallback(
    async (_page) => {
      let res = await axios.get(`${FAKE_URL_DATA}/${ORDERS_ID_STATE[key_id]}`);
      let rows = getValidRows(res.data);
      if (_page >= 1) {
        setOrdersByPage(
          produce((draft) => {
            draft[_page - 1] = rows.slice(
              (_page - 1) * MAX_ORDERS_BY_PAGE,
              _page * MAX_ORDERS_BY_PAGE
            );
          })
        );
        return true;
      }

      return false;
    },
    [key_id]
  );

  const handlerRowChecked = useCallback((index, _page, checked) => {
    if (_page >= 1) {
      setOrdersByPage(
        produce((draft) => {
          draft[_page - 1][index][`${CHECKED}`] = checked;
        })
      );
    }
  }, []);

  useEffect(() => {
    setCountRowsSelected(0);
  }, [page]);

  useEffect(() => {
    if (lastPage !== page) {
      setLastPage(page);
    } else {
      setIsload(false);
    }
  }, [page, lastPage, setIsload]);

  useEffect(() => {
    const data = async () => {
      let res = await axios.get(`${FAKE_URL_DATA}/${ORDERS_ID_STATE[key_id]}`);
      let rows = getValidRows(res.data);
      let rowsgroup = groupOrdersByPage(rows);

      if (rows.length) {
        setOrders(rows);
        setOrdersByPage(rowsgroup);
        setPage(1);
        setCountRowsSelected(0);
        setDataIsLoading(false);
      }
    };
    try {
      data();
    } catch (error) {
      toast(FETCH_DATA_ERROR, {
        type: MESSAGES.ERROR,
        autoClose: TIME_AUTO_CLOSE_NOTIFICATION,
        theme: MESSAGE_THEMES.DARK,
      });
      setDataIsLoading(false);
      console.log(error.message);
    }
  }, [key_id]);

  return (
    <div
      className={`container-fluid wrapper-table  ${
        orders.length === 0 && dataIsLoading ? "loader" : ""
      }`}
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <Scrollbar className="wrapper-table">
        <table className="table table-sm table-dark table-striped table-hover">
          {ordersByPage.length > 0 && page >= 1 && (
            <Caption
              handlerchecked={checkAllOrders}
              nb_page={ordersByPage.length}
              key_id={key_id}
              page={page}
              setPage={setPage}
              isload={isload}
              setIsload={setIsload}
              disabledRows={disabledRows}
              handleRefresh={handleRefresh}
              hasRowSelected={hasRowSelected}
              setHasRowSelected={setHasRowSelected}
              setCountRowsSelected={setCountRowsSelected}
              countRowsSelected={countRowsSelected}
              maxLenRows={ordersByPage[page - 1].length}
              orders={ordersByPage}
            />
          )}
          <thead
            className={`${toggle ? "position-sticky" : ""} thead-light`}
            style={{ top: "0" }}
          >
            <TableHead />
          </thead>
          <tbody>
            {ordersByPage.length > 0 &&
              page >= 1 &&
              ordersByPage[page - 1].map((row, i) => (
                <TableRow
                  handlerRowChecked={handlerRowChecked}
                  index={i}
                  page={page}
                  setHasRowSelected={setHasRowSelected}
                  setCountRowsSelected={setCountRowsSelected}
                  maxLenRows={ordersByPage[page - 1].length}
                  row={row}
                  key={v4()}
                />
              ))}
          </tbody>
        </table>
      </Scrollbar>
    </div>
  );
}

export default OrdersBeingProcessed;
