import {TodoItem} from './TodoItem';

import { ITodo } from '../types/data';

interface ITodoListProps {
   items: ITodo[],
   removeTodo: (id: number | string) => void,
   toggleTodo: (id: number | string) => void,
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
   const {items, removeTodo, toggleTodo} = props;

   
   return <div>
   {
      items.map((todo)=>(
         <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo}
         />
      ))
   }
   </div>;
}