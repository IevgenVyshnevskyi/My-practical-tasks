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
      addTodo(state, action: PayloadAction<string>){
         state.list.push({
            id: new Date().toISOString(),
            title: action.payload,
            isCompleted: false,
            });
      },
      toggleComplete(state, action: PayloadAction<string>){
         const toggledTodo = state.list.find(todo => todo.id === action.payload);
         console.log(toggledTodo);
         if(toggledTodo){
            toggledTodo.isCompleted = !toggledTodo.isCompleted;
            }
         },
      removeTodo(state, action: PayloadAction<string>) {
         state.list = state.list.filter(todo => todo.id !== action.payload);
      }
   },
});

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;