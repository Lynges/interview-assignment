import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "react-use/lib/useLocalStorage";
import { BasketItem } from "./BasketItem.jsx";

export function Basket(props) {
  const [basketItems, setBasketItems] = useLocalStorage("basketItems", {});
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (Object.keys(basketItems).length > 0) {
      axios
        .get(`/api/products/${Object.keys(basketItems).join(",")}`)
        .then(function(response) {
          setItems(response["data"]);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }, [basketItems, setItems]);
  function handleItemAmountChange(itemId, newAmount) {
    const setObject = { ...basketItems, ...{ [itemId]: newAmount } };
    if (setObject[itemId] === 0) {
      delete setObject[itemId];
    }
    console.log(setObject);
    setBasketItems(setObject);
  }
  const itemElements = items.reduce((results, item) => {
    if (basketItems[item.id.toString()]) {
      results.push(
        <BasketItem
          item={item}
          amount={basketItems[item.id.toString()]}
          onAmountChange={handleItemAmountChange}
        />
      );
    }
    return results;
  }, []);
  const basketTotal = items.reduce((sum, item) => {
    const itemInBasket = basketItems[item.id.toString()];
    if (itemInBasket) {
      return sum + item.price * itemInBasket;
    }
  }, 0);
  const itemList = (
    <ul class="list-group list-group-flush">
      {itemElements}
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <h4>Total:</h4>
        <h4>{basketTotal || 0}</h4>
      </li>
    </ul>
  );
  return (
    <div>
      {Object.keys(itemElements).length > 0 ? (
        itemList
      ) : (
        <p>Varekurven er tom.</p>
      )}
    </div>
  );
}
