import { combineReducers, configureStore } from "@reduxjs/toolkit";

import repos from './reposSlice';


const rootReducer = combineReducers({
   repos,
});

// We create a Redux storage unit (store)
const store = configureStore({
   reducer: rootReducer  // We connect the reducer
   }
);

export default store;
