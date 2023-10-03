// this line imports the configureStore function from the Redux Toolkit library.
// It is used to create a Redux store with passed parameters.
import { configureStore } from '@reduxjs/toolkit';

// this line imports the todoReducer reducer from the file './todoSlice'.
// A reducer is responsible for handling actions and changing state for a part of the page called "todos".
import todoReducer from './todoSlice';


// a Redux store is created and configureStore is called with the settings object.
// In this object, we specify the reducers that will be used in our story.
// In this case, one reducer is specified under the "todos" key.
const store = configureStore({
   reducer: {
      todos: todoReducer,
   },
});

export default store;

// the RootState type is exported, which is defined as the type returned by the store.getState() function.
// RootState is used to type selectors and other parts of the application that work with Redux state.
export type RootStateType = ReturnType<typeof store.getState>;

// the AppDispatch type is exported, which is defined as the store.dispatch type.
// AppDispatch is used to typify the Redux dispatcher and provide typical interaction with Redux actions.
export type AppDispatchType = typeof store.dispatch;
