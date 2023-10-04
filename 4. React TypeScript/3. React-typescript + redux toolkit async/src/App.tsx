import {useState, useEffect } from 'react';
import {useAppDispatch, useAppSelector} from './hooks';

import { fetchTodos, addNewTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
   const [value, setValue] = useState('');
   const {loading, error} = useAppSelector(state => state.todos);
   const dispatch = useAppDispatch();

   const handleAction = () => {
      if(value.trim().length){
         dispatch(addNewTodo(value));
         setValue('');
      }
   }

   useEffect(() => {
      dispatch(fetchTodos());
   }, [dispatch])

   return (
      <div className='App'>
         <NewTodoForm
            value={value}
            updateText={setValue}
            handleAction={handleAction}
      />
      
      {loading && <h2>Loading...</h2>}
      {error &&  <h2>An error occured: {error}</h2>}

      <TodoList />
      </div>
   );
}

export default App;