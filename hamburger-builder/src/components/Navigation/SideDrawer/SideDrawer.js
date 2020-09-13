import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import styles from "./SideDrawer.module.css"

const sideDrawer = (_) => {
  return (
    <div className={ styles.SideDrawer }>
      <Logo height="11%" bottomMargin="32px" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
