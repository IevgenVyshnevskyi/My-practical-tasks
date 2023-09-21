import { createSlice } from "@reduxjs/toolkit";



const repos = createSlice({
   name: 'repos', 
   initialState: {
      items: [],  // here will be a list of our repositories;
      isLoading: true,  // here we show that we are loading our repositories (that is, we show the process of loading our repositories);
      currentPage: 1,  // we show the first page to implement our pagination;
      perPage: 10,  // we show the number of elements on the page;
      totalCount: 0,  // we show the total number of elements that we will have;
      isError: false,  // we show if we get an error;
   },
   reducers: {
      setRepos(state, action){
         return {
            ...state,
            items: action.payload.items,  // "action" has two parameters "type" and "payload". Our useful data is stored in the "payload".
            totalCount: action.payload.total_count,  // where, "total_count" is the name/format of the property key that we will receive from the API and which stores information about the number of items that will be uploaded to our page;
            isLoading: false,  // after the download of our data is complete, we indicate that we have completed that download;
         }
      },
      setCurrentPage(state, action){
         return {
            ...state,
            currentPage: action.payload,  // shows us the current state of our "currentPage" value;
         }
      },
      setIsLoading(state, action){
         return {
            ...state,
            isLoading: action.payload,  // shows us the current state of our "isLoading" value;
         }
      },
      setIsError(state, action){
         return {
            ...state,
            isError: action.payload,  // shows us the current state of our "isError" value;
         }
      },
   }
});


export default repos.reducer;
export const { setRepos, setIsLoading, setIsError, setCurrentPage } = repos.actions;