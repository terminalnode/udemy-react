import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css"
import Aux from "../../../hoc/Aux"

const modal = (props) => (
  <Aux>
    <div
      className={ styles.Modal }
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}>
      { props.children }
    </div>
    <Backdrop show={ props.show } onclick={ props.modalClosed } />
  </Aux>
);

export default modal;
