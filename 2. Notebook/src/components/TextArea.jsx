import React from "react";


function TextArea({ notebookValue,
   setNotebookValue,
   addNotebookValue,
   addTextAreaObject,
   inputField,
}) {

   const areaStyle = {
      resize: "both",
      width: "200px",
      height: "200px",
   };

   return (
      <textarea
         value={notebookValue}
         onClick={() => setNotebookValue("")}
         onChange={addNotebookValue}
         onBlur={addTextAreaObject}
         style={areaStyle}
         placeholder={inputField}
         autoFocus
      />

   )
}

export default TextArea;
