import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowseHistory } from "history";

const history = createBrowseHistory();

const PedidosLazy = lazy(() => import("./components/PedidosApp"));

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route path="/pedidos">
            <PedidosLazy setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/" component={<></>} />
        </Switch>
      </Suspense>
    </Router>
  );
};
