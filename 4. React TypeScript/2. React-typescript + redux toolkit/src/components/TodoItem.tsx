import { useAppDispatch } from '../hooks';
import {setToggleComplete, setRemoveTodo} from '../store/todoSlice';

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
            onChange={() => dispatch(setToggleComplete(id))}
         />
         <span>{title}</span>
         <span onClick={() => dispatch(setRemoveTodo(id))}>&times;</span>  {/* where symbol '&times;' is a graphic symbol that looks like an "×" or "x" sign, and it is usually used to indicate a button or action to close or delete something. */}
      </li>
   );
};

export default TodoItem;