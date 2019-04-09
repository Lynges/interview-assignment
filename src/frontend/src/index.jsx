import React from "react";
import ReactDOM from "react-dom";
import { AddToBasket } from "./components/AddToBasket.jsx";
import { BasketModal } from "./components/BasketModal.jsx";

if (document.getElementById("AddToBasketButtonContainer")) {
  const atbb_container = document.getElementById("AddToBasketButtonContainer");

  ReactDOM.render(
    <AddToBasket productid={atbb_container.dataset.productid} />,
    atbb_container
  );
}

const basket_element = <BasketModal />;
ReactDOM.render(
  basket_element,
  document.getElementById("BasketButtonContainer")
);
