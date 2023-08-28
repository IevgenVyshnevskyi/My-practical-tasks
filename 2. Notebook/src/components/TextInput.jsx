import React from "react";


function TextInput({ fieldValue, type, onAddDataHandler, oneData, }) {

   return (
      <input
         type={type}
         value={fieldValue}
         onChange={(event) => onAddDataHandler(event, oneData)}
         autoFocus
      />
   )
}

export default TextInput;
