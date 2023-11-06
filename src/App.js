import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GitHubIssues from './GitHubIssues';

function App() {
  const [user,setuser]=useState([])
  useEffect(()=>{
    axios.get("https://api.github.com/users/facebook")
    .then((res)=>{setuser(res.data)})
},[])
return (
  
    <>
    <a id="name" href="https://github.com/facebook">{user.login}</a>
   <img src={user.avatar_url} alt="image"/>
    
   <div>
      <GitHubIssues />
    </div>

    </>
  );
    
 
}

export default App;
