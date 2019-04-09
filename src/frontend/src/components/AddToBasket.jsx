import React from "react";
import { Button } from "reactstrap";
import useLocalStorage from "react-use/lib/useLocalStorage";

export function AddToBasket(props) {
  const [basketItems, setBasketItems] = useLocalStorage("basketItems", {});
  const newValue = {};
  newValue[props.productid.toString()] =
    (basketItems[props.productid.toString()] || 0) + 1;
  return (
    <Button
      class="btn btn-success btn-lg"
      onClick={() =>
        setBasketItems({
          ...basketItems,
          ...newValue
        })
      }
    >
      Læg i kurven
    </Button>
  );
}
