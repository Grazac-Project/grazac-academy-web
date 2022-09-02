import React from "react";

function TextComponent({ color, children }) {
  return (
    <div className="textcomponent__container" style={{ color: `${color}` }}>
      {children}
    </div>
  );
}

export default TextComponent;
