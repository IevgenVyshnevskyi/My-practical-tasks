import { useAppSelector } from '../hooks';
import TodoItem from './TodoItem';


const TodoList: React.FC = () => {
   const todos = useAppSelector(state => state.todos.list);
   
   console.log('state :', useAppSelector(state => state));
   console.log('state.todos :', useAppSelector(state => state.todos));
   console.log('state.todos.list :', useAppSelector(state => state.todos.list));

   return (
      <ul>
         {Array.isArray(todos) && todos.map((todo) => (
            <TodoItem
               key={todo.id}
               {...todo}
         />
         ))}
      </ul>
   );
};

export default TodoList;