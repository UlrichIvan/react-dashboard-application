import { toast } from "react-toastify";

// KEYS TO FETCH DATA

export const FAKE_URL_DATA = "http://localhost:4000";

// URL QUERIES VALUES
export const QUERY_ORDERS_BEING_PROCESSED = "en-cours-de-traintements";
export const QUERY_ORDERS_DELIVERY = "Livrées";
export const QUERY_ORDERS_CLIENT_CANNOT_CALL = "clients-injoignables";
export const QUERY_ORDERS_BEING_DELIVERY = "en-cours-d'expédition";

export const VALID_PARAMS = [
  QUERY_ORDERS_BEING_PROCESSED,
  QUERY_ORDERS_DELIVERY,
  QUERY_ORDERS_CLIENT_CANNOT_CALL,
  QUERY_ORDERS_BEING_DELIVERY,
];

// links for each page

export const URL_HOME_PAGE = "/";
export const URL_SMS_ORDERS_PAGE = "/orders";
export const URL_SMS_MARKETING_PAGE = "/marketings";
export const URL_USER_ACTION = "/orders/:action";
export const URL_PAGE_NOT_FOUND = "*";

// orthers constants using in projet

export const SMS_COMMAND = "sms commandes";
export const SMS_MARKETING = "sms marketing";
export const APP_NAME = "decathlon"; // the company name
export const SMS_COMMAND_NAME = "orders";
export const CHECKED = "CHECKED";

export const DISABALED = "DISABALED";
export const BUGGER_TITLE = "options"; // message appear when user is hovering a bugger icon,you can change it to set another
export const REFRESH_MESSAGE = "data has been refresh successfully "; // message appear when user refresh data on page
export const REFRESH_ERROR =
  "error occured during refreshing data please try again later"; // message appear when refresh data failed on page
export const REFRESH_MESSAGE_LOADING = "data is refreshing..."; // message appear when data refreshing on page

export const FETCH_DATA_ERROR =
  "error occured during fetching data please reload a page"; // message appear when user refresh data on page
export const FETCH_DATA_SUCCESS = "data has been load successfully"; // message appear when data loaded on page

export const MAX_ORDERS_BY_PAGE = 100;
export const TIME_AUTO_CLOSE_NOTIFICATION = 2000;
export const MESSAGES = {
  ERROR: "error",
  SUCCESS: "success",
};

export const MESSAGE_THEMES = {
  DARK: "dark",
  LIGHT: "light",
  COLORED: "colored",
};
export const NOTIFY_POSITION = {
  TOP_CENTER: toast.POSITION.TOP_CENTER,
  TOP_LEFT: toast.POSITION.TOP_LEFT,
  TOP_RIGHT: toast.POSITION.TOP_RIGHT,
  BOTTOM_LEFT: toast.POSITION.BOTTOM_LEFT,
  BOTTOM_CENTER: toast.POSITION.BOTTOM_CENTER,
  BOTTOM_RIGHT: toast.POSITION.BOTTOM_RIGHT,
};

export const ORDERS_ID_STATE = {
  [QUERY_ORDERS_BEING_PROCESSED]: 367,
  [QUERY_ORDERS_DELIVERY]: 371,
  [QUERY_ORDERS_CLIENT_CANNOT_CALL]: 370,
  [QUERY_ORDERS_BEING_DELIVERY]: 379,
};

export const ORDERS_TYPES = [
  QUERY_ORDERS_BEING_PROCESSED,
  QUERY_ORDERS_DELIVERY,
  QUERY_ORDERS_CLIENT_CANNOT_CALL,
  QUERY_ORDERS_BEING_DELIVERY,
];
