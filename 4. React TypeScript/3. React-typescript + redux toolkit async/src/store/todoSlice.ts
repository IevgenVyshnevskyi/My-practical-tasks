import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

type Todo = {
   id: string,
   title: string,
   isCompleted: boolean,
   }

type TodoState = {
   list: Todo[],
   loading: boolean,
   error: string | null,
   }


export const fetchTodos = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
   'todos/fetchTodos',
   async function(_, {rejectWithValue}) {

      // ideally we should use "try ... catch", but for the purposes of this video we won't use it.
         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
         if (!response.ok) {
            return rejectWithValue('Server Error!');
         }

         const data = await response.json();
         return data;
   }
);

export const addNewTodo = createAsyncThunk<Todo, string, {rejectValue: string}>(
   'todos/addNewTodo',
   async function (text, {rejectWithValue}) {

   // ideally we should use "try ... catch", but for the purposes of this video we won't use it.
      const todo = {
         title: text,
         userId: 1,
         isCompleted: false,
         };

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
         });

         if (!response.ok) {
            return rejectWithValue('Can\'t add task. Server error.');
         }
         
         const data = await response.json();
         return (data) as Todo;  // where 'Todo' is the returned data type.
   }
);


export const toggleStatus = createAsyncThunk<Todo, string, {rejectValue: string, state: {todos: TodoState}}>(
   'todos/toggleStatus',
   async function (id, {rejectWithValue, dispatch, getState}) {
      const todo = getState().todos.list.find(todo => todo.id === id);  // where with the help of the 'getState()' method we will get our 'state' and perform appropriate actions with it.

      // ideally we should use "try ... catch", but for the purposes of this video we won't use it.
      if (todo){
         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               isCompleted: !todo.isCompleted,
            })
         });

         if (!response.ok) {
            return rejectWithValue('Can\'t toggle status. Server error.');
         }

         const data = await response.json();
         return (data) as Todo;  // where 'Todo' is the returned data type.
      }
      return rejectWithValue('No such todo in the list');
   }
);


export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
   'todos/deleteTodo',
   async function(id, {rejectWithValue}) {

      // ideally we should use "try ... catch", but for the purposes of this video we won't use it.
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
         method: 'DELETE',
      })

      if (!response.ok) {
         return rejectWithValue('Can\'t delete task. Server error.');
      }
      return id;
   }
);

const initialState: TodoState = {
   list: [],
   loading: false,
   error: null,
}

const todoSlice = createSlice({
   name: 'todos',
   initialState: initialState,  // you can just specify 'initialState' instead of 'initialState: initialState' and that will be enough.
   reducers: {
   /*  setAddTodo(state, action: PayloadAction<string>){
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
      } */
   },

   // "extraReducers" in the Redux Toolkit is a part of the createSlice configuration that allows you to react to actions that were not defined in the reducers part of createSlice.
   // "builder" is an object that provides methods for defining reducers. You can use these methods to describe how state should change when different actions are performed.
   extraReducers: (builder) => (
      builder
      .addCase(fetchTodos.pending, (state) => {
         state.loading = true;
         state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
         state.list = action.payload;
         state.loading = false;
         state.error = null;
      })
      .addCase(addNewTodo.pending, (state) => {
         state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
         state.list.push(action.payload);  // add our one "Todo"
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
         const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
         if(toggledTodo){
            toggledTodo.isCompleted = !toggledTodo.isCompleted;
            }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
         state.list = state.list.filter(todo => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
         state.error = action.payload;
         state.loading = false;
      })
   )
});

export default todoSlice.reducer;

function isError(action: AnyAction){
   return action.type.endsWith('rejected');
}