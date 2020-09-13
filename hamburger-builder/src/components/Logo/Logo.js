import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = (_) => (
  <div className={ styles.Logo }>
    <img src={ burgerLogo } alt="Burger Builder 2000" />
  </div>
);

export default logo;
