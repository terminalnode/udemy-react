import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={ styles.NavigationItems }>
    <NavigationItem link="/" active={ true } text="Burger Builder" />
    <NavigationItem link="/" text="Checkout" />
  </ul>
);

export default navigationItems
