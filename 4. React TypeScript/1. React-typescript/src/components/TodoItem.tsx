import {ITodo} from '../types/data';


export interface ITodoItem extends ITodo {
   removeTodo: (id: number | string) => void,
   toggleTodo: (id: number | string) => void,
};

export const TodoItem: React.FC<ITodoItem> = (props) => {
   const {id, title, isComplete, removeTodo, toggleTodo} = props;


   return <div>
      <input type='checkbox' checked={isComplete} onChange={() => toggleTodo(id)} />
      <span
         style={{display: 'inline-block', margin: '0 10px'}}
         >
         {title}
      </span>
      <button
         onClick={() => removeTodo(id)}
         style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'red',
         }}
         >x</button>
   </div>;
}