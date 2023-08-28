import React, { useState } from "react";
import '../Checklist.css';
import TodoItem from "./TodoItem";
const { nanoid } = require("nanoid");



function Checklist() {
   function generateId() {
      return nanoid();
   }

   const [todoList, setTodoList] = useState([]);
   const [inputData, setInputData] = useState("");


   function addInputData(event) {
      return setInputData(event.target.value);
   }


   function addTodoListByKey(id) {
      if (inputData !== "") {
         const copyTodoList = [
            ...todoList,
            { id: generateId(), order: generateId(), name: inputData, isChecked: false, isInput: false },  // обов'язково створення нового об'єкту в масиві об'єктів повинно включати свойство з ключем "order" та значенням "id"
         ];                                                                               // (у нашому випадку "id" створюється з допомогою спеціальної нами створюваної функції 'generateId' та бібліотеки ('nanoid', або 'react-uuid') для створення довільного (випадкового) id)
         setTodoList(copyTodoList);
         setInputData("");
      }
   }

   function deleteData(id) {
      setTodoList(todoList.filter((dataObject) => dataObject.id !== id));
   }

   function toggleData(id, property) {
      setTodoList(
         todoList.map((dataObject) => {
            if (dataObject.id === id) {
               dataObject[property] = !dataObject[property];
            }
            return dataObject;
         })
      );
   }

   function changeInnerInputData(id, event) {
      setTodoList(
         todoList.map((dataObject) => {
            if (dataObject.id === id && event.target.value !== "") {
               dataObject.name = event.target.value;
            }
            return dataObject;
         })
      );
   }

   const [currentCard, setCurrentCard] = useState(null); // даний state створюється для запам'ятовування взятої картки з метою її переміщення

   function dragStartHandler(event, data) {
      setCurrentCard(data)  // коли ми беремо якийсь елемент (картку) ми додаєм його(її) стан
   }


   function dragLeaveHandler(event) {
      //console.log('dragLeave', event)
   }


   function dragEndHandler(event) {
      event.target.style.background = "red";  // повертаєм колір заднього фону елемента (картки) після того, як ми пройшли над цим елементом (карткою),
   }                                          // тобто колір підсвічується лише тієї карки над якою ми фактично проходимо нашою обраною карткрою у цей момент


   function dragOverHandler(event) {
      event.preventDefault();  // викликаєм функцію event.preventDefault() з метою відключення дії браузера по-замовченню
      event.target.style.background = "#db6b7c";  // підсвічуєм елемент (змінюєм колір заднього фону) елемента (картки) у який будемо закидивати інший елемент (картку)
   }


   function dropHandler(event, data) {
      event.preventDefault();  // викликаєм функцію event.preventDefault() з метою відключення дії браузера по-замовченню

      setTodoList(todoList.map(c => {  // сортування елементів (карток), тобто будемо змінювати їх місцями, а саме змінюємо початковий масив елементів (карток)
         if (c.id === data.id) {  // перша умова: якщо даний (поточний) елемент масиву і його "id" рівний елементу(картки) у який ми його закидуєм, то цьому елементу(картці), а він знаходиться знизу будемо присвоювати порядок того елементу(картки), якого ми тримаємо
            return { ...c, order: currentCard.order }
         }
         if (c.id === currentCard.id) {  // друга умова: якщо "id" даного (поточного) елементу масиву(спису) рівний елементу(картки), якого ми тримаємо, то його порядок змінюєм на порядок того елементу(картку), що знизу
            return { ...c, order: data.order }  // простими словами - ми просто міняєм їхні порядки, але нічого не сортуємо згідно нього, тобто нічого не змінится доки ми не створемо спеціальну сортувальну функцію, що у нас наступна знизу (у нас це функція "sortDatas()")
         }
         return c;
      }))
      event.target.style.background = "red";
   }

   const sortDatas = (a, b) => {  // функція для сортування, яка приймає два об'єкти (дві картки)
      if (a.order > b.order) {
         return 1
      } else {
         return -1
      }
   }

   const result = todoList.sort(sortDatas).map((data, index) => {
      return (
         <TodoItem
            key={data.id}
            index={index}
            data={data}
            todoList={todoList}
            onChangeInput={changeInnerInputData}
            onToggleData={toggleData}
            onDeleteData={deleteData}

            dragStartHandler={dragStartHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
         />
      );
   });

   return (
      <div className="Checklist">
         <h1>Check List</h1>
         <input
            value={inputData}
            onChange={(event) => addInputData(event)}
            autoFocus
            onKeyDown={(event) => {
               if (event.key === "Enter") {
                  addTodoListByKey(generateId, event)
               }
            }
            }
         />
         <button onClick={() => addTodoListByKey(generateId)}>
            ADD DATA
         </button>
         <br />
         <div className="Checklist-item">
            {result}
         </div>
      </div>
   );
}

export default Checklist;
