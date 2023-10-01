import {ITodo} from '../types/data';

export interface ITodoItem extends ITodo{};

/* export interface TodoItem {  // another variant of pre-recording
   todo: ITodo,
}; */

export const TodoItem: React.FC<ITodoItem> = (props) => {
   
   const {id, title, isComplete} = props;
   //const todo = props.todo;  // another variant of pre-recording


   return <div>
      <input type='checkbox' checked={isComplete} />
         {title}
      <button>x</button>
   </div>;
}