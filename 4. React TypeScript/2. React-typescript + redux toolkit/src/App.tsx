import {useState} from 'react';
import {useAppDispatch} from './hooks';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
   const [value, setValue] = useState('');
   const dispatch = useAppDispatch();

   const handleAction = () => {
      if(value.trim().length){
         dispatch(addTodo(value));
         setValue('');
      }
   }

   return (
      <div className='App'>
         <NewTodoForm
            value={value}
            updateText={setValue}
            handleAction={handleAction}
      />
      <TodoList />
      </div>
   );
}

export default App;