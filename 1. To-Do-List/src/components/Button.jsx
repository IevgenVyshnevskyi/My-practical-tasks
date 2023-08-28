import React from "react";


function Button({ onHandlerData, data, isStateType, children }) {

   return (
      <button onClick={() => onHandlerData(data.id, isStateType)}>{children}</button>
   )
}

export default Button;
