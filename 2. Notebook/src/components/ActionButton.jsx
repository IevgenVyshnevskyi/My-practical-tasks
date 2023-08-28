import React from "react";


function ActionButton({ oneData, onButtonHandler, children }) {

   return (
      <button class="edit-button" onClick={() => onButtonHandler(oneData)}>{children}</button>
   )
}

export default ActionButton;
