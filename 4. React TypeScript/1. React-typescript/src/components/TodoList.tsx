import {TodoItem} from './TodoItem';

import { ITodo } from '../types/data';

interface ITodoListProps {
   items: ITodo[],
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
   const todos = props.items;


   return <div>
   {
      todos.map((todo)=>(
         <TodoItem key={todo.id} {...todo} />
         // <TodoItem key={todo.id} todo={todo} />  // another variant of pre-recording
      ))
   }
   </div>;
}