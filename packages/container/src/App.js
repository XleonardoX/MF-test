import React from "react";
import PedidosApp from "./components/PedidosApp";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <PedidosApp />
      </div>
    </BrowserRouter>
  );
};
