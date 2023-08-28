import React, { useState } from "react";
import NotebookItemList from "./NotebookItemList";

const { nanoid } = require("nanoid");

function NotebookApp() {
   const id = () => {
      return nanoid();
   };

   const [notebookValue, setNotebookValue] = useState("");
   const [textArea, setTextArea] = useState([]);

   const [searchFieldValue, setSearchFieldValue] = useState("");

   const addNotebookValue = (event) => {
      return setNotebookValue(event.target.value);
   };

   const addInputValue = (event, id) => {
      setTextArea(
         textArea.map((oneObject) => {
            if (oneObject.id === id) {
               oneObject.name = event.target.value;
            }
            return oneObject;
         })
      );
   };

   function addTextAreaObject() {
      if (notebookValue !== "") {
         const textAreaCopy = [
            ...textArea,
            { id: id(), sign: "Запис", isShowLiValue: false, name: notebookValue },
         ];
         setTextArea(textAreaCopy);
         setNotebookValue("");
      }
   }

   function toggleIsShowLiValue(id) {
      setTextArea(
         textArea.map((oneObject) => {
            if (oneObject.id === id) {
               setNotebookValue(oneObject.name);
            }
            return oneObject;
         })
      );
   }

   function setInputFieldInTextarea(id) {
      setTextArea(
         textArea.map((oneObject) => {
            if (oneObject.id === id) {
               oneObject.isShowLiValue = !oneObject.isShowLiValue;
            }
            return oneObject;
         })
      );
   }

   function deleteIssue(id) {
      setTextArea(textArea.filter((oneObject) => oneObject.id !== id));
   }

   function addSearchData(event) {
      setSearchFieldValue(event.target.value);
   }

   const filteredData = textArea.filter((oneObject) => {
      return oneObject.name
         .toLowerCase()
         .includes(searchFieldValue.toLowerCase());
   });

   return (
      <NotebookItemList
         searchFieldValue={searchFieldValue}
         notebookValue={notebookValue}
         addNotebookValue={addNotebookValue}
         addTextAreaObject={addTextAreaObject}
         setNotebookValue={setNotebookValue}
         onAddSearchDataHandler={addSearchData}
         filteredData={filteredData}
         onSetInputFieldInTextarea={setInputFieldInTextarea}
         onToggleIsShowLiValue={toggleIsShowLiValue}
         onDeleteIssue={deleteIssue}
         onAddInputValue={addInputValue}
      />
   );
}

export default NotebookApp;