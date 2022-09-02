import React from "react";

function Button({ text, bgColor, textColor, disabled }) {
  return (
    <button
      style={{ backgroundColor: `${bgColor}` }}
      disabled={disabled}
      className="button__container"
    >
      <p 
      style={{ color: `${textColor}` }}
      
      >{text}</p>
    </button>
  );
}

export default Button;
