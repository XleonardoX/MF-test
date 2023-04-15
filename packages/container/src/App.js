import React, { lazy, Suspense } from "react";
import PedidosApp from "./components/PedidosApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PedidosLazy = lazy(() => import("./components/PedidosApp"));

export default () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route path="/pedidos" component={PedidosLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
