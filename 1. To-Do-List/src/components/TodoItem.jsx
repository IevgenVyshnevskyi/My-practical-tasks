import React from "react";
import Button from "./Button";

function TodoItem({
   data,
   onChangeInput,
   onToggleData,
   onDeleteData,
   dragStartHandler,
   dragLeaveHandler,
   dragEndHandler,
   dragOverHandler,
   dropHandler,
}) {
   const styles = {
      textDecoration: data.isChecked && "line-through",
      border: "1px solid black",
      width: "500px",
      margin: "auto",
      marginTop: "25px",
      paddingBottom: "10px",
      borderRadius: "10px",
      background: "red",
      cursor: "grab",
   };

   return (
      <div
         draggable={true} // атрибут "draggable" зі значенням "true", а саме: draggable={true} встановлюєтья для того, щоб елемент можна було переміщати
         onDragStart={(event) => dragStartHandler(event, data)} // даний обробник (слушатель) спрацьовує коли ми беремо елемент (наприклад: картку)
         onDragLeave={(event) => dragLeaveHandler(event)} // даний обробник (слушатель) спрацьовує коли ми вийшли за кордони іншого елементу (наприклад: іншого картки)
         onDragEnd={(event) => dragEndHandler(event)} // даний обробник (слушатель) спрацьовує коли ми відпустили переміщуваний елемент (наприклад: картку)
         onDragOver={(event) => dragOverHandler(event)} // даний обробник (слушатель) спрацьовує коли наш переміщуваний елемент (наприклад: картка) знаходиться над іншим об'єктом (наприклад: карткою)
         onDrop={(event) => dropHandler(event, data)} // даний обробник (слушатель) спрацьовує коли ми відпустили переміщуваний елемент (наприклад: картку) і розраховуєм, що повинна відбутись пов'язана з цим якась подія
         key={data.id}
         style={styles}
      >
         {data.isInput ? (
            <input
               value={data.name}
               onChange={(event) => onChangeInput(data.id, event)}
               onBlur={() => onToggleData(data.id, "isInput")}
               autoFocus
               style={{ cursor: "cursor" }}
            />
         ) : (
            <span
               onClick={() => {
                  if (!data.isChecked) {
                     onToggleData(data.id, "isInput");
                  }
               }}
               autoFocus
               style={{ cursor: "pointer", color: "white", fontSize: "26px" }}
            >
               {data.name}
            </span>
         )}
         <br />
         {!data.isInput && (
            <Button data={data} onHandlerData={onDeleteData}>
               DELETE DATA
            </Button>
         )}
         {!data.isInput && (
            <Button
               data={data}
               onHandlerData={onToggleData}
               isStateType="isChecked"
            >
               {data.isChecked ? (
                  <span>CANCEL CHECK DATA</span>
               ) : (
                  <span>CHECK DATA</span>
               )}
            </Button>
         )}
         {!data.isChecked && (
            <Button data={data} onHandlerData={onToggleData} isStateType="isInput">
               {!data.isInput ? <span>CHANGE DATA</span> : <span>SAVE DATA</span>}
            </Button>
         )}
      </div>
   );
}

export default TodoItem;
