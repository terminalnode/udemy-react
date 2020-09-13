import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css"
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
  let attachedClasses = props.open ?
    [ styles.SideDrawer, styles.Open ] :
    [ styles.SideDrawer, styles.Close ];

  return (
    <Aux>
      <Backdrop show={ props.open } onclick={ props.closed } />
      <div className={ attachedClasses.join(" ") }>
        <Logo height="11%" bottomMargin="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
