import { setRepos, setIsLoading, setIsError } from '../store/reposSlice';

import axios from 'axios';


export function getRepos(searchQuery, currentPage, perPage){
   if (!searchQuery || searchQuery === ''){
      searchQuery = decodeURIComponent('stats:>1'); 
   }

   return async (dispatch) => {
      try {
         dispatch(setIsLoading(true));
         const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
         console.log('response.data :', response.data);
      //   console.log('response.data.items :', response.data.items);
      //   console.log('response.data.total_count :', response.data.total_count);
         dispatch(setRepos(response.data));
      } catch (error) {
         dispatch(setIsError(true));
         dispatch(setIsLoading(false));
         setTimeout(() => {
            dispatch(setIsError(false));
         }, 2000);
      }
   };
};

export async function getCurrentRepo(username, repoName){
   const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
   return response.data;
};

export async function getContributors(username, repoName){
   const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`);
   return response.data;
};