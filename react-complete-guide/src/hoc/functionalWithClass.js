import React from "react";

const functionalWithClass = (WrappedComponent, className) => {
  return props => (
    <div className={ className }>
      <WrappedComponent />
    </div>
  );
}

export default functionalWithClass;
