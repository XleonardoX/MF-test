import React, { lazy, Suspense, useState } from "react";
import PedidosApp from "./components/PedidosApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PedidosLazy = lazy(() => import("./components/PedidosApp"));

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route path="/pedidos">
              <PedidosLazy setIsAuthenticated={setIsAuthenticated} />
            </Route>
          </Switch>
        </Suspense>
      )}
    </BrowserRouter>
  );
};
