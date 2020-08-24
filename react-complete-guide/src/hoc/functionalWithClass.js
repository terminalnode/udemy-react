import React from "react";

const functionalWithClass = (WrappedComponent, className) => {
  return props => (
    <div className={ className }>
      <WrappedComponent { ...props } />
    </div>
  );
}

export default functionalWithClass;
