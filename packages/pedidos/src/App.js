import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import OrderList from "./components/OrderList";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pedidos" component={OrderList} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
