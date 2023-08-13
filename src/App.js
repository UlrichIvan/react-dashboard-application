import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { URL_HOME_PAGE, URL_SMS_ORDERS_PAGE, URL_PAGE_NOT_FOUND, URL_USER_ACTION } from "./constants";
import Home from "./pages/home/Home";
import Orders from "./pages/order/Orders";
import OrderProvider from "./providers/OrderProvider";
import NotFound from "./pages/notfound/NotFound";
import OrderProcessing from "./pages/orderprocessing/OrderProcessing";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={URL_HOME_PAGE} element={<Home />}></Route>
          <Route path={URL_SMS_ORDERS_PAGE} element={
            <OrderProvider>
              <Orders />
            </OrderProvider>} >
            <Route path={URL_USER_ACTION} element={
              <OrderProvider>
                <OrderProcessing />
              </OrderProvider>
            } />
          </Route>
          <Route path={URL_PAGE_NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
