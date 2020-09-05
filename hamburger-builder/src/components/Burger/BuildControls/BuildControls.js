import React from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad",   type: "salad" },
  { label: "Bacon",   type: "bacon" },
  { label: "Cheese",  type: "cheese" },
  { label: "Meat",    type: "meat" },
];

const buildControls = (props) => (
  <div className={ styles.BuildControls }>
    <p>Current price: <strong>{ props.currentPrice.toFixed(2) } €</strong></p>
    { controls.map(control =>
        <BuildControl
          key={ control.type }
          label={ control.label }
          added={ () => props.ingredientAdded(control.type) }
          removed={ () => props.ingredientRemoved(control.type) }
          disableLessButton={ props.disabledLessButtons[control.type] }
    />
    )}
    <button
      className={ styles.OrderButton }
      disabled={ props.disabledPlaceOrderButton }
      onClick={ props.orderButtonClick }
    >
        Place order
    </button>
  </div>
);

export default buildControls;
