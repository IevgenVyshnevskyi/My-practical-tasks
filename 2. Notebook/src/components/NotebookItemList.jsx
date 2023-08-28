import React from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ActionButton from "./ActionButton";

function NotebookItemList({
   searchFieldValue,
   notebookValue,
   addNotebookValue,
   addTextAreaObject,
   setNotebookValue,
   onAddSearchDataHandler,
   filteredData,
   onSetInputFieldInTextarea,
   onToggleIsShowLiValue,
   onDeleteIssue,
   onAddInputValue,
}) {


   return (
      <div class="containerStyle" >
         <div>
            <h1 class="App-logo">List of created records</h1>
            <span>Search field: </span>
            <TextInput
               type="text"
               fieldValue={searchFieldValue}
               onAddDataHandler={onAddSearchDataHandler}
            />
            <ol>
               {filteredData.map((oneData, index) => {
                  return (
                     <div id={oneData.id} key={oneData.id} style={{ display: "flex" }}>
                        <li onClick={() => onToggleIsShowLiValue(oneData.id)}>
                           {!oneData.isShowLiValue ? (
                              <span onClick={() => onSetInputFieldInTextarea(oneData.id)}>
                                 {oneData.sign} № {index + 1} {oneData.name}
                              </span>
                           ) : (
                              <TextInput
                                 oneData={oneData.id}
                                 fieldValue={oneData.name}
                                 onAddDataHandler={onAddInputValue}
                              />
                           )}
                           <ActionButton
                              oneData={oneData.id}
                              onButtonHandler={onSetInputFieldInTextarea}
                           >
                              {!oneData.isShowLiValue ? (
                                 <span>CHANGE DATA</span>
                              ) : (
                                 <span>SAVE DATA</span>
                              )}
                           </ActionButton>
                        </li>
                        {!oneData.isShowLiValue && (
                           <ActionButton oneData={oneData.id} onButtonHandler={onDeleteIssue}>
                              DELETE
                           </ActionButton>
                        )}
                     </div>
                  );
               })}
            </ol>
         </div>
         <span>
            <TextArea
               notebookValue={notebookValue}
               setNotebookValue={setNotebookValue}
               addNotebookValue={addNotebookValue}
               addTextAreaObject={addTextAreaObject}
               inputField="The input field is here!"
            />
            <br />
            <ActionButton onButtonHandler={addTextAreaObject}>ADD DATA</ActionButton>
            <br />
            {notebookValue}
         </span>
      </div>
   );
}

export default NotebookItemList;
