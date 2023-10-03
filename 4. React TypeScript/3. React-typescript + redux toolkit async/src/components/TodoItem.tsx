import { useAppDispatch } from '../hooks';
import {toggleStatus, deleteTodo} from '../store/todoSlice';

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
            onChange={() => dispatch(toggleStatus(id))}
         />
         <span>{title}</span>
         <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>  {/* where symbol '&times;' is a graphic symbol that looks like an "×" or "x" sign, and it is usually used to indicate a button or action to close or delete something. */}
      </li>
   );
};

export default TodoItem;