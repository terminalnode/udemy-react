import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasing: false
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCount + 1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCount - 1;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  };

  setPurchasingTrue = (_) => {
    this.setState({ purchasing: true });
  };

  setPurchasingFalse = (_) => {
    this.setState({ purchasing: false });
  }

  render() {
    const disabledLessButtons = { ...this.state.ingredients }
    Object
      .keys(disabledLessButtons)
      .map(key => disabledLessButtons[key] = disabledLessButtons[key] <= 0);

    const noIngredientsAdded = Object.values(this.state.ingredients)
      .reduce((acc, cur) => acc + cur, 0) === 0;

    return (
      <Aux>
        <Modal
          show={ this.state.purchasing }
          modalClosed={ this.setPurchasingFalse }>
          <OrderSummary ingredients={ this.state.ingredients } />
        </Modal>
        <Burger ingredients={ this.state.ingredients } />
        <BuildControls
          ingredientAdded={ this.addIngredientHandler }
          ingredientRemoved={ this.removeIngredientHandler }
          currentPrice={ this.state.totalPrice }
          disabledPlaceOrderButton={ noIngredientsAdded }
          disabledLessButtons={ disabledLessButtons }
          orderButtonClick={ this.setPurchasingTrue }
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
