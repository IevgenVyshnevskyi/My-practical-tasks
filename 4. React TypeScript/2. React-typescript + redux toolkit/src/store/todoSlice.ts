import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
   id: string,
   title: string,
   isCompleted: boolean,
   }

type TodoState = {
   list: Todo[],
   }

const initialState: TodoState = {
   list: [],
}

const todoSlice = createSlice({
   name: 'todos',
   initialState: initialState,  // you can just specify 'initialState' instead of 'initialState: initialState' and that will be enough.
   reducers: {
      setAddTodo(state, action: PayloadAction<string>){
         state.list.push({
            id: new Date().toISOString(),
            title: action.payload,
            isCompleted: false,
            });
      },
      setToggleComplete(state, action: PayloadAction<string>){
         const toggledTodo = state.list.find(todo => todo.id === action.payload);
         if(toggledTodo){
            toggledTodo.isCompleted = !toggledTodo.isCompleted;
            }
         },
      setRemoveTodo(state, action: PayloadAction<string>) {
         state.list = state.list.filter(todo => todo.id !== action.payload);
      }
   },
});

console.log('todoSlice: ', todoSlice);

export const {setAddTodo, setToggleComplete, setRemoveTodo} = todoSlice.actions;

export default todoSlice.reducer;