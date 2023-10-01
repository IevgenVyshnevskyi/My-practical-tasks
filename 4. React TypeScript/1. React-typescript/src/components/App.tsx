import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';

import {TodoList} from './TodoList';

const App: React.FC = ()/* : React.ReactNode */ => {

   const [value, setValue] = useState<string>('');  // тут встановлювати дженерік <string> не обов'язково
   console.log('value: ', value);

   const [todos, setTodos] = useState<ITodo[]>([]);
   
   const addTodo = () => {
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



   return <div>
      <div>
         <input value={value} onChange={(event/* :any */) => setValue(event.target.value)} />
         <button onClick={addTodo}>Add</button>
         <TodoList items={todos} />
      </div>
   </div>
}

export default App;