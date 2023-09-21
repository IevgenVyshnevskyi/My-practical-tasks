import React, { useState, useEffect } from 'react';
import {  useNavigate, useParams } from "react-router-dom";
import { getCurrentRepo, getContributors } from '../../actions/reposSliceActions';


export const RepoPage = () => {
   const navigate = useNavigate();
   const { owner, repoName } = useParams();
   const [repo, setRepo] = useState({owner: {}});
   const [contributors, setContributors] = useState([]);


   useEffect(() => {
      async function load(){
         setRepo(await getCurrentRepo(owner, repoName));
         setContributors(await getContributors(owner, repoName));
      }

      load();
   }, []);


   return (
      <div>
         <button onClick={() => navigate(-1)}>
            BACK
         </button>

         <div className="card">
            <img src={repo.owner.avatar_url} alt="avatar" />
            <div className="name">{repo.name}</div>
            <div className="stars">{repo.stargazers_count}</div>
         </div>

         {Array.isArray(contributors) && contributors.map((_, index) => (
            <div key={_.login}>{index + 1}.{_.login}</div>
            ))
         }
      </div>
   )
}