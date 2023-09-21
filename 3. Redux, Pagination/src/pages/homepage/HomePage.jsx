import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../store/reposSlice';
import { getRepos } from '../../actions/reposSliceActions';



export const HomePage = () => {
   const dispatch = useDispatch();

   const {
      items: repos,
      isLoading,
      currentPage,
      totalCount,
      perPage,
      isError,
   } = useSelector(state => state.repos);  // we get our "state" values ​​from "store", where "state.repos" is the entire "state" of our "reposSlice" slice, not some specific "state" value


   const [searchValue, setSearchValue] = useState('');
   const pagesCount = Math.ceil(totalCount / perPage);

   const pages = useCreatePages(pagesCount, currentPage);  // Call function to create pagination


      useEffect(()=> {
         dispatch(getRepos(searchValue, currentPage, perPage));
      }, [currentPage]);

      const onSearch = (event) => {
         event.preventDefault();
         dispatch(setCurrentPage(1));
         dispatch(getRepos(searchValue, currentPage, perPage));
      };


   return (
      <div>
         {isError && (
            <div>
               Something went wrong. Reload the page!
            </div>
            )
         }
         <form onSubmit={onSearch} className='search'>
            <input
               type="text"
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               placeholder="Input repo name"
               className="search input"
               />
               <button className="search-btn">Search</button>
         </form>
         <br/>
         <br/>
         { isLoading ? (
            <h3>Loading...</h3>
         ) : (
               <ol>
                  {repos.map((repo) => (
                     <li key={repo.html_url} className="RepoCard" style={{paddingBottom: "16px"}}>
                        <div className="RepoCard__header">
                           <div className="RepoCard__headerName">
                              <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
                                 {repo.name}
                              </Link>
                           </div>
                           <div>Кількість зірок: {repo.stargazers_count}</div>
                        </div>
                        <div>Останній коміт: {repo.updated_at}</div>
                        <a href={repo.html_url}>
                           Репо лінк: {repo.html_url}
                        </a>
                     </li>
                     )
                  )}
               </ol>
            )
         }
         <div>
            {pages.map((page, index) => (
                     <button
                        key={index}
                        style={currentPage === page ? {background: "green"} : {}}
                        onClick={() => dispatch(setCurrentPage(page))}
                        >
                           {page}
                     </button>
                     )) 
                  }
               </div>
         </div>
      
   );
};

// Function for creating pagination
function useCreatePages(pagesCount, currentPage) {
   const pages = [];

   if (pagesCount > 10){
      if(currentPage > 5){
         for(let i = currentPage - 4; i <= currentPage + 5; i++){
            pages.push(i);
            if (i === pagesCount){
               break;
            }
         }
      } else {
         for(let i = 1; i <= 10; i++){
            pages.push(i);
            if (i === pagesCount){
               break;
            }
         }
      }
      } else {
         for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
         }
      }
      return pages;
}
