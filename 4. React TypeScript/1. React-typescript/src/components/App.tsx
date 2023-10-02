import { useState, useEffect, useRef } from 'react';

import {ITodo} from '../types/data';
import {TodoList} from './TodoList';

const App: React.FC = () => {

   const [value, setValue] = useState<string>('');  // it is not necessary to set the generic <string> here
   const [todos, setTodos] = useState<ITodo[]>([]);

   const inputRef = useRef<HTMLInputElement>(null);  // creating possibility to focus on the input line <input> when loading our application.

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
      setValue(event.target.value);
      }

   const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event): void => {
      if (event.key === 'Enter'){
         addTodo();
      }
   }

   const addTodo = (): void => {
      if(value){
         setTodos([...todos, {
            id: Date.now() ,
            title: value,
            isComplete: false,
            }
         ]);
      }
      setValue('');
   }

   const removeTodo = (id: number | string): void => {
      setTodos(
         todos.filter((todo) => todo.id !== id)
      );
   }

   const toggleTodo = (id: number | string): void => {
      setTodos(
         todos.map((todo) => {
            if(todo.id !== id){
               return todo;
            }
         return {
            ...todo,
            isComplete: !todo.isComplete,
            }
         })
      );
   }

   useEffect(() => {
      inputRef.current?.focus();  // use the '?' sign, thereby confirming that 'inputRef.current' exists and not 'null'.

      /* if(inputRef.current){  // another variant of pre-recording.
         inputRef.current.focus()
      } */

   }, []);


   return <div>
      <div>
         <input value={value} onChange={handleChange} onKeyDown={handleOnKeyDown} ref={inputRef} type="text" id='input_text' name='input_text' />
         <button onClick={addTodo}>Add</button>
         <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
   </div>
}

export default App;