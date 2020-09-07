import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return (
        <li key={key}>
          <strong>{props.ingredients[key]} x </strong>
          <span style={{textTransform: "capitalize"}}>{key}</span>
        </li>);
    });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>What an amazing burger! Wow! Incredible! Magnificent!</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p><strong>Total price: { props.price.toFixed(2) } €</strong></p>
      <p>Would you like to proceed with ordering one of these bad boys?</p>
      <Button buttonType="Danger" clicked={ props.cancelButtonClick }>CANCEL</Button>
      <Button buttonType="Success" clicked={ props.proceedButtonClick }>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
