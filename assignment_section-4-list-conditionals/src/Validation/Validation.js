import React from 'react';

const validation = props => {
  return (
    <p>
      { props.textLength > 9 ? "Very long text indeed! A whoopin' " : "WRITE MORE! There's only " }
      <b>{ props.textLength } characters</b>!
    </p>
  );
}

export default validation;
