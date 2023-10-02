import { useAppDispatch } from '../hooks';
import {toggleComplete, removeTodo} from '../store/todoSlice';

interface TodoItemProps {
   id: string,
   title: string,
   isCompleted: boolean,
}

const TodoItem: React.FC<TodoItemProps > = ({ id, title, isCompleted }) => {
   const dispatch = useAppDispatch();

   return (
      <li>
         <input
            type='checkbox'
            checked={isCompleted}
            onChange={() => dispatch(toggleComplete(id))}
         />
         <span>{title}</span>
         <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
      </li>
   );
};

export default TodoItem;