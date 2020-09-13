import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (_) => (
  <header className={ styles.Toolbar }>
    <div>MENU</div>
    <Logo height="80%" />
    <nav className={ styles.DesktopOnly }>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
