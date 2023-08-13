import { MAX_ORDERS_BY_PAGE, ORDERS_TYPES, CHECKED } from "./constants";
import { isDate, isMobilePhone } from "validator";
import processedLogo from "./images/png/bag.png";
import deliveryLogo from "./images/png/delivery.png";
import phone from "./images/png/phone.png";
import beingDelivery from "./images/png/service.png";
import store from "./images/png/store.png";

export const getValidRows = (rows) => {
  return rows
    .filter((row) => isDate(new Date(row.date_upd)) && isMobilePhone(row.phone))
    .map((row) => {
      row.date_upd = new Date(row.date_upd).toLocaleString();
      row[`${CHECKED}`] = false;
      return row;
    });
};
export const countPage = (len) => {
  if (len <= MAX_ORDERS_BY_PAGE) return 1;
  else {
    if (len % MAX_ORDERS_BY_PAGE === 0)
      return parseInt(len / MAX_ORDERS_BY_PAGE);
    else return parseInt(len / MAX_ORDERS_BY_PAGE) + 1;
  }
};
export const groupOrdersByPage = (rows) => {
  let len = countPage(rows.length);
  let start = 0,
    end = MAX_ORDERS_BY_PAGE;
  let data = [];

  for (let i = 1; i <= len; i++) {
    if (data.length) {
      data = [...data, rows.slice(start, end)];
      start = end;
      end = MAX_ORDERS_BY_PAGE * (i + 1);
    } else {
      data = [rows.slice(start, end)];
      start = end;
      end = MAX_ORDERS_BY_PAGE * (i + 1);
    }
  }

  return data;
};
export const getLogoByOrders = (action) => {
  switch (action) {
    case ORDERS_TYPES[0].replace(/-/gi, " "):
      return processedLogo;
    case ORDERS_TYPES[1].replace(/-/gi, " "):
      return deliveryLogo;
    case ORDERS_TYPES[2].replace(/-/gi, " "):
      return phone;
    case ORDERS_TYPES[3].replace(/-/gi, " "):
      return beingDelivery;
    default:
      return store;
  }
};

export const generateValidFormatToExcelFile = (data = []) => {
  let rows = [];
  let currentRows = [];
  for (let i = 0; i < data.length; i++) {
    currentRows = data[i].map((row) => {
      return {
        firstname: row.firstname,
        date: row.date_upd,
        number: row.phone,
      };
    });
    rows = [...rows, ...currentRows];
  }
  return rows;
};
