import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from "reactstrap";

export function BasketItem(props) {
  return (
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      key={props.item.id.toString()}
    >
      {props.item.name}
      <small>
        {props.amount} &times; {props.item.price}&nbsp;&nbsp;=&nbsp;&nbsp;
        {props.item.price * props.amount}
      </small>
      <InputGroup className="basket-input-group" size="sm">
        <InputGroupAddon addonType="prepend">
          <Button
            color="secondary"
            onClick={(e, prop) =>
              props.onAmountChange(props.item.id.toString(), props.amount - 1)
            }
          >
            -
          </Button>
        </InputGroupAddon>
        <InputGroupText size="sm">{props.amount}</InputGroupText>
        <InputGroupAddon addonType="append">
          <Button
            color="secondary"
            onClick={(e, prop) =>
              props.onAmountChange(props.item.id.toString(), props.amount + 1)
            }
          >
            +
          </Button>
          <Button
            color="danger"
            onClick={(e, prop) =>
              props.onAmountChange(props.item.id.toString(), 0)
            }
          >
            Fjern
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </li>
  );
}
